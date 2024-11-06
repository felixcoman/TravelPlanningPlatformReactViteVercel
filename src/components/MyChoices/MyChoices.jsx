import { useContext } from "react";
import { removeChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import { MainContainerChoice } from "../MyTravelCity/MyTravel.style";
import MyChoicesBox from "./MyChoicesBox";

function MyChoices() {
  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const handleUpdateChoice = (indexServer) => {
    console.log("stateGlobalChoice.choiceValue", stateGlobalChoice.choiceValue);
    console.log("stateGlobalChoice", stateGlobalChoice);
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
        // Filter out the choice object at the specified index
        const updatedChoices = userData.choices.filter(
          (choice, i) => i !== indexServer
        );

        // Send the updated data back to the server
        fetch(`http://localhost:3001/users/${localData}`, {
          method: "PUT",
          body: JSON.stringify({ ...userData, choices: updatedChoices }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.error("Error updating user data:", error));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const handleDelete = (index) => {
    dispatchChoice(removeChoice(index));
    console.log(
      "stateGlobalChoice.choiceValue.length",
      stateGlobalChoice.choiceValue.length
    );
    const indexServer = stateGlobalChoice.choiceValue.length - 1 - index;
    console.log("indexServer", indexServer, "index", index);
    handleUpdateChoice(indexServer);
  };

  console.log("stateGlobalChoice.choiceValue", stateGlobalChoice.choiceValue);
  console.log("id", localData);

  return (
    <>
      {stateGlobalChoice.choiceValue.length === 0 && (
        <InfoSection loc="InfoSection">
          <InfoUser>
            You didn't make any choices yet! Go to "Help me Plan" and select a
            destination that you wish to travel to!
          </InfoUser>
          <ButtonInfo loc="ButtonInfo" to={`/home`}>
            Take me back to Home screen!
          </ButtonInfo>
        </InfoSection>
      )}
      <MainContainerChoice loc="MainContainerChoice">
        {stateGlobalChoice.choiceValue.map((e, index) => (
          <MyChoicesBox
            id={localData}
            key={index}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            budget={e.budget}
            data={e.data}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
