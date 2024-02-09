import { describe, expect, it } from "vitest";

import { render } from "@testing-library/react";
import { Gap } from "./Gap";

describe("Gap component", () => {
  it("renders without crashing", () => {
    render(<Gap />);
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Gap />);
    const gapElement = container.querySelector(".gap");
    expect(gapElement).toBeInTheDocument();
  });
});
