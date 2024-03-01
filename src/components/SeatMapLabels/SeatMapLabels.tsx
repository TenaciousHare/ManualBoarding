import { LABELS } from "../../constants";
import styles from "./SeatMapLabels.module.css";
import { Label } from "../Label/Label";

export const SeatMapLabels = () => {
  return (
    <ul data-testid="seat-map-labels" className={styles.seatMapLabels}>
      {LABELS.map((label, index) => (
        <Label key={index} label={label} index={index} />
      ))}
    </ul>
  );
};
