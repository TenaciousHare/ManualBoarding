import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";
import styles from "./Footer.module.css";

describe("Gap component", () => {
  test("renders without crashing", () => {
    render(<Footer />);
  });

  test("has the correct CSS class", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass(`${styles.footer}`);
  });

  test("renders all texts correctly", () => {
    render(<Footer />);
    expect(screen.getByText(/Repozytorium GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Dokumentacja/i)).toBeInTheDocument();
    expect(screen.getByText(/Paweł Zajączkowski 2024/i)).toBeInTheDocument();
  });
});
