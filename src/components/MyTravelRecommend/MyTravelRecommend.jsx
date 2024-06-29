import {
  MainContainerRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";
import ThreeDays from "./ThreeDays";
import FiveDays from "./FiveDays";
import SevenDays from "./SevenDays";
import LowBudget from "./LowBudget";
import MediumBudget from "./MediumBudget";
import HighBudget from "./HighBudget";

function MyTravelRecommend({ budgetTravel, periodTravel, data }) {
  const budgetData = data ? data[0].budget : null;
  const periodData = data ? data[0].period : null;

  const budgetTravelNoSpace = budgetTravel.replace(/ /g, "").toLowerCase();
  const periodTravelNoSpace = periodTravel.replace(/ /g, "").toLowerCase();

  const keyBudget = Object.keys(budgetData);
  const keyPeriod = Object.keys(periodData);

  const equalBudgetLow =
    budgetTravelNoSpace == keyBudget[0].toLowerCase() ? true : false;
  const equalBudgetMedium =
    budgetTravelNoSpace == keyBudget[1].toLowerCase() ? true : false;
  const equalBudgetHigh =
    budgetTravelNoSpace == keyBudget[2].toLowerCase() ? true : false;

  const equalPeriodThree =
    periodTravelNoSpace == keyPeriod[0].toLowerCase() ? true : false;
  const equalPeriodFive =
    periodTravelNoSpace == keyPeriod[1].toLowerCase() ? true : false;
  const equalPeriodSeven =
    periodTravelNoSpace == keyPeriod[2].toLowerCase() ? true : false;

  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        {data && (
          <>
            <DataContainerRecommend loc="DataContainerRecommend">
              {equalPeriodThree
                ? data.map((e, index) => <ThreeDays key={index} {...e} />)
                : null}
              {equalPeriodFive
                ? data.map((e, index) => <FiveDays key={index} {...e} />)
                : null}
              {equalPeriodSeven
                ? data.map((e, index) => <SevenDays key={index} {...e} />)
                : null}
            </DataContainerRecommend>
            <DataContainerRecommend loc="DataContainerRecommend">
              {equalBudgetLow
                ? data.map((e, index) => <LowBudget key={index} {...e} />)
                : null}
              {equalBudgetMedium
                ? data.map((e, index) => <MediumBudget key={index} {...e} />)
                : null}

              {equalBudgetHigh
                ? data.map((e, index) => <HighBudget key={index} {...e} />)
                : null}
            </DataContainerRecommend>
          </>
        )}
      </MainContainerRecommend>
    </>
  );
}

export default MyTravelRecommend;
