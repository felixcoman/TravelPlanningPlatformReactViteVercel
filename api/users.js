import { getAll } from "@vercel/edge-config";

export default async function handler(req, res) {
  const vercelApiToken = process.env.VERCEL_ACCESS_TOKEN;
  const edgeConfigId = process.env.EDGE_CONFIG_ID;
  const queryID = req.query.id; // Match the frontend parameter name

  if (!vercelApiToken || !edgeConfigId) {
    return res.status(500).json({ message: "Missing Vercel API credentials" });
  }

  try {
    // show new user and id
    if (queryID !== undefined && req.method === "GET") {
      console.log("queryID", queryID);

      const existingConfig = await getAll();
      console.log("Existing Config:", existingConfig);

      const users = existingConfig.userData || [];
      console.log("Users Array:", users);

      const getID = users.find((element) => element.id == queryID);

      if (!getID) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(getID);
    }

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
      console.log("users", users);

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      const code = getRandomInt(100);

      const foundID = users.find((element) => element.id === code);

      if (!foundID) {
        newUser.id = code;
        users.push(newUser);
      } else {
        return res.status(500).json({ message: "Error generating new ID" });
      }

      // Update Edge Config with new user
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
      const updateResult = await updateResponse.json();
      console.log("Edge Config update result:", updateResult);

      if (!updateResponse.ok) {
        throw new Error(
          `Failed to update Edge Config: ${JSON.stringify(updateResult)}`
        );
      }

      return res.status(200).json({
        message: "User submitted successfully",
        responseID: newUser.id,
      });
    }
    if (queryID !== undefined && req.method === "PUT") {
      const updateUser = req.body;
      console.log("new data to be added", updateUser);

      // Fetch current user data
      const existingConfig = await getAll();
      if (!existingConfig.userData) {
        return res.status(400).json({
          message: "userData key does not exist. Use PATCH to create it first.",
        });
      }

      console.log("Existing Config in Edge:", existingConfig);
      const users = existingConfig.userData || [];
      console.log("Users before update", users);

      // Find user index
      const indexUpdate = users.findIndex(
        (element) => element.Email === updateUser.Email
      );
      if (indexUpdate === -1) {
        return res.status(404).json({ message: "User not found" });
      }

      console.log("indexUpdate", indexUpdate, "updateUser", updateUser);

      // Replace user data
      users[indexUpdate] = updateUser;

      console.log("Updated user data:", JSON.stringify(users, null, 2));

      // Update Edge Config with new user
      const updateResponse = await fetch(
        `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${vercelApiToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                operation: "upsert",
                key: "userData",
                value: users,
              },
            ],
          }),
        }
      );

      const updateResult = await updateResponse.json();
      console.log("Edge Config update result:", updateResult);

      if (!updateResponse.ok) {
        throw new Error(
          `Failed to update Edge Config: ${JSON.stringify(updateResult)}`
        );
      }

      return res.status(200).json({
        message: "User updated successfully",
        response: updateUser,
      });
    }
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Error processing users:", error);
    return res.status(500).json({ message: "Error processing users" });
  }
}
