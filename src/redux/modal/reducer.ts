import { ActionTypes, ModalActions } from "./type";

type State = {
  open: boolean;
  name: string;
};

const initialState: State = {
  open: false,
  name: "",
};

export default function reducer(
  state = initialState,
  action: ModalActions
): State {
  switch (action.type) {
    case ActionTypes.SET_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
