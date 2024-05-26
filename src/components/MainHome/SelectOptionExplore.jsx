import useFetchData from "../../hooks/useFetchData";
import { HomeBtn, Option, Select, SelectContainer } from "./MainHome.style";
import { Button } from "react-bootstrap";

function SelectOptionExplore() {
  let path = "romania";
  const { data, error, loading } = useFetchData("/" + path);

  return (
    <>
      {/* <Button
        variant="danger"
        onClick={() => {
          path = "romania";
          console.log("path", path);
          console.log("data from fetch", data);
        }}
      >
        Press for Romania
      </Button> */}
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
      {loading && <div>Loading...</div>}
      {error && <div>{error} Error on getting data, Server is down :( </div>}
      {data && console.log(data)}
    </>
  );
}

export default SelectOptionExplore;
