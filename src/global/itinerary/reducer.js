export const initialStateItinerary = {
  defaultValue: "Itinerary empty",
  itineraryValue: [],
  itineraryLandmarkValue: [],
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
    case "INTINERARY_LANDMARK_PLUS": {
      console.log("itinerary landmark plus", {
        itineraryLandmarkValue: [
          action.payload,
          ...state.itineraryLandmarkValue,
        ],
      });
      return {
        ...state,
        itineraryLandmarkValue: [
          action.payload,
          ...state.itineraryLandmarkValue,
        ],
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
    case "INTINERARY_LANDMARK_MINUS": {
      let newState = {
        ...state,
        itineraryLandmarkValue: state.itineraryLandmarkValue.filter(
          (e, index) => index !== action.payload
        ),
      };
      return newState;
    }
    case "REMOVE_ALL_ITINERARY": {
      let newState = {
        ...state,
        itineraryValue: [],
        itineraryLandmarkValue: [],
      };

      return newState;
    }

    case "ADD_ALL_ITINERARY_CITY": {
      let newState = {
        ...state,
        itineraryValue: action.payload,
      };

      return newState;
    }

    case "ADD_ALL_ITINERARY_LANDMARK": {
      let newState = {
        ...state,
        itineraryLandmarkValue: action.payload,
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
