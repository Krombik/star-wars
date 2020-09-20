import { ThunkResult } from "types";
import { ActionTypes } from "./type";
import { Color } from "@material-ui/lab/Alert";

export const setAlert = (
  show: boolean,
  severity?: Color,
  text?: string | number
): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_ALERT,
    payload: show && severity && text ? { show, severity, text } : { show },
  });
};
