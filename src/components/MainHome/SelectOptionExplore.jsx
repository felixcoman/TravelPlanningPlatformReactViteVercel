import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useFetchData from "../../hooks/useFetchData";
import GetOption from "./GetOption";
import {
  ErrorHome,
  FormBody,
  HomeBtn,
  LabelHead,
  LabelHeadText,
  LoadingHome,
  Option,
  Select,
  SelectContainer,
} from "./MainHome.style";

function SelectOptionExplore({ expanded }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [clicked, setClicked] = useState(false);

  let url = null;

  if (selectedCountry && selectedCity) {
    url = `/api/${selectedCountry}?city=${selectedCity}`;
  } else if (selectedCountry) {
    url = `/api/${selectedCountry}`;
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
    setSelectedCity("");
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
      <SelectContainer loc="SelectContainer" expanded={expanded}>
        <FormBody loc="FormBody" onSubmit={(e) => handleSubmit(e)}>
          <LabelHead loc="LabelHead">
            <LabelHeadText>Select country:</LabelHeadText>
            <Select onChange={handleDropdownChangeCountry} loc="Select">
              <Option loc="Option" value="">
                Pick a country
              </Option>
              <Option loc="Option" value="france">
                France
              </Option>
              <Option loc="Option" value="italy">
                Italy
              </Option>
              <Option loc="Option" value="romania">
                Romania
              </Option>
              <Option loc="Option" value="spain">
                Spain
              </Option>
            </Select>
          </LabelHead>
          {data && (
            <LabelHead loc="LabelHead">
              <LabelHeadText>Select city:</LabelHeadText>
              <Select onChange={handleDropdownChangeCity} loc="Select">
                <Option loc="Option" value="">
                  Pick a city
                </Option>
                {data.map((item, index) => {
                  return (
                    item.city && <GetOption key={index} value={item.city} />
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
        <LoadingHome loc="LoadingHome">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          Loading... Waiting for landing...
        </LoadingHome>
      )}
      {error && (
        <ErrorHome loc="ErrorHome">
          Error: {error.message}! Our team is called from the coffee break and
          will take care of the problem!
        </ErrorHome>
      )}
    </>
  );
}

export default SelectOptionExplore;
