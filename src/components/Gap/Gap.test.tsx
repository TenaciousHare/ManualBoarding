import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Gap } from "./Gap";
import styles from "./Gap.module.css";

describe("Gap component", () => {
  it("renders without crashing", () => {
    render(<Gap />);
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Gap />);
    expect(container.firstChild).toHaveClass(`${styles.gap}`);
  });
});
