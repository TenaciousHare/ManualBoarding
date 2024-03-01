import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import styles from "./Label.module.css";

interface LabelProps {
  label: string;
  index: number;
}

export const Label = ({ label, index }: LabelProps) => {
  const {
    state: {
      plane: { zones, maxPaxPerZone },
    },
  } = useContext(SeatMapContext)!;

  const count = index * 2;
  return (
    <li role="listitem" className={styles.seatMapLabel}>
      <p>{label}</p>
      <p>{`ROWS ${zones[count]} to ${zones[count + 1]}`}</p>
      <p>
        MAX PAX <strong>{maxPaxPerZone[index]}</strong>
      </p>
    </li>
  );
};
