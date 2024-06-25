export function itineraryPlus({ country, city }) {
  return { type: "INTINERARY_PLUS", payload: { country, city } };
}

export function itineraryLandmarkPlus({ country, city, name }) {
  return { type: "INTINERARY_LANDMARK_PLUS", payload: { country, city, name } };
}

export function addAllItinerary(itinerarycity) {
  return {
    type: "ADD_ALL_ITINERARY_CITY",
    payload: itinerarycity,
  };
}

export function addAllItineraryLandmark(itinerarylandmark) {
  return {
    type: "ADD_ALL_ITINERARY_LANDMARK",
    payload: itinerarylandmark,
  };
}

export function itineraryMinus(index) {
  return { type: "INTINERARY_MINUS", payload: index };
}

export function itineraryLandmarkMinus(index) {
  return { type: "INTINERARY_LANDMARK_MINUS", payload: index };
}

export function removeAllItinerary() {
  return {
    type: "REMOVE_ALL_ITINERARY",
  };
}

export function returnToDefault() {
  return { type: "RETURN_TO_DEFAULT" };
}
