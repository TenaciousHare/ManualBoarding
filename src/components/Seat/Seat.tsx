import styles from "./Seat.module.css";
import { SeatValue } from "../../hooks/useSeatMap/useSeatMap";

export interface SeatProps {
  id: number;
  seatValue?: SeatValue;
}

export const DEFAULT_SEAT_VALUE: SeatValue = {
  value: "",
  seat: "X",
  seatType: "",
  paxType: "A",
  evacuationRow: false,
  evacuationRowColored: false,
};
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
