export const Seat = ({
  id,
  row,
  seat,
  seatValue = { value: "", category: "A" },
}) => {
  const { value, category } = seatValue;
  const isEmergency = row === 1 || row === 16 || row === 17;
  const isWindow = seat === "A" || seat === "F";
  const isAisle = seat === "C" || seat === "D";
  const isExisting =
    row === 1 && (seat === "D" || seat === "E" || seat === "F");
  const isChild = category === "C";
  const isInfant = category === "I";

  let className = isExisting ? "empty" : "seat";
  className += isEmergency ? " emergency" : "";
  className += isWindow ? " window" : "";
  className += isAisle ? " aisle" : "";
  className += isChild ? " child" : "";
  className += isInfant ? " infant" : "";
  const seatNumber = value || "";

  return (
    <td id={id} className={className}>
      {seatNumber}
    </td>
  );
};
