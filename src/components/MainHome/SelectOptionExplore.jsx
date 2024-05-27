import useFetchData from "../../hooks/useFetchData";
import { HomeBtn, Option, Select, SelectContainer } from "./MainHome.style";
import { Button } from "react-bootstrap";
import { useState } from "react";

function SelectOptionExplore() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [clicked, setClicked] = useState(false);

  const url = selectedCountry
    ? `http://localhost:3001/${selectedCountry}`
    : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  // const { data, error, loading } = useFetchData(url);

  const handleDropdownChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer loc="SelectContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Select Country:
            <Select
              value={selectedCountry}
              onChange={handleDropdownChange}
              loc="Select"
            >
              <Option loc="Option" value="">
                --Pick a country--
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
          </label>
          <button type="submit">Let's Begin To Travel!</button>
        </form>
        {/* <label>
          Pick a city:
          <Select loc="Select" name="city">
            <Option loc="Option" value="city1">
              City1
            </Option>
            <Option loc="Option" value="city2">
              City2
            </Option>
          </Select>
        </label> */}
      </SelectContainer>
      {/* <HomeBtn loc="HomeBtn">Let's Begin To Travel!</HomeBtn> */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && console.log(data)}
    </>
  );
}

export default SelectOptionExplore;
