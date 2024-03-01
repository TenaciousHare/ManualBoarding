import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import styles from "./Heading.module.css";

export const Heading = () => {
  const {
    state: {
      plane: { name },
      language,
    },
  } = useContext(SeatMapContext)!;

  const transformedName = language
    ? `Seat mapa - ${name}`
    : `Seat map - ${name}`;

  return <h1 className={styles.heading}>{transformedName}</h1>;
};
