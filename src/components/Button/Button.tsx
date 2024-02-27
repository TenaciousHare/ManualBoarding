import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";

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
    "generate seat map": () => dispatch({ type: "generate", plane }),
    "clear seat map": () => dispatch({ type: "clear", plane }),
    "print seat map": () => dispatch({ type: "print" }),
    "count sections": () =>
      dispatch({ type: "count_totals", plane, values: seatmap }),
  };

  return <button onClick={onClickMapping[name]}>{language}</button>;
}
