import { useState } from "react";
import {
  Buttons,
  ButtonsContainer,
  OptionContainer,
  MainButtonsContainer,
} from "./MainHome.style";
import SelectOptionExplore from "./SelectOptionExplore";
import SelectOptionPlan from "./SelectOptionPlan";

function MainButtons() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleClickExplore = () => {
    setIsVisible1(!isVisible1);
    setIsVisible2(false);
  };
  const handleClickPlan = () => {
    setIsVisible2(!isVisible2);
    setIsVisible1(false);
  };

  return (
    <MainButtonsContainer loc="MainButtonsContainer">
      <OptionContainer loc="OptionContainer">
        <ButtonsContainer loc="ButtonsContainer">
          <Buttons loc="Buttons" onClick={() => handleClickExplore()}>
            I Want To Explore Offers
          </Buttons>
          <Buttons loc="Buttons" onClick={() => handleClickPlan()}>
            Help me Plan
          </Buttons>
        </ButtonsContainer>
        {isVisible1 && <SelectOptionExplore />}
        {isVisible2 && <SelectOptionPlan />}
      </OptionContainer>
    </MainButtonsContainer>
  );
}

export default MainButtons;
