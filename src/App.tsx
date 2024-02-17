import React, { useReducer } from "react";
import { SeatMap } from "./components/SeatMap/SeatMap";
import { Totals } from "./components/Totals/Totals";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SeatMapLabels } from "./components/SeatMapLabels/SeatMapLabels";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useSeatMap } from "./hooks/useSeatMap/useSeatMap";
import { PLANES } from "./constants";
import { generateHexCode } from "./helpers/generateHexCode";
import { Footer } from "./components/Footer/Footer";
import { appReducer, initialState } from "./store/appStore";

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [values, setValues, setClear] = useSeatMap(state.plane);

  const handleClearSeatMap = () => {
    setClear();
    dispatch({ type: "clear_totals" });
    dispatch({ type: "code", code: "" });
  };
  const handleGenerateSeatMap = () => {
    setValues();
    dispatch({ type: "code", code: generateHexCode() });
  };

  const handleSelectedPlane = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget.value;
    const selectedPlane = PLANES.find((plane) => plane.type === target);
    if (selectedPlane) {
      dispatch({ type: "select_plane", plane: selectedPlane });
      setClear();

      dispatch({ type: "clear_totals" });
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
          <SeatMap seatsValues={values} plane={state.plane} />
          <SeatMapLabels plane={state.plane} />
        </Wrapper>
        <Totals plane={state.plane} totals={state.totals} />
        <ControlPanel
          onClearSeatMap={handleClearSeatMap}
          onGenerate={handleGenerateSeatMap}
          onSelect={handleSelectedPlane}
          onCountTotals={() =>
            dispatch({
              type: "count_totals",
              plane: state.plane,
              values: values,
            })
          }
          isChecked={state.language}
        />
      </Wrapper>
      <Footer />
    </>
  );
};
