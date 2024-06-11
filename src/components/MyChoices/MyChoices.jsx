import { useContext } from "react";
import { ChoiceContext } from "../../global/choice/context";
import {
  ButtonPlanTravel,
  MainContainerChoice,
} from "../MyTravelCity/MyTravel.style";
import { removeChoice } from "../../global/choice/actions";
import MyChoicesBox from "./MyChoicesBox";

function MyChoices() {
  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const handleDelete = (country, city, buget, period, data) => {
    dispatchChoice(removeChoice(country, city, buget, period, data));
  };

  console.log(stateGlobalChoice.choiceValue);

  return (
    <>
      <MainContainerChoice loc="MainContainerChoice">
        {stateGlobalChoice.choiceValue.map((e, index) => (
          <MyChoicesBox
            key={index}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            buget={e.buget}
            data={e.data}
            handleDelete={handleDelete}
          />
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
