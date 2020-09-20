import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { combinedReducer } from "redux/reducer";
import { Actions } from "./actions";
import { Theme } from "@material-ui/core";
import { ThemeProps as GenericThemeProps } from "styled-components/macro";
import { AxiosResponse } from "axios";

export type State = ReturnType<typeof combinedReducer>;

export type ThunkResult<R = void> = ThunkAction<R, State, unknown, Actions>;

export type ThunkDispatcher = ThunkDispatch<State, any, Actions>;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type FetchRV<T> = XOR<{ res: T }, Pick<AxiosResponse, "status">>;

export type TabQuery = {
  tab: "planets" | "starships" | "people";
};

export type TabItemType = { [key: string]: string | number | string[] } & {
  [ket in "created" | "edited" | "url" | "name"]: string;
};

export type TabDataType = {
  count: number;
  next: string;
  previous: string;
  results: TabItemType[];
};

export type ThemeProps = GenericThemeProps<Theme>;
