import { Option } from "./MainHome.style";

function GetOptionCities({ value }) {
  console.log("in GetOptionCities, value is", value);
  return (
    <Option loc="Option" value={value}>
      {value}
    </Option>
  );
}

export default GetOptionCities;
