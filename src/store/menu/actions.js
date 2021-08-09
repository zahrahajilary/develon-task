import { HANDLE_MENU } from "./constants";

export const menuHandler = (status) => ({
  type: HANDLE_MENU,
  payload: status,
});
