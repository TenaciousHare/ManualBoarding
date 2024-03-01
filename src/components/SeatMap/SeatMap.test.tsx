import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { SeatMapContext } from "../../context/SeatMapContext";
import { SeatMap } from "./SeatMap";
import styles from "./SeatMap.module.css";
import { mockValue } from "../../mockData/mockData";

describe("SeatMap component", () => {
  it("renders without crashing with correct class", () => {
    const { container } = render(<SeatMap />, {
      wrapper: ({ children }) => (
        <SeatMapContext.Provider value={mockValue}>
          {children}
        </SeatMapContext.Provider>
      ),
    });

    expect(container.firstChild).toHaveClass(`${styles.seatMap}`);
  });
});
