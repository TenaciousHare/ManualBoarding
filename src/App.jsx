import { useState } from "react";
import { SEQ } from "./constants";
import { generateRandomManualSeatMap } from "./helpers/generateRandomManualSeatMap";
import { shuffle } from "./helpers/shuffle";
import { SeatMap } from "./components/SeatMap";
import { Totals } from "./components/Totals";
import { ControlPanel } from "./components/ControlPanel";

export const App = () => {
  const [seatsValues, setSeatsValues] = useState([]);

  const handlePrintSeatMap = () => {
    window.print();
  };

  const handleGenerateRandomSeats = () => {
    const shuffledSeq = shuffle(SEQ);
    const revisedShuffledSeq = [
      ...shuffledSeq.slice(0, 3),
      0,
      0,
      0,
      ...shuffledSeq.slice(3),
    ];
    const randomSeatMap = generateRandomManualSeatMap(revisedShuffledSeq);
    setSeatsValues(randomSeatMap);
  };

  const handleClearSeatMap = () => {
    const emptyArr = [];
    setSeatsValues(emptyArr);
  };

  return (
    <div className="wrapper">
      <h1>Seat mapa Boeinga 737-800</h1>
      <SeatMap seatsValues={seatsValues} />
      <Totals />
      <ControlPanel
        onPrint={handlePrintSeatMap}
        onGenerateRandomSeats={handleGenerateRandomSeats}
        onClearSeatMap={handleClearSeatMap}
      />
    </div>
  );
};
