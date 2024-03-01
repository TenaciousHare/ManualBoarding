import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import styles from "./Button.module.css";
interface ButtonProps {
  language: string;
  name: string;
}

interface OnClickMapping {
  [key: string]: () => void;
}

export function Button({ language, name }: ButtonProps) {
  const {
    state: { plane, seatmap },
    dispatch,
  } = useContext(SeatMapContext)!;
  const onClickMapping: OnClickMapping = {
    generate: () => dispatch({ type: "generate", plane }),
    clear: () => dispatch({ type: "clear", plane }),
    print: () => dispatch({ type: "print" }),
    count: () => dispatch({ type: "count_totals", plane, values: seatmap }),
  };

  return (
    <button id={name} className={styles.btn} onClick={onClickMapping[name]}>
      {language}
    </button>
  );
}
