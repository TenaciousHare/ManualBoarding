import { useContext } from "react";
import { BUTTONS_VALUES } from "../../constants";
import { Button } from "../Button/Button";
import styles from "./ControlPanel.module.css";
import { SeatMapContext } from "../../context/SeatMapContext";

export const ControlPanel = () => {
  const {
    state: { language },
    handleSelectedPlane,
  } = useContext(SeatMapContext)!;

  return (
    <div className={styles.controlPanel}>
      <form>
        <label htmlFor="plane">
          {language ? "Wybierz typ samolotu: " : "Select the aircraft type: "}
        </label>
        <select
          name="plane"
          id="plane"
          onChange={handleSelectedPlane}
          defaultValue="boeing-737-800"
        >
          <option value="boeing-737-800">Boeing 737-800</option>
          <option value="boeing-737-8200">Boeing 737-8200</option>
          <option value="boeing-737-700">Boeing 737-700</option>
          <option value="airbus-a320">Airbus A320 - Lauda</option>
        </select>
      </form>

      <div className={styles.btnGroup}>
        {BUTTONS_VALUES.map((button) => {
          return (
            <Button
              key={button.name}
              name={button.name}
              language={language ? button.pl : button.en}
            />
          );
        })}
      </div>
    </div>
  );
};
