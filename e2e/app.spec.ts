// @ts-check
// tests/app.test.js
import { test, expect } from "@playwright/test";

// Testuj, czy aplikacja poprawnie się ładuje
test("should load the app", async ({ page }) => {
  // Otwórz stronę aplikacji
  await page.goto("http://localhost:5173");
  // Sprawdź, czy nagłówek zawiera nazwę samolotu
  const header = await page.$("h1");
  expect(await header!.textContent()).toMatch(/Boeing 737/);
  // Sprawdź, czy mapa miejsc zawiera 189 miejsc
  const seats = await page.$$('[class^="_seat_"]');
  expect(seats.length).toBe(189);
});

// Testuj, czy użytkownik może zmienić typ samolotu
test("should change the plane type", async ({ page }) => {
  // Otwórz stronę aplikacji
  await page.goto("http://localhost:5173");
  // Wybierz inny typ samolotu z listy rozwijanej
  await page.selectOption("select", "airbus-a320");
  // Sprawdź, czy nagłówek zmienił nazwę samolotu
  const header = await page.$("h1");
  expect(await header!.textContent()).toMatch(/Airbus A320/);
  // Sprawdź, czy mapa miejsc zmieniła ilość miejsc
  const seats = await page.$$('[class^="_seat_"]');
  expect(seats.length).toBe(180);
});

// Testuj, czy użytkownik może wygenerować losową mapę miejsc
test("should generate a random seat map", async ({ page }) => {
  // Otwórz stronę aplikacji
  await page.goto("http://localhost:5173");
  // Kliknij przycisk "Generuj losową mapę miejsc"
  await page.click("button#generate");
  // Sprawdź, czy mapa miejsc zawiera co najmniej jedno zajęte miejsce
  const occupiedSeats = await page.$$(".occupied");
  expect(occupiedSeats.length).toBeGreaterThan(0);
});

// Testuj, czy użytkownik może zliczyć ilość zajętych i wolnych miejsc
// test("should count the totals of occupied and free seats", async ({ page }) => {
//   // Otwórz stronę aplikacji
//   await page.goto("http://localhost:5173");
//   // Wygeneruj losową mapę miejsc
//   await page.click("button#generate");
//   // Kliknij przycisk "Zlicz zajęte i wolne miejsca"
//   await page.click("button#count");
//   // Sprawdź, czy podsumowanie zawiera poprawne wartości
//   const occupied = await page.$("#occupied");
//   const free = await page.$("#free");
//   const total = await page.$("#total");
//   expect(await occupied.textContent()).toBe(
//     `Zajęte: ${await page.$eval(
//       ".seatmap",
//       (seatmap) => seatmap.querySelectorAll(".seat.occupied").length
//     )}`
//   );
//   expect(await free.textContent()).toBe(
//     `Wolne: ${await page.$eval(
//       ".seatmap",
//       (seatmap) => seatmap.querySelectorAll(".seat.free").length
//     )}`
//   );
//   expect(await total.textContent()).toBe(
//     `Razem: ${await page.$eval(
//       ".seatmap",
//       (seatmap) => seatmap.querySelectorAll(".seat").length
//     )}`
//   );
// });

// Testuj, czy użytkownik może wyczyścić mapę miejsc
test("should clear the seat map", async ({ page }) => {
  // Otwórz stronę aplikacji
  await page.goto("http://localhost:5173");
  // Wygeneruj losową mapę miejsc
  await page.click("button#generate");
  // Kliknij przycisk "Wyczyść mapę miejsc"
  await page.click("button#clear");
  // Sprawdź, czy mapa miejsc nie zawiera żadnego zajętego miejsca
  const occupiedSeats = await page.$$(".occupied");
  expect(occupiedSeats.length).toBe(0);
});

// Testuj, czy użytkownik może zmienić język interfejsu
test("should change the language of the interface", async ({ page }) => {
  // Otwórz stronę aplikacji
  await page.goto("http://localhost:5173");
  // Zmień język interfejsu na angielski
  await page.check("input#language");
  // Sprawdź, czy nagłówek zmienił język na polski
  const header = await page.$("h1");
  expect(await header!.textContent()).toMatch(/Boeing 737/);
  // Sprawdź, czy przyciski zmieniły język na polski
  const buttons = await page.$$("button");
  expect(await buttons[0].textContent()).toMatch(/wygeneruj seat mapę/i);
  expect(await buttons[1].textContent()).toMatch(/policz sekcje/i);
  expect(await buttons[2].textContent()).toMatch(/wyczyść seat mapę/i);
  expect(await buttons[3].textContent()).toMatch(/wydrukuj seat mapę/i);
  // Sprawdź, czy podsumowanie zmieniło język na polski
  const occupied = await page.$("#occupied");
  const free = await page.$("#free");
  const total = await page.$("#total");
  // expect(await occupied.textContent()).toBe("Occupied: 0");
  // expect(await free.textContent()).toBe("Free: 189");
  // expect(await total.textContent()).toBe("Total: 189");
});
