import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Seat } from "./Seat";
import styles from "./Seat.module.css";

describe("Seat component", () => {
  test("renders seat with correct id and styles", () => {
    const defaultSeatValue = {
      value: "X",
      seat: "10A",
      seatType: "window",
      paxType: "C",
      evacuationRow: false,
      evacuationRowColored: false,
    };

    const props = {
      id: 1,
      seatValue: defaultSeatValue,
    };
    render(<Seat {...props} />);

    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(props.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).toHaveClass(styles.child);
    expect(seat).not.toHaveClass(styles.infant);
    expect(seat).not.toHaveClass(styles.emergency);
    expect(seat).not.toHaveClass(styles.empty);
    expect(seat).toContainElement(screen.getByTestId("crossed"));
  });
  test("renders emergency seat correctly", () => {
    const defaultSeatValue = {
      value: "53",
      seat: "16A",
      seatType: "window",
      paxType: "A",
      evacuationRow: true,
      evacuationRowColored: true,
    };

    const props = {
      id: 5,
      seatValue: defaultSeatValue,
    };
    render(<Seat {...props} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(props.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).toHaveClass(styles.emergency);
    expect(seat).not.toHaveClass(styles.child);
    expect(seat).not.toHaveClass(styles.infant);
  });

  test("renders empty seat correctly", () => {
    const defaultSeatValue = {
      value: "",
      seat: "",
      seatType: "",
      paxType: "",
      evacuationRow: false,
      evacuationRowColored: false,
    };

    const props = {
      id: 0,
      seatValue: defaultSeatValue,
    };
    render(<Seat {...props} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(props.id));
    expect(seat).not.toHaveClass(styles.seat);
    expect(seat).toHaveClass(styles.empty);
  });
  test("renders infant seat correctly", () => {
    const defaultSeatValue = {
      value: "X",
      seat: "12A",
      seatType: "window",
      paxType: "I",
      evacuationRow: false,
      evacuationRowColored: false,
    };

    const props = {
      id: 12,
      seatValue: defaultSeatValue,
    };
    render(<Seat {...props} />);
    const seat = screen.getByRole("cell");

    expect(seat).toHaveAttribute("id", String(props.id));
    expect(seat).toHaveClass(styles.seat);
    expect(seat).not.toHaveClass(styles.empty);
    expect(seat).toHaveClass(styles.infant);
  });
});
