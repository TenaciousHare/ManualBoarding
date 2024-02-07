import React from "react";
import styles from "./ControlPanel.module.css";
import { ControlPanelProps } from "../../types/interfaces";

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onPrint,
  onClearSeatMap,
  onGenerate,
  onSelect,
  onCountTotals,
}) => {
  return (
    <div className={styles.controlPanel}>
      <div>
        {" "}
        <label htmlFor="plane">Wybierz typ samolotu: </label>
        <select id="plane" onChange={onSelect} defaultValue="boeing-737-800">
          <option value="boeing-737-800">Boeing 737-800</option>
          <option value="boeing-737-8200">Boeing 737-8200</option>
          <option value="boeing-737-700">Boeing 737-700</option>
          <option value="airbus-a320">Airbus A320 - Lauda</option>
        </select>
      </div>
      <div className={styles.btnGroup}>
        <button onClick={onGenerate}>Wygeneruj seat mapę</button>
        <button onClick={onCountTotals}> Pokaż totale</button>
        <button onClick={onClearSeatMap}>Wyczyść Seat mapę</button>
        <button onClick={onPrint}>Wydrukuj Seat Mapę</button>
      </div>
    </div>
  );
};
