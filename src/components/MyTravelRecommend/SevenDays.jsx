import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function SevenDays({ period }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> day one:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.dayone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day two:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.daytwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day three:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.daythree}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day four:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.dayfour}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day five:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.dayfive}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day six:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.daysix}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">day seven:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {period.sevendays.dayseven}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default SevenDays;
