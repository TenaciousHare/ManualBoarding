import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Header } from "./Header";
import styles from "./Header.module.css";

const props = {
  name: "Boeing 737-800",
  code: "#777",
};

describe("Header component", () => {
  test("renders without crashing", () => {
    render(<Header {...props} />);
  });

  test("has the correct CSS class", () => {
    const { container } = render(<Header {...props} />);
    expect(container.firstChild).toHaveClass(`${styles.code}`);
  });

  test("renders Header with correct name and code", () => {
    render(<Header {...props} />);
    expect(screen.getByText(/Boeing 737-800/i)).toBeInTheDocument();
    expect(screen.getByText(/#777/i)).toBeInTheDocument();
  });
});
