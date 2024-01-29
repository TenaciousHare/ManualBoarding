import React, { useState } from "react";
import { Gap } from "./components/Gap";
import { Row } from "./components/Row";
import { Header } from "./components/Header";
import { SEQ, ROWS } from "./constants";
import { shuffle } from "./helpers/shuffle";
import { generateRandomManualSeatMap } from "./helpers/generateRandomManualSeatMap";

const SeatMap = () => {
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
      <table className="seat-map">
        <thead>
          <Header />
        </thead>
        <tbody>
          {ROWS.map((row, index) => (
            <React.Fragment key={row}>
              <Row row={row} index={index} seatsValues={seatsValues} />
              {(row === 5 || row === 28) && (
                <tr>
                  <Gap />
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="btn_group">
        <button onClick={handleGenerateRandomSeats}>
          Wygeneruj losową mapę
        </button>
        <button onClick={handleClearSeatMap}>Wyczyść Seat mapę</button>
        <button onClick={handlePrintSeatMap}>Wydrukuj Seat Mapę</button>
      </div>
    </div>
  );
};

export default SeatMap;
