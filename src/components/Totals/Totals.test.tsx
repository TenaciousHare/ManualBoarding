import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { SeatMapContext } from "../../context/SeatMapContext";
import { Totals } from "./Totals";
import { TOTAL_HEADERS } from "../../constants";
import styles from "./Totals.module.css";
import { mockValue, zeroMockValue } from "../../mockData/mockData";

describe("Totals component", () => {
  beforeEach(() => {
    render(<Totals />, {
      wrapper: ({ children }) => (
        <SeatMapContext.Provider value={mockValue}>
          {children}
        </SeatMapContext.Provider>
      ),
    });
  });

  it("should render the table headers correctly", () => {
    const headers = screen.getAllByRole("columnheader");

    expect(headers).toHaveLength(TOTAL_HEADERS.length);

    headers.forEach((header, index) => {
      expect(header).toHaveTextContent(TOTAL_HEADERS[index]);
    });
  });

  it("should render the table data correctly", () => {
    const cells = screen.getAllByRole("cell");

    const {
      state: { plane, totals },
    } = mockValue;

    expect(cells).toHaveLength(plane.totalRows.length * TOTAL_HEADERS.length);

    cells.forEach((cell, index) => {
      const rowIndex = Math.floor(index / TOTAL_HEADERS.length);
      const zoneKey = `zone${rowIndex + 1}`;
      if (index === 0) {
        expect(cell.textContent).toMatch(`${plane.totalRows[rowIndex]}`);
      } else if (index === 1) {
        expect(cell).toHaveTextContent(plane.totalLabels[rowIndex].zone);
      } else if (index === 2) {
        expect(cell).toHaveTextContent(totals[zoneKey].adults.toString());
      } else if (index === 3) {
        expect(cell).toHaveTextContent(totals[zoneKey].children.toString());
      } else if (index === 4) {
        expect(cell).toHaveTextContent(
          (totals[zoneKey].adults + totals[zoneKey].children).toString()
        );
      } else if (index === 5) {
        expect(cell).toHaveTextContent(totals[zoneKey].infants.toString());
      }
    });
  });

  it("should render empty cells when all totals are zero", () => {
    render(<Totals />, {
      wrapper: ({ children }) => (
        <SeatMapContext.Provider value={zeroMockValue}>
          {children}
        </SeatMapContext.Provider>
      ),
    });
    const cells = screen.getAllByRole("cell");

    cells.forEach((cell) => {
      expect(cell.textContent).toMatch("");
    });
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Totals />, {
      wrapper: ({ children }) => (
        <SeatMapContext.Provider value={mockValue}>
          {children}
        </SeatMapContext.Provider>
      ),
    });
    expect(container.firstChild).toHaveClass(`${styles.totals}`);
  });
});
