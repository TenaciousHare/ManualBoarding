import React, { useReducer } from "react";
import { SeatMap } from "./components/SeatMap/SeatMap";
import { Totals } from "./components/Totals/Totals";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SeatMapLabels } from "./components/SeatMapLabels/SeatMapLabels";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { PLANES } from "./constants";
import { Footer } from "./components/Footer/Footer";
import { appReducer, initialState } from "./store/appStore";

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleSelectedPlane = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget.value;
    const selectedPlane = PLANES.find((plane) => plane.type === target);
    if (selectedPlane) {
      dispatch({ type: "select", plane: selectedPlane });
    } else {
      console.error("Nie znaleziono wybranego samolotu.");
    }
  };

  return (
    <>
      <Wrapper>
        <Header
          name={state.plane.name}
          code={state.code}
          isChecked={state.language}
          onChange={() =>
            dispatch({ type: "language", language: state.language })
          }
        />
        <Wrapper isColumn>
          <SeatMap seatsValues={state.seatmap} plane={state.plane} />
          <SeatMapLabels plane={state.plane} />
        </Wrapper>
        <Totals plane={state.plane} totals={state.totals} />
        <ControlPanel
          onClearSeatMap={() => dispatch({ type: "clear", plane: state.plane })}
          onGenerate={() => dispatch({ type: "generate", plane: state.plane })}
          onSelect={handleSelectedPlane}
          onCountTotals={() =>
            dispatch({
              type: "count_totals",
              plane: state.plane,
              values: state.seatmap,
            })
          }
          isChecked={state.language}
        />
      </Wrapper>
      <Footer />
    </>
  );
};
