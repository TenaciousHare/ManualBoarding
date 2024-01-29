export function shuffle(array) {
  // Użyj algorytmu Fisher-Yates
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // Dopóki pozostają elementy do wymieszania
  while (0 !== currentIndex) {
    // Wybierz losowy element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Zamień go z bieżącym elementem
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
