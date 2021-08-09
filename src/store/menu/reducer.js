import { HANDLE_MENU } from "./constants";

const initial_state = {
  status: true,
};

export const menuReducer = (state = initial_state, action) => {
  switch (action.type) {
    case HANDLE_MENU:
      return { status: action.payload };
    default:
      return state;
  }
};
