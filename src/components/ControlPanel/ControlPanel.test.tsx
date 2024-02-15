import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { mockProps } from "./ControlPanel_MockData";
import { ControlPanel } from "./ControlPanel";
import styles from "./ControlPanel.module.css";

const { onPrint, onClearSeatMap, onGenerate, onSelect, onCountTotals } =
  mockProps;

describe("ControlPanel component", () => {
  it("renders without crashing", () => {
    render(<ControlPanel {...mockProps} />);
  });

  it("has the correct CSS class", () => {
    const { container } = render(<ControlPanel {...mockProps} />);
    expect(container.firstChild).toHaveClass(`${styles.controlPanel}`);
  });

  it("renders correctly and handles user interactions", () => {
    render(<ControlPanel {...mockProps} />);

    expect(screen.getByText("Select the aircraft type:")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Select the aircraft type:" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Generate Seat map" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Count sections" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Clear Seat map" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Print Seat Map" })
    ).toBeInTheDocument();

    const select = screen.getByRole("combobox", {
      name: "Select the aircraft type:",
    });
    fireEvent.change(select, {
      target: { value: "airbus-a320" },
    });

    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveReturnedWith("airbus-a320");

    fireEvent.click(screen.getByRole("button", { name: "Generate Seat map" }));

    expect(onGenerate).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Count sections" }));

    expect(onCountTotals).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Clear Seat map" }));

    expect(onClearSeatMap).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Print Seat Map" }));

    expect(onPrint).toHaveBeenCalled();
  });
});
