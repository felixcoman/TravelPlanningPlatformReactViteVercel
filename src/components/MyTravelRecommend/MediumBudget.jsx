import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "./MyTravelRecommend.style";

function MediumBudget({ budget }) {
  return (
    <>
      <MainContainerRecommend loc="MainContainerRecommend">
        <TextRecommend loc="TextRecommend">
          We can recommend you some hotels:
        </TextRecommend>
        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend"> Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.mediumBudget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.mediumBudget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend loc="DataContainerRecommend">
          <TextRecommend loc="TextRecommend">Hotel:</TextRecommend>
          <TextContainerRecommend loc="TextContainerRecommend">
            {budget.mediumBudget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default MediumBudget;
