import styles from "./SeatMapLabels.module.css";

export function SeatMapLabels({ plane }) {
  const { zone1Start, zone1End, zone2Start, zone2End, zone3Start, zone3End } =
    plane.zones;
  const { zone1, zone2, zone3 } = plane.maxPaxPerZone;
  return (
    <div className={styles.seatMapLabels}>
      <div className={styles.seatMapLabel}>
        <p>FWD ZONE</p>
        <p>{`ROWS ${zone1Start} to ${zone1End}`}</p>
        <p>
          MAX PAX <strong>{zone1}</strong>
        </p>
      </div>
      <div className={styles.seatMapLabel}>
        <p>MID ZONE</p>
        <p>{`ROWS ${zone2Start} to ${zone2End}`}</p>
        <p>
          MAX PAX <strong>{zone2}</strong>
        </p>
      </div>
      <div className={styles.seatMapLabel}>
        <p>AFT ZONE</p>
        <p>{`ROWS ${zone3Start} to ${zone3End}`}</p>
        <p>
          MAX PAX <strong>{zone3}</strong>
        </p>
      </div>
    </div>
  );
}
