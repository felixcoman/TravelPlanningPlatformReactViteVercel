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
  const [expanded, setExpanded] = useState(null); // state null / explore / plan

  const handleClickExplore = () => {
    setExpanded(expanded === "explore" ? null : "explore");
  };

  const handleClickPlan = () => {
    setExpanded(expanded === "plan" ? null : "plan");
  };

  return (
    <MainButtonsContainer loc="MainButtonsContainer">
      <OptionContainer loc="OptionContainer">
        <ButtonsContainer
          loc="ButtonsContainer"
          expanded={expanded ? "true" : "false"}
        >
          <Buttons
            loc="Buttons"
            expanded={expanded === "explore"}
            onClick={handleClickExplore}
          >
            I Want To Explore Offers
          </Buttons>
          <Buttons
            loc="Buttons"
            expanded={expanded === "plan"}
            onClick={handleClickPlan}
          >
            Help me Plan
          </Buttons>
        </ButtonsContainer>
        {expanded === "explore" && <SelectOptionExplore expanded="true" />}
        {expanded === "plan" && <SelectOptionPlan expanded="true" />}
      </OptionContainer>
    </MainButtonsContainer>
  );
}

export default MainButtons;
