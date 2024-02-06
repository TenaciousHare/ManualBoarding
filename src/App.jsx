import { useState, useEffect } from "react";
import { SeatMap } from "./components/SeatMap";
import { Totals } from "./components/Totals";
import { ControlPanel } from "./components/ControlPanel";
import { SeatMapLabels } from "./components/SeatMapLabels";
import { useSeatMap } from "./hooks/useSeatMap";
import { PLANES, DEFAULT_PLANE } from "./constants";
import { generateHexCode } from "./helpers/generateHexCode";

export const App = () => {
  const [selectedPlane, setSelectedPlane] = useState(DEFAULT_PLANE);
  const [values, setValues, countZones] = useSeatMap(selectedPlane);
  const [totals, setTotals] = useState(() => countZones(values));
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
    <div className="wrapper">
      <div className="code">{code}</div>
      <h1>{`Seat mapa - ${selectedPlane.name}`}</h1>
      <div className="column_wrapper">
        <SeatMap seatsValues={values} plane={selectedPlane} />
        <SeatMapLabels plane={selectedPlane} />
      </div>
      <Totals plane={selectedPlane} totals={totals} />
      <ControlPanel
        onPrint={handlePrintSeatMap}
        onClearSeatMap={handleClearSeatMap}
        onGenerate={handleGenerateSeatMap}
        onSelect={handleSelectedPlane}
        onCountTotals={handleTotals}
      />
    </div>
  );
};
