import { COMPUTE, RESET } from "./actionTypes";

export const compute = (payload) => {
  return (dispatch) => {
    dispatch({ type: COMPUTE, payload });
  };
};

export const reset = () => {
  return (dispatch) => {
    dispatch({ type: RESET });
  };
};
