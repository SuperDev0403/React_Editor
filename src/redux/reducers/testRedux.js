import { INC_NUM, DEC_NUM } from "../actions/constants";

const initialState = {
  number: 0,
};

function testRedux(state = initialState, action) {
  switch (action.type) {
    case INC_NUM:
      console.log("add number action payload in reducer: ", action.payload);
      return {
        ...state,
        number: state.number + action.payload,
      };

    case DEC_NUM:
      console.log("dec number action payload in reducer: ", action.payload);
      return {
        ...state,
        number: state.number + action.payload,
      };

    default:
      return state;
  }
}
export { testRedux };
