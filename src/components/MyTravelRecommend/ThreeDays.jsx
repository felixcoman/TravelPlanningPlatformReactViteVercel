import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function ThreeDays({ period }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> day one:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.threedays.dayone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day two:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.threedays.daytwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day three:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.threedays.daythree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default ThreeDays;
