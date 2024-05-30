import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {
  FormBody,
  HomeBtn,
  LabelHead,
  Option,
  Select,
  SelectContainer,
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
  };

  const handleDropdownChangeCity = (e) => {
    setSelectedCity(e.target.value);
    console.log("selectedCity", e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("in submit");
    e.preventDefault();
    setClicked(true);
    //Alta modalitate de redirect daca nu merge cu to={`/explore/${selectedCountry}${selectedCity}`} ca si atribut in HomeBtn (buton tb sa fie de tip styled(Link))
    // navigate(`/explore/${selectedCountry}${selectedCity}`);
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
          <HomeBtn
            loc="HomeBtn"
            type="submit"
            data={data}
            to={`/explore/${selectedCountry}/${selectedCity}`}
          >
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
