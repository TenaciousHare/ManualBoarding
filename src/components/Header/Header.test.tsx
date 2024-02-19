import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Header } from "./Header";
import styles from "./Header.module.css";

const props = {
  name: "Boeing 737-800",
  code: "#777",
  isChecked: true,
  onChange: vi.fn(),
};

describe("Header component", () => {
  it("renders without crashing", () => {
    render(<Header {...props} />);
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Header {...props} />);
    expect(container.firstChild).toHaveClass(`${styles.code}`);
  });

  it("renders Header with correct name and code", () => {
    render(<Header {...props} />);
    expect(screen.getByText(/Boeing 737-800/i)).toBeInTheDocument();
    expect(screen.getByText(/#777/i)).toBeInTheDocument();
  });
});
