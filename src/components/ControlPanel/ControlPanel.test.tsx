import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { ControlPanel } from "./ControlPanel";
import styles from "./ControlPanel.module.css";
import { SeatMapContext } from "../../context/SeatMapContext";
import { mockValue } from "../../mockData/mockData";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { SelectPlane } from "../SelectPlane/SelectPlane";

describe("ControlPanel component", () => {
  it("renders without crashing", () => {
    render(
      <ControlPanel>
        <SelectPlane />
        <ButtonGroup />
      </ControlPanel>,
      {
        wrapper: ({ children }) => (
          <SeatMapContext.Provider value={mockValue}>
            {children}
          </SeatMapContext.Provider>
        ),
      }
    );
  });

  it("has the correct CSS class", () => {
    const { container } = render(
      <ControlPanel>
        <SelectPlane />
        <ButtonGroup />
      </ControlPanel>,
      {
        wrapper: ({ children }) => (
          <SeatMapContext.Provider value={mockValue}>
            {children}
          </SeatMapContext.Provider>
        ),
      }
    );
    expect(container.firstChild).toHaveClass(`${styles.controlPanel}`);
  });

  it("renders correctly and handles user interactions", () => {
    render(
      <ControlPanel>
        <SelectPlane />
        <ButtonGroup />
      </ControlPanel>,
      {
        wrapper: ({ children }) => (
          <SeatMapContext.Provider value={mockValue}>
            {children}
          </SeatMapContext.Provider>
        ),
      }
    );

    const { handleSelectedPlane, dispatch } = mockValue;

    expect(screen.getByText("Select the aircraft type:")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Select the aircraft type:" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Generate Seat Map" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Count sections" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Clear Seat Map" })
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
    expect(handleSelectedPlane).toHaveBeenCalled();
    expect(handleSelectedPlane).toHaveReturnedWith("airbus-a320");

    fireEvent.click(screen.getByRole("button", { name: "Generate Seat Map" }));

    expect(dispatch).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Count sections" }));

    expect(dispatch).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Clear Seat Map" }));

    expect(dispatch).toHaveBeenCalled();
  });
});
