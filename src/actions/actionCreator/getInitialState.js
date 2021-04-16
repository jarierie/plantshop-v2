import GET_INITIAL_STATE_STRING from "../actionString/GET_INITIAL_STATE_STRING";

const getInitialState = (payload) => {
  return {
    type: GET_INITIAL_STATE_STRING,
    payload,
  };
};
