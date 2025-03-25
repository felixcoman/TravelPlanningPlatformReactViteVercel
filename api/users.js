import { getAll } from "@vercel/edge-config";

export default async function handler(req, res) {
  const vercelApiToken = process.env.VERCEL_ACCESS_TOKEN;
  const edgeConfigId = process.env.EDGE_CONFIG_ID;

  if (!vercelApiToken || !edgeConfigId) {
    return res.status(500).json({ message: "Missing Vercel API credentials" });
  }

  try {
    if (req.method === "GET") {
      // Fetch existing users
      const existingConfig = await getAll();
      const users = existingConfig.userData || [];
      return res.status(200).json({ users: users });
    }
    if (req.method === "PATCH") {
      const newUser = req.body;
      console.log("req.body", req.body);

      // Fetch current user data
      const existingConfig = await getAll();
      const users = existingConfig.userData || [];

      users.push(newUser);

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
                key: "userData",
                value: users,
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

      return res.status(200).json({ message: "User submitted successfully" });
    }
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Error processing users:", error);
    return res.status(500).json({ message: "Error processing users" });
  }
}
