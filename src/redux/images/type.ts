export enum ActionTypes {
  ADD_IMAGE = "ADD_IMAGE",
  REMOVE_IMAGE = "REMOVE_IMAGE",
}

export type ImageType = [name: string, url: string];

type AddImage = {
  type: ActionTypes.ADD_IMAGE;
  payload: ImageType;
};

type RemoveImage = {
  type: ActionTypes.REMOVE_IMAGE;
  payload: number;
};

export type ImageActions = AddImage | RemoveImage;
