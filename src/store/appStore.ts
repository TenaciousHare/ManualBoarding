import { DEFAULT_PLANE, Plane } from "../constants";
import { countZones, initialTotals, Zones } from "./countZones/countZones";
import { SeatValue } from "../hooks/useSeatMap/useSeatMap";

interface State {
  code: string;
  language: boolean;
  plane: Plane;
  totals: Zones;
}

export const initialState: State = {
  code: "",
  language: false,
  plane: DEFAULT_PLANE,
  totals: { ...initialTotals },
};

type AppAction =
  | { type: "language"; language: boolean }
  | { type: "code"; code: string }
  | {
      type: "count_totals";
      plane: Plane;
      values: SeatValue[];
    }
  | { type: "clear_totals" }
  | { type: "select_plane"; plane: Plane };

export function appReducer(state: State, action: AppAction): State {
  switch (action.type) {
    case "language":
      return { ...state, language: !action.language };
    case "code":
      return { ...state, code: action.code };
    case "count_totals":
      return { ...state, totals: countZones(action.plane, action.values) };
    case "clear_totals":
      return { ...state, totals: { ...initialTotals } };
    case "select_plane":
      return { ...state, plane: action.plane };
    default:
      return state;
  }
}
