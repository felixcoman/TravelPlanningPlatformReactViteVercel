import { getAll } from "@vercel/edge-config";

export default async function handler(req, res) {
  const vercelApiToken = process.env.VERCEL_ACCESS_TOKEN;
  const edgeConfigId = process.env.EDGE_CONFIG_ID;

  if (!vercelApiToken || !edgeConfigId) {
    return res.status(500).json({ message: "Missing Vercel API credentials" });
  }

  try {
    if (req.method === "GET") {
      // Fetch existing feedback
      const existingConfig = await getAll();
      const feedback = existingConfig.feedbackData || [];
      return res.status(200).json({ feedback: feedback });
    }

    if (req.method === "PATCH") {
      const newFeedback = req.body;

      // if (!newFeedback.Name || !newFeedback.Textarea) {
      //   return res.status(400).json({ message: "Invalid feedback data" });
      // }

      // Fetch current feedback data
      const existingConfig = await getAll();
      const feedback = existingConfig.feedbackData || [];

      feedback.push(newFeedback);

      // Update Edge Config with new feedback
      const updateResponse = await fetch(
        `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${vercelApiToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                operation: "update",
                key: "feedbackData",
                value: feedback,
              },
            ],
          }),
        }
      );

      if (!updateResponse.ok) {
        throw new Error(
          `Failed to update Edge Config: ${await updateResponse.text()}`
        );
      }

      return res
        .status(200)
        .json({ message: "Feedback submitted successfully" });
    }

    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Error processing feedback:", error);
    return res.status(500).json({ message: "Error processing feedback" });
  }
}
