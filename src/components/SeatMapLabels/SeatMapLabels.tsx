import styles from "./SeatMapLabels.module.css";

export interface SeatMapLabelsProps {
  plane: {
    zones: {
      zone1Start: number;
      zone1End: number;
      zone2Start: number;
      zone2End: number;
      zone3Start: number;
      zone3End: number;
    };
    maxPaxPerZone: {
      zone1: number;
      zone2: number;
      zone3: number;
    };
  };
}

export const SeatMapLabels = ({
  plane: {
    zones: { zone1Start, zone1End, zone2Start, zone2End, zone3Start, zone3End },
    maxPaxPerZone: { zone1, zone2, zone3 },
  },
}: SeatMapLabelsProps) => {
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
