import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import styles from "./LangToggle.module.css";

export const LangToggle = () => {
  const {
    state: { language },
    dispatch,
  } = useContext(SeatMapContext)!;
  return (
    <div className={styles.language}>
      <span>EN</span>
      <input
        id="language"
        type="checkbox"
        checked={language}
        onChange={() => dispatch({ type: "language", language: language })}
        className={styles.check}
        aria-label="Choose language"
      />
      <span>PL</span>
    </div>
  );
};
