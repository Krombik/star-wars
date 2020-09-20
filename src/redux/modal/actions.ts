import { ThunkResult } from "types";
import { ActionTypes } from "./type";

export const setModal = (open: boolean, name?: string): ThunkResult => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.SET_MODAL,
    payload: open && name ? { open, name } : { open },
  });
};
