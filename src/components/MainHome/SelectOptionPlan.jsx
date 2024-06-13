import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { HomeBtn, Option, SelectPlan, SelectContainer } from "./MainHome.style";
import useLocalStorage from "../../hooks/useLocalStorage";

function SelectOptionPlan() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [clicked, setClicked] = useState(false);

  const url = selectedCountry
    ? `http://localhost:3001/${selectedCountry}`
    : null;

  const { data, error, loading, setData } = useFetchData(
    url,
    clicked,
    setClicked
  );

  const { localData } = useLocalStorage("user");

  console.log("localData", localData);

  const handleDropdownChangeCountry = (e) => {
    setSelectedCountry(e.target.value);

    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer loc="SelectContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <SelectPlan
            loc="SelectPlan"
            value={selectedCountry}
            onChange={handleDropdownChangeCountry}
          >
            <Option loc="Option" value="">
              Pick a country
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
          </SelectPlan>

          {data && (
            <HomeBtn
              loc="HomeBtn"
              type="submit"
              to={`/city-region/${selectedCountry}/${localData}`}
            >
              Let's Begin To Travel!
            </HomeBtn>
          )}
        </form>
      </SelectContainer>
    </>
  );
}

export default SelectOptionPlan;
