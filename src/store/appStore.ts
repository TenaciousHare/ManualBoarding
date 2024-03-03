import { DEFAULT_PLANE, PLANES, Plane } from "../constants";
import { generateHexCode } from "./generateSeatMap/helpers/generateHexCode";
import { countZones, initialTotals, Zones } from "./countZones/countZones";
import { clearSeatMap } from "./generateSeatMap/clearSeatMap";
import { SeatValue, generateSeatMap } from "./generateSeatMap/generateSeatMap";

export interface State {
  code: string;
  language: boolean;
  plane: Plane;
  totals: Zones;
  seatmap: SeatValue[];
}

export const initialState: State = {
  code: "",
  language: false,
  plane: DEFAULT_PLANE,
  totals: { ...initialTotals },
  seatmap: clearSeatMap(DEFAULT_PLANE),
};

export type AppAction =
  | { type: "language"; language: boolean }
  | { type: "generate"; plane: Plane }
  | { type: "clear"; plane: Plane }
  | { type: "select"; value: string }
  | { type: "print" }
  | {
      type: "count_totals";
      plane: Plane;
      values: SeatValue[];
    };

export function appReducer(state: State, action: AppAction): State {
  switch (action.type) {
    case "language":
      return { ...state, language: !action.language };
    case "generate":
      return {
        ...state,
        code: generateHexCode(),
        seatmap: generateSeatMap(action.plane),
      };
    case "clear":
      return {
        ...state,
        totals: { ...initialTotals },
        seatmap: clearSeatMap(action.plane),
        code: "",
      };
    case "select":
      const target = action.value;
      const selectedPlane = PLANES.find(
        (plane) => plane.type === target
      ) as Plane;
      return {
        ...state,
        plane: selectedPlane,
        seatmap: clearSeatMap(selectedPlane),
        totals: { ...initialTotals },
        code: "",
      };
    case "count_totals":
      return { ...state, totals: countZones(action.plane, action.values) };
    case "print":
      window.print();
      return state;
    default:
      return state;
  }
}
