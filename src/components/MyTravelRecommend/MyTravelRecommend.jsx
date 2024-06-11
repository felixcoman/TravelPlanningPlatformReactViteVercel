import {
  MainContainerRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";
import ThreeDays from "./ThreeDays";
import FiveDays from "./FiveDays";
import SevenDays from "./SevenDays";
import LowBuget from "./LowBuget";
import MediumBuget from "./MediumBuget";
import HighBuget from "./HighBuget";

function MyTravelRecommend({ bugetTravel, periodTravel, data }) {
  const bugetData = data[0].buget;
  const periodData = data ? data[0].period : null;

  const bugetTravelNoSpace = bugetTravel.replace(/ /g, "").toLowerCase();
  const periodTravelNoSpace = periodTravel.replace(/ /g, "").toLowerCase();

  const keyBuget = Object.keys(bugetData);
  const keyPeriod = Object.keys(periodData);

  const equalBugetLow =
    bugetTravelNoSpace == keyBuget[0].toLowerCase() ? true : false;
  const equalBugetMedium =
    bugetTravelNoSpace == keyBuget[1].toLowerCase() ? true : false;
  const equalBugetHigh =
    bugetTravelNoSpace == keyBuget[2].toLowerCase() ? true : false;

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
              {equalBugetLow
                ? data.map((e, index) => <LowBuget key={index} {...e} />)
                : null}
              {equalBugetMedium
                ? data.map((e, index) => <MediumBuget key={index} {...e} />)
                : null}

              {equalBugetHigh
                ? data.map((e, index) => <HighBuget key={index} {...e} />)
                : null}
            </DataContainerRecommend>
          </>
        )}
      </MainContainerRecommend>
    </>
  );
}

export default MyTravelRecommend;
