import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { Totals } from "./Totals";
import { TOTAL_HEADERS } from "../../constants";
import { Zones } from "../../types/interfaces";
import styles from "./Totals.module.css";

const plane = {
  totalRows: ["rows 1-5", "rows 6-28", "rows 29-33", ""],
  totalLabels: [
    { zone: "ZONE 1" },
    { zone: "ZONE 2" },
    { zone: "ZONE 3" },
    { zone: "TOTAL" },
  ],
};
const totals: Zones = {
  zone1: {
    adults: 2,
    children: 1,
    infants: 0,
  },
  zone2: {
    adults: 3,
    children: 2,
    infants: 1,
  },
  zone3: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  zone4: {
    adults: 6,
    children: 3,
    infants: 1,
  },
};

const zeroTotals = {
  zone1: { adults: 0, children: 0, infants: 0 },
  zone2: { adults: 0, children: 0, infants: 0 },
  zone3: { adults: 0, children: 0, infants: 0 },
  zone4: { adults: 0, children: 0, infants: 0 },
};

describe("Totals component", () => {
  beforeEach(() => {
    render(<Totals plane={plane} totals={totals} />);
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
    render(<Totals plane={plane} totals={zeroTotals} />);

    const cells = screen.getAllByRole("cell");

    cells.forEach((cell) => {
      expect(cell.textContent).toMatch("");
    });
  });

  it("has the correct CSS class", () => {
    const { container } = render(<Totals totals={totals} plane={plane} />);
    expect(container.firstChild).toHaveClass(`${styles.totals}`);
  });
});
