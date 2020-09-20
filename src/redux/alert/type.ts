import { Color } from "@material-ui/lab/Alert";

export enum ActionTypes {
  SET_ALERT = "SET_ALERT",
}

export type SetAlertPayloadType = {
  show: boolean;
  severity?: Color;
  text?: string | number;
};

type SetAlert = {
  type: ActionTypes.SET_ALERT;
  payload: SetAlertPayloadType;
};

export type AlertActions = SetAlert;
