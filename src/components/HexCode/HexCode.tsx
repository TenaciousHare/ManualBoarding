import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import styles from "./HexCode.module.css";

export const HexCode = () => {
  const {
    state: { code },
  } = useContext(SeatMapContext)!;
  return (
    <div data-testid="code" className={styles.code}>
      {code}
    </div>
  );
};
