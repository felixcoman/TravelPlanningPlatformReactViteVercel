import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "./MyTravelRecommend.style";

function HighBudget({ budget }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <TextRecommend loc="TextRecommend">
          We can recommend you some hotels:
        </TextRecommend>
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.highBudget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.highBudget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.highBudget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default HighBudget;
