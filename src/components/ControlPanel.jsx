export function ControlPanel({
  onPrint,
  onGenerateRandomSeats,
  onClearSeatMap,
}) {
  return (
    <div className="control-panel">
      <div className="btn_group">
        <button onClick={onGenerateRandomSeats}>Wygeneruj losową mapę</button>
        <button onClick={onClearSeatMap}>Wyczyść Seat mapę</button>
        <button onClick={onPrint}>Wydrukuj Seat Mapę</button>
      </div>
    </div>
  );
}
