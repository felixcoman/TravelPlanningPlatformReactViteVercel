import { SelectContainer, Select, Option, HomeBtn } from "./MainHome.style";

function SelectOptionPlan() {
  return (
    <>
      <SelectContainer loc="SelectContainer">
        <Select loc="Select">
          <Option loc="Option" value="country">
            Countries
          </Option>
          <Option loc="Option" value="italy">
            Italy
          </Option>
          <Option loc="Option" value="france">
            France
          </Option>
          <Option loc="Option" value="romania">
            Romania
          </Option>
          <Option loc="Option" value="spain">
            Spain
          </Option>
        </Select>
        <Select loc="Select">
          <Option loc="Option" value="cityRegion">
            Cities/Regions
          </Option>
          <Option loc="Option" value="city">
            Cities
          </Option>
          <Option loc="Option" value="region">
            Regions
          </Option>
        </Select>
      </SelectContainer>
      <HomeBtn loc="HomeBtn">Let's Begin To Travel!</HomeBtn>
    </>
  );
}

export default SelectOptionPlan;
