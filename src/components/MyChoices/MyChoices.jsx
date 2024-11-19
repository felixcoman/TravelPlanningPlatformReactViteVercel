import { useContext, useState } from "react";
import { removeChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import { MainContainerChoice } from "../MyTravelCity/MyTravel.style";
import MyChoicesBox from "./MyChoicesBox";
import useRemoveData from "../../hooks/useRemoveData";

function MyChoices() {
  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const { localData } = useLocalStorage("user");
  console.log("localData", localData);

  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);
  const [indexServer, setIndexServer] = useState(null);

  const { error, loading } = useRemoveData(
    localData,
    indexServer,
    setIndexServer,
    "choices"
  );
  console.log("error HOOK", error, "loading HOOK", loading);

  const handleDelete = (index) => {
    setShow(false);
    dispatchChoice(removeChoice(index));
    console.log(
      "stateGlobalChoice.choiceValue.length",
      stateGlobalChoice.choiceValue.length
    );
    //specifying index server because element sequence is reversed from that of the global array (first added element is on last position in global array but on first position on server)
    setIndexServer(stateGlobalChoice.choiceValue.length - 1 - index);
    console.log("indexServer", indexServer, "index", index);
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
            index={index}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            budget={e.budget}
            data={e.data}
            handleDelete={() => handleDelete(index)}
            show={show && showId === index}
            setShow={setShow}
            setShowId={setShowId}
          />
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
