export function intineraryPlus({ country, city }) {
  return { type: "INTINERARY_PLUS", payload: { country, city } };
}

export function intineraryMinus(index) {
  return { type: "INTINERARY_MINUS", payload: index };
}

export function returnToDefault() {
  return { type: "RETURN_TO_DEFAULT" };
}
