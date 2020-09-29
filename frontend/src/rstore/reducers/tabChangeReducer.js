import types from "../constants/action-types";
// Declare the initial state of anything in the store here
const initialState = {
    currentTab: "Home"
};

// add a switch case here for any added actions
function tabChangeReducer(state = initialState, action) {
  switch(action.type) {
    case types.RENDER_ABOUT: {
      return {
        currentTab: "About"
      }
    }
    case types.RENDER_DOCTORS: {
      return {
        currentTab: "Doctors"
      }
    }
    case types.RENDER_SERVICES: {
      return {
        currentTab: "Services"
      }
    }
    case types.RENDER_HOME: {
      return {
        currentTab: "Home"
      }
    }
    default: return state;
  }
}

export default tabChangeReducer;