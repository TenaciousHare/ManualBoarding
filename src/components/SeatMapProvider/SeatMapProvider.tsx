import { ChangeEvent, useReducer, ReactNode } from "react";
import { appReducer, initialState } from "../../store/appStore";
import { SeatMapContext } from "../../context/SeatMapContext";
import { PLANES } from "../../constants";

export const SeatMapProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleSelectedPlane = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget.value;
    const selectedPlane = PLANES.find((plane) => plane.type === target);
    if (selectedPlane) {
      dispatch({ type: "select", plane: selectedPlane });
    } else {
      console.error("Nie znaleziono wybranego samolotu.");
    }
  };

  return (
    <SeatMapContext.Provider value={{ state, dispatch, handleSelectedPlane }}>
      {children}
    </SeatMapContext.Provider>
  );
};
