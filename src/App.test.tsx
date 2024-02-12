import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { App } from "./App";
import { PLANES } from "./constants";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("renders header correctly", () => {
    const header = screen.getByRole("heading");
    expect(header).toBeVisible();
    expect(header).toHaveTextContent(`Seat mapa - ${PLANES[0].name}`);
  });

  it("renders seat map correctly", () => {
    const seatMap = screen.getByTestId("seat-map");
    const seatMapLabels = screen.getByTestId("seat-map-labels");

    expect(seatMap).toBeVisible();
    expect(seatMapLabels).toBeVisible();
    expect(seatMapLabels.children.length).toBe(3);
  });

  it("renders control panel correctly", () => {
    const printButton = screen.getByRole("button", { name: /Wydrukuj/i });
    const clearButton = screen.getByRole("button", { name: /Wyczyść/i });
    const generateButton = screen.getByRole("button", { name: /Wygeneruj/i });
    const select: HTMLSelectElement = screen.getByRole("combobox");
    const countButton = screen.getByRole("button", { name: /Pokaż/i });
    expect(printButton).toBeVisible();
    expect(clearButton).toBeVisible();
    expect(generateButton).toBeVisible();
    expect(select).toBeVisible();
    expect(countButton).toBeVisible();

    expect(select.value).toBe(PLANES[0].type);
    expect(select.children.length).toBe(PLANES.length);
  });

  it("renders footer correctly", () => {
    const footer = screen.getByTestId("footer");

    expect(footer).toBeVisible();

    expect(footer).toHaveTextContent(/Copyright/i);
  });
  it("changes plane after selecting another one from the list", () => {
    const header = screen.getByRole("heading");
    const seatMapLabels = screen.getByTestId("seat-map-labels");
    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: PLANES[1].type } });

    expect(header).toHaveTextContent(`Seat mapa - ${PLANES[1].name}`);

    expect(seatMapLabels.children.length).toBe(3);
  });

  it("generates new code after clicking generate button", () => {
    const code = screen.getByTestId("code");
    const generateButton = screen.getByRole("button", { name: /Wygeneruj/i });

    const initialCode = code.textContent;
    fireEvent.click(generateButton);
    const newCode = code.textContent;

    expect(newCode).not.toBe(initialCode);
  });

  it("calls window.print after clicking print button", () => {
    const printButton = screen.getByRole("button", { name: /Wydrukuj/i });

    const printMock = vi.spyOn(window, "print").mockImplementation(() => {});

    fireEvent.click(printButton);

    expect(printMock).toHaveBeenCalledTimes(1);

    printMock.mockRestore();
  });

  it("calls console.error after selecting a non-existing plane from the list", () => {
    const select = screen.getByRole("combobox");

    const errorMock = vi.spyOn(console, "error").mockImplementation(() => {});

    fireEvent.change(select, { target: { value: "non-existing-plane" } });

    expect(errorMock).toHaveBeenCalledTimes(1);
    expect(errorMock).toHaveBeenCalledWith(
      "Nie znaleziono wybranego samolotu."
    );

    errorMock.mockRestore();
  });

  it("updates totals after clicking count button", () => {
    const generateButton = screen.getByRole("button", { name: /Wygeneruj/i });
    const countButton = screen.getByRole("button", { name: /Pokaż/i });
    const totals = screen.getByTestId("totals");

    const initialTotals = totals.textContent;

    fireEvent.click(generateButton);
    fireEvent.click(countButton);

    const newTotals = totals.textContent;
    expect(newTotals).not.toBe(initialTotals);
  });
});
