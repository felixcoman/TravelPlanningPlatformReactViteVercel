import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {
  FormBody,
  HomeBtn,
  LabelHead,
  Option,
  Select,
  SelectContainer,
} from "./MainHome.style";

function SelectOptionExplore() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const url =
    selectedCountry && selectedCity
      ? `http://localhost:3001/${selectedCountry}${selectedCity}`
      : null;

  const { data, error, loading, setData } = useFetchData(
    url,
    clicked,
    setClicked
  );

  const handleDropdownChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
    console.log("selectedCountry", e.target.value);
    setData(null);
  };

  const handleDropdownChangeCity = (e) => {
    setSelectedCity("/" + e.target.value);
    console.log("selectedCity", "/" + e.target.value);
    setData(null);
  };

  const handleSubmit = (e) => {
    console.log("in submit");
    e.preventDefault();
    setClicked(true);
    navigate(`/explore/${selectedCountry}${selectedCity}`);
  };

  return (
    <>
      <SelectContainer loc="SelectContainer">
        <FormBody loc="FormBody" onSubmit={(e) => handleSubmit(e)}>
          <LabelHead loc="LabelHead">
            Select country:
            <Select
              value={selectedCountry}
              onChange={handleDropdownChangeCountry}
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
          </LabelHead>
          {/* </FormBody>
        <FormBody loc="FormBody" onSubmit={(e) => handleSubmitCity(e)}> */}
          <LabelHead loc="LabelHead">
            Select city:
            <Select
              value={selectedCity}
              onChange={handleDropdownChangeCity}
              loc="Select"
            >
              <Option loc="Option" value="">
                --Pick a city--
              </Option>
              <Option loc="Option" value="0">
                Brasov
              </Option>
              <Option loc="Option" value="1">
                Mamaia
              </Option>
              <Option loc="Option" value="2">
                Cluj-Napoca
              </Option>
              <Option loc="Option" value="3">
                Sighisoara
              </Option>
              <Option loc="Option" value="4">
                Sibiu
              </Option>
              <Option loc="Option" value="5">
                Bucharest
              </Option>
            </Select>
          </LabelHead>
          <HomeBtn loc="HomeBtn" type="submit" data={data}>
            Let's Begin To Travel!
          </HomeBtn>
        </FormBody>
      </SelectContainer>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && console.log(data)}
    </>
  );
}

export default SelectOptionExplore;
