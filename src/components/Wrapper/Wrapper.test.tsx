import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Wrapper } from "./Wrapper";
import styles from "./Wrapper.module.css";

describe("Wrapper component", () => {
  it("renders children correctly", () => {
    render(
      <Wrapper>
        <p>Test</p>
      </Wrapper>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("applies column style if isColumn is true", () => {
    render(
      <Wrapper isColumn>
        <p>Test</p>
      </Wrapper>
    );
    expect(screen.getByText("Test").parentElement).toHaveClass(
      `${styles.column}`
    );
  });

  it("applies wrapper style if isColumn is false", () => {
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
