import { Option } from "./MainHome.style";

function GetOption({ value }) {
  console.log("in GetOption, value is", value);
  return (
    <Option loc="Option" value={value}>
      {value}
    </Option>
  );
}

export default GetOption;
