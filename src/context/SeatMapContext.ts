import { createContext, Dispatch } from "react";
import { State, AppAction } from "../store/appStore";

export const SeatMapContext = createContext<{
  state: State;
  dispatch: Dispatch<AppAction>;
} | null>(null);
