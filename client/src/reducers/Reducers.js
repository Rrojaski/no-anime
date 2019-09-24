import { USER_LOGIN } from "../actions/Types";

const initialState = {
  timerId: 0,
  timerRunning: false,
  currentTime: "25 : 00",
  cycle: "Session",
  workTime: 25,
  breakTime: 5,
  sound: "on"
};

export const timeReducer = (state = initialState, { type, payload }) => {
  console.log("timeReducer...");
  switch (type) {
    case USER_LOGIN:
      return { ...state, workTime: payload };
      break;
    default:
      return state;
  }
};
