import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Row } from "./Row";
import styles from "./Row.module.css";

const props = {
  row: 1,
  index: 0,
  seatsValues: [
    {
      value: "189",
      seat: "3C",
      seatType: "window",
      paxType: "A",
      evacuationRow: false,
      evacuationRowColored: false,
    },
  ],
};

describe("Row component", () => {
  test("renders without crashing", () => {
    render(<Row {...props} />);
  });

  test("has the correct CSS class", () => {
    const { container } = render(<Row {...props} />);

    expect(container.firstChild?.firstChild).toHaveClass(`${styles.rowNumber}`);
  });
  test("renders rows with numbers", () => {
    render(<Row {...props} />);
    const numbers = screen.getAllByTestId(props.row);
    expect(numbers).toHaveLength(2); // powinno być dwa elementy td z numerami wiersza
    numbers.forEach((number) => {
      expect(number).toHaveTextContent(/1/i); // tekst powinien być równy row
    });
  });
  test("renders gap", () => {
    render(<Row {...props} />);
    expect(screen.getAllByRole("separator")).toHaveLength(1);
  });
});
