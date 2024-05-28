import { useState, useRef } from "react";
import { Buttons, ButtonsContainer, OptionContainer } from "./MainHome.style";
import SelectOptionExplore from "./SelectOptionExplore";
import SelectOptionPlan from "./SelectOptionPlan";

function MainButtons() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const handleClickExplore = () => {
    setIsVisible1(!isVisible1);
    setIsVisible2(false);
    !isVisible1 ? buttonRef1.current.focus() : buttonRef1.current.blur();
  };
  const handleClickPlan = () => {
    setIsVisible2(!isVisible2);
    setIsVisible1(false);
    !isVisible2 ? buttonRef2.current.focus() : buttonRef2.current.blur();
  };

  return (
    <>
      <OptionContainer loc="OptionContainer">
        <ButtonsContainer loc="ButtonsContainer">
          <Buttons
            loc="Buttons"
            ref={buttonRef1}
            onClick={() => handleClickExplore()}
          >
            I Want To Explore Offers
          </Buttons>
          <Buttons
            loc="Buttons"
            ref={buttonRef2}
            onClick={() => handleClickPlan()}
          >
            Help me Plan
          </Buttons>
        </ButtonsContainer>
        {isVisible1 && <SelectOptionExplore />}
        {isVisible2 && <SelectOptionPlan />}
      </OptionContainer>
    </>
  );
}

export default MainButtons;
