import { ChangeEvent, createContext } from "react";
import { State, AppAction } from "../store/appStore";

export const SeatMapContext = createContext<{
  state: State;
  dispatch: React.Dispatch<AppAction>;
  handleSelectedPlane: (e: ChangeEvent<HTMLSelectElement>) => void;
} | null>(null);
