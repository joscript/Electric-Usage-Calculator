import { COMPUTE, RESET } from "./actionTypes";

const initialState = {
  costs: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMPUTE:
      return {
        ...state,
        costs: payload,
        loading: false,
      };

    case RESET:
      return {
        ...state,
        costs: {},
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
