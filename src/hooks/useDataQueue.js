import { useCallback, useRef } from "react";

function useDataQueue(localData, arrayName) {
  const queue = useRef(Promise.resolve());
  const userDataRef = useRef(null); // Cache the last good userData
  console.log("queue", queue);
  console.log("userDataRef", userDataRef);

  const enqueue = useCallback(
    (newItem, onSuccess, onError) => {
      queue.current = queue.current.then(() => {
        return new Promise(async (resolve) => {
          try {
            // 1. First time only, fetch userData
            if (!userDataRef.current) {
              console.log("Initial GET userData from Edge Config...");
              const getRes = await fetch(`/api/users?id=${localData}`);
              const fetchedUserData = await getRes.json();
              userDataRef.current = fetchedUserData;
            }

            const userData = userDataRef.current;
            console.log("userData", userData);

            // 2. Append newItem
            console.log("Queueing item:", newItem);

            const updatedArray = userData[arrayName]
              ? [...userData[arrayName], newItem]
              : [newItem];
            const updatedUser = { ...userData, [arrayName]: updatedArray };

            console.log("Updating with", updatedArray);
            console.log("updatedUser", updatedUser);

            // 3. Wait for Edge Config delay
            await new Promise((r) => setTimeout(r, 14000));

            // 4. PUT with updated array
            const putRes = await fetch(`/api/users?id=${localData}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedUser),
            });

            const putResult = await putRes.json();

            if (!putRes.ok) throw new Error("PUT failed");

            // 5. Cache this updated data
            userDataRef.current = updatedUser;
            console.log("updatedUser", updatedUser);

            console.log("PUT success", putResult);
            onSuccess?.(putResult);
            resolve();
          } catch (err) {
            console.error("Error during queue op", err);
            onError?.(err);
            resolve(); // Let next queue item run
          }
        });
      });
    },
    [localData, arrayName]
  );

  return enqueue;
}

export default useDataQueue;
