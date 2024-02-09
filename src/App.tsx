import React, { useState, useEffect } from "react";
import { SeatMap } from "./components/SeatMap/SeatMap";
import { Totals } from "./components/Totals/Totals";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SeatMapLabels } from "./components/SeatMapLabels/SeatMapLabels";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useSeatMap } from "./hooks/useSeatMap";
import { PLANES, DEFAULT_PLANE } from "./constants";
import { Zone } from "./types/interfaces";
import { generateHexCode } from "./helpers/generateHexCode";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  const [selectedPlane, setSelectedPlane] = useState(DEFAULT_PLANE);
  const [values, setValues, countZones] = useSeatMap(
    selectedPlane || DEFAULT_PLANE
  );
  const [totals, setTotals] = useState<Zone[]>(() => countZones(values));
  const [code, setCode] = useState(() => generateHexCode());

  useEffect(() => {
    handleClearSeatMap();
  }, [selectedPlane]);

  const handlePrintSeatMap = () => {
    window.print();
  };
  const handleClearSeatMap = () => {
    setValues(selectedPlane, true);
    const clearTotals = countZones([]);
    setTotals(clearTotals);
  };
  const handleGenerateSeatMap = () => {
    setValues(selectedPlane);
    const newCode = generateHexCode();
    setCode(newCode);
  };

  const handleSelectedPlane = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget.value;
    const selectedPlane = PLANES.find((plane) => plane.type === target);
    if (selectedPlane) {
      setSelectedPlane(selectedPlane);
      setValues(selectedPlane);
    } else {
      console.error("Nie znaleziono wybranego samolotu.");
    }
  };

  const handleTotals = () => {
    const totals = countZones(values);
    setTotals(totals);
  };

  return (
    <>
      <Wrapper>
        <Header name={selectedPlane.name} code={code} />
        <Wrapper isColumn>
          <SeatMap seatsValues={values} plane={selectedPlane} />
          <SeatMapLabels plane={selectedPlane} />
        </Wrapper>
        <Totals plane={selectedPlane} totals={totals} />
        <ControlPanel
          onPrint={handlePrintSeatMap}
          onClearSeatMap={handleClearSeatMap}
          onGenerate={handleGenerateSeatMap}
          onSelect={handleSelectedPlane}
          onCountTotals={handleTotals}
        />
      </Wrapper>
      <Footer />
    </>
  );
};
