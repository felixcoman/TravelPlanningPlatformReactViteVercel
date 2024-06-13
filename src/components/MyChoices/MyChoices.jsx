import { useContext } from "react";
import { useParams } from "react-router-dom";
import { removeChoice } from "../../Store/actions";
import { ChoiceContext } from "../../Store/context";
import { MainContainerChoice } from "../MyTravelCity/MyTravel.style";
import MyChoicesBox from "./MyChoicesBox";

function MyChoices() {
  const { id } = useParams();

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const handleDelete = (index) => {
    dispatchChoice(removeChoice(index));
  };

  console.log("stateGlobalChoice.choiceValue", stateGlobalChoice.choiceValue);

  return (
    <>
      <MainContainerChoice loc="MainContainerChoice">
        {stateGlobalChoice.choiceValue.map((e, index) => (
          <MyChoicesBox
            id={id}
            key={index}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            buget={e.buget}
            data={e.data}
            handleDelete={() => handleDelete(index)}
            handleUpdateChoice={() => handleUpdateChoice()}
          />
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
