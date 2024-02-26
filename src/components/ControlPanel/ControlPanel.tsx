import { ChangeEvent } from "react";
import styles from "./ControlPanel.module.css";

interface ControlPanelProps {
  onClearSeatMap: () => void;
  onGenerate: () => void;
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  onCountTotals: () => void;
  isChecked: boolean;
}

export const ControlPanel = ({
  onClearSeatMap,
  onGenerate,
  onSelect,
  onCountTotals,
  isChecked,
}: ControlPanelProps) => {
  const handlePrintSeatMap = () => {
    window.print();
  };

  return (
    <div className={styles.controlPanel}>
      /* ToDo - Może komponent select i opcje zmapowane z tablicy? */
      <form>
        <label htmlFor="plane">
          {isChecked ? "Wybierz typ samolotu: " : "Select the aircraft type: "}
        </label>
        <select
          name="plane"
          id="plane"
          onChange={onSelect}
          defaultValue="boeing-737-800"
        >
          <option value="boeing-737-800">Boeing 737-800</option>
          <option value="boeing-737-8200">Boeing 737-8200</option>
          <option value="boeing-737-700">Boeing 737-700</option>
          <option value="airbus-a320">Airbus A320 - Lauda</option>
        </select>
      </form>
      /* ToDo - stworzyć tablicę z danymi o buttonach i zmapować później -
      komponent może komponent Button ? */
      <div className={styles.btnGroup}>
        <button id="generate" onClick={onGenerate}>
          {isChecked ? "Wygeneruj Seat mapę" : "Generate Seat map"}
        </button>
        <button id="count" onClick={onCountTotals}>
          {isChecked ? "Policz sekcje" : "Count sections"}
        </button>
        <button id="clear" onClick={onClearSeatMap}>
          {isChecked ? "Wyczyść Seat mapę" : "Clear Seat map"}
        </button>
        <button id="print" onClick={handlePrintSeatMap}>
          {isChecked ? "Wydrukuj Seat Mapę" : "Print Seat Map"}
        </button>
      </div>
    </div>
  );
};
