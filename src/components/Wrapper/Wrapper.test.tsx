import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Wrapper } from "./Wrapper";
import styles from "./Wrapper.module.css";

describe("Wrapper component", () => {
  test("renders children correctly", () => {
    render(
      <Wrapper>
        <p>Test</p>
      </Wrapper>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("applies column style if isColumn is true", () => {
    render(
      <Wrapper isColumn>
        <p>Test</p>
      </Wrapper>
    );
    expect(screen.getByText("Test").parentElement).toHaveClass(
      `${styles.column}`
    );
  });

  test("applies wrapper style if isColumn is false", () => {
    render(
      <Wrapper isColumn={false}>
        <p>Test</p>
      </Wrapper>
    );
    expect(screen.getByText("Test").parentElement).toHaveClass(
      `${styles.wrapper}`
    );
  });
});
