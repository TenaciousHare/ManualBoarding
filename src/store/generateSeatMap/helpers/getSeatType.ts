export function getSeatType(seat: string): string {
  switch (seat) {
    case "A":
    case "F":
      return "window";
    case "C":
    case "D":
      return "aisle";
    case "B":
    case "E":
      return "mid";
    default:
      return "unknown";
  }
}
