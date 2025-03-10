export default async function handler(req, res) {
  const vercelApiToken = process.env.VERCEL_API_TOKEN;
  const edgeConfigId = process.env.EDGE_CONFIG_ID;

  if (!vercelApiToken || !edgeConfigId) {
    return res.status(500).json({ message: "Missing API credentials" });
  }

  if (req.method === "POST") {
    try {
      const { Name, Surname, Mobile, Email, Textarea } = req.body;

      // Fetch existing data
      const existingFeedback = (await get("feedbackData")) || [];

      // Create new feedback entry
      const newFeedback = {
        Name,
        Surname,
        Mobile,
        Email,
        Textarea,
        id: existingFeedback.length + 1,
      };

      // Send data to Vercel Edge Config
      const response = await fetch(
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
                key: "feedbackData",
                value: [...existingFeedback, newFeedback],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update Edge Config");
      }

      return res.status(201).json(newFeedback);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const feedbackData = (await get("feedbackData")) || [];
      return res.status(200).json(feedbackData);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching feedback data" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
