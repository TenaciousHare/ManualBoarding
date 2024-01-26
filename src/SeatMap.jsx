import React from "react";
import { Gap } from "./components/Gap";
import { Row } from "./components/Row";
import { Header } from "./components/Header";

// Tworzę tablicę z numerami rzędów, pomijając rząd 13
const rows = [];
for (let i = 1; i <= 33; i++) {
  if (i !== 13) {
    rows.push(i);
  }
}

const SeatMap = () => {
  const printSeatMap = () => {
    window.print();
  };
  return (
    <div className="wrapper">
      <h1>Seat mapa Boeinga 737-800</h1>
      <table className="seat-map">
        <thead>
          <Header />
        </thead>
        <tbody>
          {rows.map((row) => (
            <React.Fragment key={row}>
              <Row row={row} />
              {(row === 5 || row === 28) && (
                <tr>
                  <Gap />
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <button onClick={printSeatMap}>Wydrukuj Seat Mapę</button>
    </div>
  );
};

export default SeatMap;
