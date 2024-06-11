import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function LowBuget({ buget }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <TextRecommend loc="TextRecommend">
          We can recommend you some hotels:
        </TextRecommend>
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {buget.lowBuget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {buget.lowBuget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {buget.lowBuget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default LowBuget;
