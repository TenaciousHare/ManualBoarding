import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";
import styles from "./Footer.module.css";

describe("Gap component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass(`${styles.footer}`);
  });

  it("renders all texts correctly", () => {
    render(<Footer />);
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Docs/i)).toBeInTheDocument();
    expect(screen.getByText(/Paweł Zajączkowski 2024/i)).toBeInTheDocument();
  });
});
