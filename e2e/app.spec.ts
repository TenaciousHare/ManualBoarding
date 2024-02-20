// @ts-check
import { test, expect } from "@playwright/test";

test("should load the app", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const header = await page.$("h1");
  expect(await header!.textContent()).toMatch(/Boeing 737/);

  const seats = await page.$$('[class^="_seat_"]');
  expect(seats.length).toBe(189);
});

test("should change the plane type", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.selectOption("select", "airbus-a320");

  const header = await page.$("h1");
  expect(await header!.textContent()).toMatch(/Airbus A320/);

  const seats = await page.$$('[class^="_seat_"]');
  expect(seats.length).toBe(180);
});

test("should generate a random seat map", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.click("button#generate");

  const occupiedSeats = await page.$$(".occupied");
  expect(occupiedSeats.length).toBeGreaterThan(0);
});

test("should count the totals correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.click("button#generate");

  await page.click("button#count");

  const occupied = await page.$$(".occupied");
  const childs = await page.$$('[class*="_child_"][class~="occupied"]');
  const infants = await page.$$('[class*="_infant_"][class~="occupied"]');
  const adultsCell = await page.$$('[class*="_cell_"]');

  // INFANTS TOTAL count
  expect(await adultsCell[adultsCell.length - 1].textContent()).toEqual(
    infants.length.toString()
  );
  // CHILDS TOTAL count
  expect(await adultsCell[adultsCell.length - 3].textContent()).toEqual(
    childs.length.toString()
  );
  // ADULTS TOTAL count
  expect(await adultsCell[adultsCell.length - 4].textContent()).toEqual(
    (occupied.length - childs.length).toString()
  );
  // TOTALS count
  expect(await adultsCell[adultsCell.length - 2].textContent()).toEqual(
    occupied.length.toString()
  );
});

test("should clear the seat map", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.click("button#generate");

  await page.click("button#clear");

  const occupiedSeats = await page.$$(".occupied");
  expect(occupiedSeats.length).toBe(0);
});

test("should change the language of the interface", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.check("input#language");

  const header = await page.$("h1");
  expect(await header!.textContent()).toMatch(/Boeing 737/);

  const buttons = await page.$$("button");
  expect(await buttons[0].textContent()).toMatch(/wygeneruj seat mapę/i);
  expect(await buttons[1].textContent()).toMatch(/policz sekcje/i);
  expect(await buttons[2].textContent()).toMatch(/wyczyść seat mapę/i);
  expect(await buttons[3].textContent()).toMatch(/wydrukuj seat mapę/i);
});
