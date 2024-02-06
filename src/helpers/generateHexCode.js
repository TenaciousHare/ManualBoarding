export function generateHexCode() {
  // Tworzymy tablicę cyfr i liter od A do F
  let digits = [
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
  // Losujemy trzy elementy z tablicy i łączymy je w ciąg
  let hexCode = "";
  for (let i = 0; i < 3; i++) {
    hexCode += digits[Math.floor(Math.random() * 16)];
  }
  // Zwracamy kod hex z poprzedzającym znakiem #
  return "#" + hexCode;
}
