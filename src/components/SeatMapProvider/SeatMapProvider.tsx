import { useReducer, ReactNode } from "react";
import { appReducer, initialState } from "../../store/appStore";
import { SeatMapContext } from "../../context/SeatMapContext";

export const SeatMapProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <SeatMapContext.Provider value={{ state, dispatch }}>
      {children}
    </SeatMapContext.Provider>
  );
};
