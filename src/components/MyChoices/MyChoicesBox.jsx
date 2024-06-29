import {
  ButtonPlanTravel,
  DataContainerChoice,
  MainContainerChoice,
  PageContainerTravel,
  TextChoice,
  TextOrangeChoice,
} from "../MyTravelCity/MyTravel.style";
import FiveDays from "../MyTravelRecommend/FiveDays";
import HighBudget from "../MyTravelRecommend/HighBudget";
import LowBudget from "../MyTravelRecommend/LowBudget";
import MediumBudget from "../MyTravelRecommend/MediumBudget";
import SevenDays from "../MyTravelRecommend/SevenDays";
import ThreeDays from "../MyTravelRecommend/ThreeDays";

function MyChoicesBox({
  country,
  city,
  region,
  budget,
  period,
  data,
  handleDelete,
}) {
  console.log("databox", data);
  console.log("budget", budget);

  const budgetTravelNoSpace = budget?.replace(/ /g, "").toLowerCase();
  console.log("budgetTravelNoSpace", budgetTravelNoSpace);

  const periodTravelNoSpace = period?.replace(/ /g, "").toLowerCase();

  const keyBudget = data && Object.keys(data?.[0]?.budget);
  console.log("keyBudget", keyBudget);

  const keyPeriod = data && Object.keys(data?.[0]?.period);

  const equalBudgetLow =
    budgetTravelNoSpace == keyBudget?.[0]?.toLowerCase() ? true : false;
  console.log("equalBudgetLow", equalBudgetLow);

  const equalBudgetMedium =
    budgetTravelNoSpace == keyBudget?.[1]?.toLowerCase() ? true : false;
  const equalBudgetHigh =
    budgetTravelNoSpace == keyBudget?.[2]?.toLowerCase() ? true : false;

  const equalPeriodThree =
    periodTravelNoSpace == keyPeriod?.[0].toLowerCase() ? true : false;
  const equalPeriodFive =
    periodTravelNoSpace == keyPeriod?.[1].toLowerCase() ? true : false;
  const equalPeriodSeven =
    periodTravelNoSpace == keyPeriod?.[2].toLowerCase() ? true : false;

  return (
    <>
      <PageContainerTravel loc="PageContainerTravel">
        <DataContainerChoice loc="DataContainerChoice">
          <TextOrangeChoice loc="TextOrangeChoice"> Country:</TextOrangeChoice>
          <TextChoice loc="TextChoice">{country}</TextChoice>
        </DataContainerChoice>

        {city ? (
          <DataContainerChoice loc="DataContainerChoice">
            <TextOrangeChoice loc="TextOrangeChoice"> City:</TextOrangeChoice>
            <TextChoice loc="TextChoice">{city}</TextChoice>
          </DataContainerChoice>
        ) : (
          <DataContainerChoice loc="DataContainerChoice">
            <TextOrangeChoice loc="TextOrangeChoice"> Region:</TextOrangeChoice>
            <TextChoice loc="TextChoice">{region}</TextChoice>
          </DataContainerChoice>
        )}

        {period ? (
          <MainContainerChoice loc="MainContainerChoice">
            <DataContainerChoice loc="DataContainerChoice">
              <TextOrangeChoice loc="TextOrangeChoice">
                Period:
              </TextOrangeChoice>
              <TextChoice loc="TextChoice">{period} </TextChoice>
            </DataContainerChoice>
            {equalPeriodThree
              ? data?.map((e, index) => <ThreeDays key={index} {...e} />)
              : null}
            {equalPeriodFive
              ? data?.map((e, index) => <FiveDays key={index} {...e} />)
              : null}
            {equalPeriodSeven
              ? data?.map((e, index) => <SevenDays key={index} {...e} />)
              : null}
          </MainContainerChoice>
        ) : null}

        {budget ? (
          <MainContainerChoice loc="MainContainerChoice">
            <DataContainerChoice loc="DataContainerChoice">
              <TextOrangeChoice loc="TextOrangeChoice">
                Budget:
              </TextOrangeChoice>
              <TextChoice loc="TextChoice">{budget}</TextChoice>
            </DataContainerChoice>
            {equalBudgetLow
              ? data?.map((e, index) => <LowBudget key={index} {...e} />)
              : null}
            {equalBudgetMedium
              ? data?.map((e, index) => <MediumBudget key={index} {...e} />)
              : null}

            {equalBudgetHigh
              ? data?.map((e, index) => <HighBudget key={index} {...e} />)
              : null}
          </MainContainerChoice>
        ) : null}
        <ButtonPlanTravel loc="ButtonPlanTravel" onClick={handleDelete}>
          Delete my choice
        </ButtonPlanTravel>
      </PageContainerTravel>
    </>
  );
}

export default MyChoicesBox;
