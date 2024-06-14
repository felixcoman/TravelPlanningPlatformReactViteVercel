export const initialStateItinerary = {
  defaultValue: "Itinerary empty",
  itineraryValue: [],
};
export function itineraryReducer(state, action) {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "INTINERARY_PLUS": {
      console.log("itinerary plus", {
        itineraryValue: [action.payload, ...state.itineraryValue],
      });
      return {
        ...state,
        itineraryValue: [action.payload, ...state.itineraryValue],
      };
    }
    case "INTINERARY_MINUS": {
      let newState = {
        ...state,
        itineraryValue: state.itineraryValue.filter(
          (e, index) => index !== action.payload
        ),
      };
      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateItinerary;
    }
    default:
      return state;
  }
}
