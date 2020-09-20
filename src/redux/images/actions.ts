import { ThunkResult } from "types";
import { ActionTypes, ImageType } from "./type";

export const addImage = (image: ImageType): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_IMAGE,
    payload: image,
  });
};

export const removeImage = (index: number): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_IMAGE,
    payload: index,
  });
};
