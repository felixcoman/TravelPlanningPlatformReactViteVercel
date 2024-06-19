import { useParams, useLocation } from "react-router-dom";

function Accommodation() {
  const { id } = useParams();
  const location = useLocation();
  const { dataCity, dataDestination } = location.state || {};

  console.log("Accommodation component mounted");
  console.log("id", id);
  console.log("dataCity", dataCity);
  console.log("dataDestination", dataDestination);

  return (
    <div>
      <h1>Accommodation</h1>
      {dataCity && <p>City: {dataCity.name}</p>}
      {dataDestination && (
        <div>
          {dataDestination.map((dest, index) => (
            <p key={index}>{dest.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accommodation;
