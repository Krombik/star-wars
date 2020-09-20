import { ActionTypes, ImageActions, ImageType } from "./type";

type State = {
  savedImages: ImageType[];
};

const initialState: State = {
  savedImages: [],
};

export default function reducer(
  state = initialState,
  action: ImageActions
): State {
  switch (action.type) {
    case ActionTypes.ADD_IMAGE:
      return {
        ...state,
        savedImages: [...state.savedImages, action.payload],
      };
    case ActionTypes.REMOVE_IMAGE:
      return {
        ...state,
        savedImages: state.savedImages.filter(
          (_, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}
