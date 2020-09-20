import { Color } from "@material-ui/lab/Alert";
import { ActionTypes, AlertActions } from "./type";

type State = {
  show: boolean;
  severity: Color | null;
  text: string | number;
};

const initialState: State = {
  show: false,
  severity: null,
  text: "",
};

export default function reducer(
  state = initialState,
  action: AlertActions
): State {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
