import { REQUEST_API, REQUEST_ON_SUCCESS, REQUEST_ON_ERROR } from '../actions';


const INITIAL_STATE = {
  accounts: [],
  isLoading: false,
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_ON_SUCCESS:
      return {
        ...state,
        accounts: [...action.payload.items],
        isLoading: false,
      };
    case REQUEST_ON_ERROR:
      return {
        ...state,
        isLoading: false,
      };
  default:
    return state;
  }
}

export default listReducer;
