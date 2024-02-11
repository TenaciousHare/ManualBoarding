import "@testing-library/jest-dom";
import { vi, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { ControlPanel } from "./ControlPanel";
import styles from "./ControlPanel.module.css";

const onPrint = vi.fn();
const onClearSeatMap = vi.fn();
const onGenerate = vi.fn();
const onSelect = vi.fn(() => {
  return "airbus-a320";
});
const onCountTotals = vi.fn();

describe("ControlPanel component", () => {
  const mockProps = {
    onPrint,
    onClearSeatMap,
    onGenerate,
    onSelect,
    onCountTotals,
  };

  test("renders without crashing", () => {
    render(<ControlPanel {...mockProps} />);
  });

  test("has the correct CSS class", () => {
    const { container } = render(<ControlPanel {...mockProps} />);
    expect(container.firstChild).toHaveClass(`${styles.controlPanel}`);
  });

  test("ControlPanel renders correctly and handles user interactions", () => {
    render(<ControlPanel {...mockProps} />);

    expect(screen.getByText("Wybierz typ samolotu:")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Wybierz typ samolotu:" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Wygeneruj seat mapę" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Pokaż totale" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Wyczyść Seat mapę" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Wydrukuj Seat Mapę" })
    ).toBeInTheDocument();

    const select = screen.getByRole("combobox", {
      name: "Wybierz typ samolotu:",
    });
    fireEvent.change(select, {
      target: { value: "airbus-a320" },
    });

    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveReturnedWith("airbus-a320");

    fireEvent.click(
      screen.getByRole("button", { name: "Wygeneruj seat mapę" })
    );

    expect(onGenerate).toHaveBeenCalled();

    // Kliknij przycisk Pokaż totale
    fireEvent.click(screen.getByRole("button", { name: "Pokaż totale" }));

    // Sprawdź, czy funkcja onCountTotals jest wywołana
    expect(onCountTotals).toHaveBeenCalled();

    // Kliknij przycisk Wyczyść Seat mapę
    fireEvent.click(screen.getByRole("button", { name: "Wyczyść Seat mapę" }));

    // Sprawdź, czy funkcja onClearSeatMap jest wywołana
    expect(onClearSeatMap).toHaveBeenCalled();

    // Kliknij przycisk Wydrukuj Seat Mapę
    fireEvent.click(screen.getByRole("button", { name: "Wydrukuj Seat Mapę" }));

    // Sprawdź, czy funkcja onPrint jest wywołana
    expect(onPrint).toHaveBeenCalled();
  });
});
