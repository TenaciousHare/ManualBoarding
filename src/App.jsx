import { useState, useEffect } from "react";
import { SeatMap } from "./components/SeatMap/SeatMap";
import { Totals } from "./components/Totals/Totals";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SeatMapLabels } from "./components/SeatMapLabels/SeatMapLabels";
import { useSeatMap } from "./hooks/useSeatMap";
import { PLANES, DEFAULT_PLANE } from "./constants";
import { generateHexCode } from "./helpers/generateHexCode";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";

export const App = () => {
  const [selectedPlane, setSelectedPlane] = useState(DEFAULT_PLANE);
  const [values, setValues, countZones] = useSeatMap(selectedPlane);
  const [totals, setTotals] = useState(() => countZones(values));
  const [code, setCode] = useState(() => generateHexCode());

  useEffect(() => {
    handleClearSeatMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleSelectedPlane = (e) => {
    const target = e.currentTarget.value;
    const selectedPlane = PLANES.filter((plane) => plane.type === target);
    setSelectedPlane(...selectedPlane);
    setValues(selectedPlane);
  };

  const handleTotals = () => {
    const totals = countZones(values);
    setTotals(totals);
  };

  return (
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
  );
};
