import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function HighBuget({ buget }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <TextRecommend loc="TextRecommend">
          We can recommend you some hotels:
        </TextRecommend>
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {buget.highBuget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {buget.highBuget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {buget.highBuget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default HighBuget;
