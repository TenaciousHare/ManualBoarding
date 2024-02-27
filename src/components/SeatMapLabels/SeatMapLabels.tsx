import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import styles from "./SeatMapLabels.module.css";

export const SeatMapLabels = () => {
  const {
    state: {
      plane: {
        zones: {
          zone1Start,
          zone1End,
          zone2Start,
          zone2End,
          zone3Start,
          zone3End,
        },
        maxPaxPerZone: { zone1, zone2, zone3 },
      },
    },
  } = useContext(SeatMapContext)!;
  return (
    <ul data-testid="seat-map-labels" className={styles.seatMapLabels}>
      <li role="listitem" className={styles.seatMapLabel}>
        <p>FWD ZONE</p>
        <p>{`ROWS ${zone1Start} to ${zone1End}`}</p>
        <p>
          MAX PAX <strong>{zone1}</strong>
        </p>
      </li>
      <li role="listitem" className={styles.seatMapLabel}>
        <p>MID ZONE</p>
        <p>{`ROWS ${zone2Start} to ${zone2End}`}</p>
        <p>
          MAX PAX <strong>{zone2}</strong>
        </p>
      </li>
      <li role="listitem" className={styles.seatMapLabel}>
        <p>AFT ZONE</p>
        <p>{`ROWS ${zone3Start} to ${zone3End}`}</p>
        <p>
          MAX PAX <strong>{zone3}</strong>
        </p>
      </li>
    </ul>
  );
};
