export function itineraryPlus({ country, city }) {
  return { type: "INTINERARY_PLUS", payload: { country, city } };
}

export function itineraryLandmarkPlus({ country, city, name }) {
  return { type: "INTINERARY_LANDMARK_PLUS", payload: { country, city, name } };
}

export function itineraryMinus(index) {
  return { type: "INTINERARY_MINUS", payload: index };
}

export function itineraryLandmarkMinus(index) {
  return { type: "INTINERARY_LANDMARK_MINUS", payload: index };
}

export function returnToDefault() {
  return { type: "RETURN_TO_DEFAULT" };
}
