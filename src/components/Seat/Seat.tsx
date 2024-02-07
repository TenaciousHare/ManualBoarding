import React from "react";
import styles from "./Seat.module.css";
import { SeatProps } from "../../types/interfaces";
const defaultSeatValue = {
  value: "",
  seat: "X",
  seatType: "",
  paxType: "A",
  evacuationRowColored: false,
};

export const Seat: React.FC<SeatProps> = ({
  id,
  seatValue = defaultSeatValue,
}) => {
  const seatId = String(id);
  const { value, seat, paxType, evacuationRowColored } = seatValue;
  const isEmergency = evacuationRowColored;
  const isExisting = seat === "" && value === "";
  const isChild = paxType === "C";
  const isInfant = paxType === "I";
  const isCrossed = value === "X";

  let className = isExisting ? styles.empty : styles.seat;
  className += isEmergency ? ` ${styles.emergency}` : "";
  className += isChild ? ` ${styles.child}` : "";
  className += isInfant ? ` ${styles.infant}` : "";

  const seatNumber = value || "";

  return (
    <td id={seatId} className={className}>
      {isCrossed ? <div className={styles.crossed}></div> : seatNumber}
    </td>
  );
};