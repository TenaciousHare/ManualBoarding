import styles from "./Seat.module.css";
import { SeatValue } from "../../types/interfaces";
import { DEFAULT_SEAT_VALUE } from "../../constants";
export interface SeatProps {
  id: number;
  seatValue?: SeatValue;
}
export const Seat = ({ id, seatValue = DEFAULT_SEAT_VALUE }: SeatProps) => {
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
      {isCrossed ? (
        <div data-testid="crossed" className={styles.crossed}></div>
      ) : (
        seatNumber
      )}
    </td>
  );
};
