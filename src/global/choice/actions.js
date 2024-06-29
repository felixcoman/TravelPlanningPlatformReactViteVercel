export function addChoice({ country, city, region, budget, period, data }) {
  return {
    type: "ADD_CHOICE",
    payload: { country, city, region, budget, period, data },
  };
}

export function addAllChoice(choices) {
  return {
    type: "ADD_ALL_CHOICE",
    payload: choices,
  };
}

export function removeChoice(index) {
  return {
    type: "REMOVE_CHOICE",
    payload: index,
  };
}

export function removeAllChoice() {
  return {
    type: "REMOVE_ALL_CHOICE",
  };
}

export function returnToDefault() {
  return {
    type: "RETURN_TO_DEFAULT",
  };
}
