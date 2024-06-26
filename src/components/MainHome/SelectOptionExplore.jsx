import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {
  FormBody,
  HomeBtn,
  LabelHead,
  LabelHeadText,
  Option,
  Select,
  SelectContainer,
  Loading,
  Error,
} from "./MainHome.style";
import GetOptionCities from "./GetOptionCities";

function SelectOptionExplore() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [clicked, setClicked] = useState(false);
  // const navigate = useNavigate();

  let url = null;

  if (selectedCountry && selectedCity) {
    url = `http://localhost:3001/${selectedCountry}?city=${selectedCity}`;
  } else if (selectedCountry) {
    url = `http://localhost:3001/${selectedCountry}`;
  } else null;

  const { data, error, loading, setData } = useFetchData(
    url,
    clicked,
    setClicked
  );

  const handleDropdownChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
    console.log("selectedCountry", e.target.value);
    setData(null);
    setClicked(true);
    setSelectedCity(false);
  };

  const handleDropdownChangeCity = (e) => {
    setSelectedCity(e.target.value);
    console.log("selectedCity", e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("in submit");
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer loc="SelectContainer">
        <FormBody loc="FormBody" onSubmit={(e) => handleSubmit(e)}>
          <LabelHead loc="LabelHead">
            <LabelHeadText>Select country:</LabelHeadText>
            <Select
              value={selectedCountry}
              onChange={handleDropdownChangeCountry}
              loc="Select"
            >
              <Option loc="Option" value="">
                Pick a country
              </Option>
              <Option loc="Option" value="France">
                France
              </Option>
              <Option loc="Option" value="Italy">
                Italy
              </Option>
              <Option loc="Option" value="Romania">
                Romania
              </Option>
              <Option loc="Option" value="Spain">
                Spain
              </Option>
            </Select>
          </LabelHead>
          {data && (
            <LabelHead loc="LabelHead">
              <LabelHeadText>Select city:</LabelHeadText>
              <Select
                value={selectedCity}
                onChange={handleDropdownChangeCity}
                loc="Select"
              >
                <Option loc="Option" value="">
                  Pick a city
                </Option>
                {data &&
                  data.map((item, index) => {
                    return (
                      item.city && (
                        <GetOptionCities key={index} value={item.city} />
                      )
                    );
                  })}
              </Select>
            </LabelHead>
          )}
          {selectedCountry && selectedCity && (
            <HomeBtn
              loc="HomeBtn"
              type="submit"
              to={`/explore/${selectedCountry}/${selectedCity}`}
            >
              Let's Begin To Travel!
            </HomeBtn>
          )}
        </FormBody>
      </SelectContainer>
      {loading && (
        <Loading loc="Loading">Loading... Waiting for landing...</Loading>
      )}
      {error && (
        <Error loc="Error">
          Error: {error.message}! Our team is called from the coffee break and
          will take care of the problem!
        </Error>
      )}
    </>
  );
}

export default SelectOptionExplore;
