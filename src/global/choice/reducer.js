export const initialStateChoice = {
   choiceValue: []
  };
  
  export function choiceReducer(state, action) {
    console.log(state, action);
   
    switch (action.type) {
      case "ADD_CHOICE": {
      
        return { ...state, choiceValue: [action.payload,...state.choiceValue] };
      }
      case "REMOVE_CHOICE": {
        let newState = {
          ...state,
          choiceValue: state.choiceValue .filter( el =>  el === action.payload)
        };
        console.log("newState=", newState);
  
        return newState;
      }
      case "RETURN_TO_DEFAULT": {
        return initialStateChoice;
      }
  
      default:
        return state;
    }
  }