import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "./MyTravelRecommend.style";

function LowBudget({ budget }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <TextRecommend loc="TextRecommend">
          We can recommend you some hotels:
        </TextRecommend>
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.lowBudget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.lowBudget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.lowBudget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default LowBudget;
