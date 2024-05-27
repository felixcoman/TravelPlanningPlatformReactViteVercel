import useFetchData from "../../hooks/useFetchData";
import { HomeBtn, Option, Select, SelectContainer } from "./MainHome.style";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function SelectOptionExplore() {
  // let path = "romania";
  //let { path } = useParams();
  //const { data, error, loading } = useFetchData("/" + path);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    console.log("form", form);
    const formData = new FormData(form);
    console.log("formData", formData);
    console.log("formData.entries()", formData.entries());

    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log("formJson", formJson); // (!) This doesn't include multiple select values
    console.log("formJson.country", formJson.country);
    // Or you can get an array of name-value pairs.
    console.log("[...formData.entries()]", [...formData.entries()]);

    //fetch data from the server
    fetch(`http://localhost:3001/${formJson.country}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("the data from the server", data);
      });
  }

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
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Pick a country:
            <Select loc="Select" name="country">
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
      {/*{loading && <div>Loading...</div>}
      {error && <div>{error} Error on getting data, Server is down :( </div>}
      {data && console.log(data)}*/}
    </>
  );
}

export default SelectOptionExplore;
