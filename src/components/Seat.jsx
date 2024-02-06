const defaultSeatValue = {
  value: "",
  seat: "X",
  seatType: "",
  paxType: "A",
  evacuationRowColored: false,
};

export const Seat = ({ id, seatValue = defaultSeatValue }) => {
  const { value, seat, seatType, paxType, evacuationRowColored } = seatValue;
  const isEmergency = evacuationRowColored;
  const isWindow = seatType === "window";
  const isAisle = seatType === "aisle";
  const isExisting = seat === "" && value === "";
  const isChild = paxType === "C";
  const isInfant = paxType === "I";
  const isCrossed = value === "X";

  let className = isExisting ? "empty" : "seat";
  className += isEmergency ? " emergency" : "";
  className += isWindow ? " window" : "";
  className += isAisle ? " aisle" : "";
  className += isChild ? " child" : "";
  className += isInfant ? " infant" : "";

  const seatNumber = value || "";

  return (
    <td onClick={(e) => console.log(e.target.id)} id={id} className={className}>
      {isCrossed ? <div className="crossed"></div> : seatNumber}
    </td>
  );
};
