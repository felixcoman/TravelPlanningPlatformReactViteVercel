import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function FiveDays({ period }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> day one:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.fivedays.dayone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day two:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.fivedays.daytwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day three:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.fivedays.daythree}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day four:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.fivedays.dayfour}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day five:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.fivedays.dayfive}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default FiveDays;
