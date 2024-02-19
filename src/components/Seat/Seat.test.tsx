import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Seat } from "./Seat";
import styles from "./Seat.module.css";
import {
  crossedProps,
  defaultProps,
  emergencyProps,
  emptyProps,
  infantProps,
} from "./Seat_MockData";

describe("Seat component", () => {
  it("renders seat with correct id and styles", () => {
    render(<Seat {...defaultProps} />);

    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(defaultProps.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).toHaveClass(styles.child);
    expect(seat).not.toHaveClass(styles.infant);
    expect(seat).not.toHaveClass(styles.emergency);
    expect(seat).not.toHaveClass(styles.empty);
    expect(seat).not.toHaveClass(styles.crossed);
  });
  it("renders crossed seat correctly", () => {
    render(<Seat {...crossedProps} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(crossedProps.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).not.toHaveClass(styles.emergency);
    expect(seat).not.toHaveClass(styles.child);
    expect(seat).not.toHaveClass(styles.infant);
    expect(seat).toContainElement(screen.getByTestId("crossed"));
  });
  it("renders emergency seat correctly", () => {
    render(<Seat {...emergencyProps} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(emergencyProps.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).toHaveClass(styles.emergency);
    expect(seat).not.toHaveClass(styles.child);
    expect(seat).not.toHaveClass(styles.infant);
  });

  it("renders empty seat correctly", () => {
    render(<Seat {...emptyProps} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(emptyProps.id));
    expect(seat).not.toHaveClass(styles.seat);
    expect(seat).toHaveClass(styles.empty);
  });
  it("renders infant seat correctly", () => {
    render(<Seat {...infantProps} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(infantProps.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).not.toHaveClass(styles.empty);
    expect(seat).toHaveClass(styles.infant);
  });
});
