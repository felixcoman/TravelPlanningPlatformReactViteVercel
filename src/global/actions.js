export function intineraryPlus({ country, city }) {
  return { type: "INTINERARY_PLUS", payload: { country, city } };
}

export function intineraryMinus({ country, city }) {
  return { type: "INTINERARY_MINUS", payload: { country, city } };
}

export function returnToDefault() {
  return { type: "RETURN_TO_DEFAULT" };
}
