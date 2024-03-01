import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Row } from "./Row";
import styles from "./Row.module.css";
import { mockProps } from "../../mockData/Row_MockData";

describe("Row component", () => {
  it("renders without crashing", () => {
    render(<Row {...mockProps} />);
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Row {...mockProps} />);

    expect(container.firstChild?.firstChild).toHaveClass(`${styles.rowNumber}`);
  });
  it("renders rows with numbers", () => {
    render(<Row {...mockProps} />);
    const numbers = screen.getAllByTestId(mockProps.row);
    expect(numbers).toHaveLength(2); // powinno być dwa elementy td z numerami wiersza
    numbers.forEach((number) => {
      expect(number).toHaveTextContent(/1/i); // tekst powinien być równy row
    });
  });
  it("renders gap", () => {
    render(<Row {...mockProps} />);
    expect(screen.getAllByRole("separator")).toHaveLength(1);
  });
});
