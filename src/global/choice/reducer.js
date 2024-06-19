export const initialStateChoice = {
  choiceValue: [],
};

export function choiceReducer(state, action) {
  switch (action.type) {
    case "ADD_CHOICE": {
      return {
        ...state,
        choiceValue: [action.payload, ...(state?.choiceValue ?? [])],
      };
    }
    case "REMOVE_CHOICE": {
      let newState = {
        ...state,
        choiceValue: state.choiceValue?.filter(
          (e, index) => index !== action.payload
        ),
      };

      return newState;
    }
    case "REMOVE_ALL_CHOICE": {
      let newState = {
        ...state,
        choiceValue: [],
      };

      return newState;
    }

    case "ADD_ALL_CHOICE": {
      let newState = {
        ...state,
        choiceValue: action.payload,
      };

      return newState;
    }

    case "RETURN_TO_DEFAULT": {
      return initialStateChoice;
    }

    default:
      return state;
  }
}
