export function generateHexCode(): string {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexCode = "";
  for (let i = 0; i < 3; i++) {
    hexCode += digits[Math.floor(Math.random() * 16)];
  }
  return "#" + hexCode;
}
