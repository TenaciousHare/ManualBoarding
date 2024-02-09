import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Gap } from "./Gap";
import styles from "./Gap.module.css";

describe("Gap component", () => {
  test("renders without crashing", () => {
    render(<Gap />);
  });

  test("has the correct CSS class", () => {
    const { container } = render(<Gap />);
    expect(container.firstChild).toHaveClass(`${styles.gap}`);
  });
});
