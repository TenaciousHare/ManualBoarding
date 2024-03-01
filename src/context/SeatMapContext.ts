import { ChangeEvent, createContext, Dispatch } from "react";
import { State, AppAction } from "../store/appStore";

export const SeatMapContext = createContext<{
  state: State;
  dispatch: Dispatch<AppAction>;
  handleSelectedPlane: (e: ChangeEvent<HTMLSelectElement>) => void;
} | null>(null);
