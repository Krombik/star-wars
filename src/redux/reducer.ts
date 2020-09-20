import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commonReducer from "./common/reducer";
import alertReducer from "./alert/reducer";
import modalReducer from "./modal/reducer";
import imagesReducer from "./images/reducer";

const commonConfig: PersistConfig<any> = {
  key: "dark",
  storage: storage,
  whitelist: ["dark"],
};

const imageConfig: PersistConfig<any> = {
  key: "images",
  storage: storage,
  whitelist: ["savedImages"],
};

export const combinedReducer = combineReducers({
  common: persistReducer(commonConfig, commonReducer),
  alert: alertReducer,
  modal: modalReducer,
  images: persistReducer(imageConfig, imagesReducer),
});
