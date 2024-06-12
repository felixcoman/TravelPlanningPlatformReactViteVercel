export const initialStateIntinerary = {
  defaultValue: "Intinerary empty",
  intineraryValue: [],
};
export function intineraryReducer(state, action) {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "INTINERARY_PLUS": {
      console.log("intinerary plus", {
        intineraryValue: [action.payload, ...state.intineraryValue],
      });
      return {
        ...state,
        intineraryValue: [action.payload, ...state.intineraryValue],
      };
    }
    case "INTINERARY_MINUS": {
      let newState = {
        ...state,
        choiceValue: state.choiceValue.filter(
          (e, index) => index !== action.payload
        ),
      };
      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateIntinerary;
    }
    default:
      return state;
  }
}
