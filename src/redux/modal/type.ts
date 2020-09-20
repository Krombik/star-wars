export enum ActionTypes {
  SET_MODAL = "SET_MODAL",
}

export type SetModalPayloadType = {
  open: boolean;
  name?: string;
};

type SetModal = {
  type: ActionTypes.SET_MODAL;
  payload: SetModalPayloadType;
};

export type ModalActions = SetModal;
