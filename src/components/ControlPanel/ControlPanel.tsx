import styles from "./ControlPanel.module.css";
import { ControlPanelProps } from "../../types/interfaces";

export const ControlPanel = ({
  onPrint,
  onClearSeatMap,
  onGenerate,
  onSelect,
  onCountTotals,
  isChecked,
}: ControlPanelProps) => {
  return (
    <div className={styles.controlPanel}>
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
      <div className={styles.btnGroup}>
        <button onClick={onGenerate}>
          {isChecked ? "Wygeneruj Seat mapę" : "Generate Seat map"}
        </button>
        <button onClick={onCountTotals}>
          {isChecked ? "Policz sekcje" : "Count sections"}
        </button>
        <button onClick={onClearSeatMap}>
          {isChecked ? "Wyczyść Seat mapę" : "Clear Seat map"}
        </button>
        <button onClick={onPrint}>
          {isChecked ? "Wydrukuj Seat Mapę" : "Print Seat Map"}
        </button>
      </div>
    </div>
  );
};
