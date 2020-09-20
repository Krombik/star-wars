import { CommonActions } from "redux/common/type";
import { RehydrateAction } from "redux-persist";
import { AlertActions } from "redux/alert/type";
import { ModalActions } from "redux/modal/type";
import { ImageActions } from "redux/images/type";

export type Actions =
  | CommonActions
  | AlertActions
  | ModalActions
  | ImageActions
  | RehydrateAction;
