import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { SeatMap } from "./SeatMap";
import styles from "./SeatMap.module.css";
import { mockProps } from "./SeatMap_MockData";

describe("SeatMap component", () => {
  it("renders without crashing with correct class", () => {
    const { container } = render(<SeatMap {...mockProps} />);

    expect(container.firstChild).toHaveClass(`${styles.seatMap}`);
  });
});
