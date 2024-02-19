import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { Totals } from "./Totals";
import { TOTAL_HEADERS } from "../../constants";
import styles from "./Totals.module.css";
import { planeMock, totalsMock, zeroTotalsMock } from "./Totals_MockData";

describe("Totals component", () => {
  beforeEach(() => {
    render(<Totals plane={planeMock} totals={totalsMock} />);
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

    expect(cells).toHaveLength(
      planeMock.totalRows.length * TOTAL_HEADERS.length
    );

    cells.forEach((cell, index) => {
      const rowIndex = Math.floor(index / TOTAL_HEADERS.length);
      const zoneKey = `zone${rowIndex + 1}`;
      if (index === 0) {
        expect(cell.textContent).toMatch(`${planeMock.totalRows[rowIndex]}`);
      } else if (index === 1) {
        expect(cell).toHaveTextContent(planeMock.totalLabels[rowIndex].zone);
      } else if (index === 2) {
        expect(cell).toHaveTextContent(totalsMock[zoneKey].adults.toString());
      } else if (index === 3) {
        expect(cell).toHaveTextContent(totalsMock[zoneKey].children.toString());
      } else if (index === 4) {
        expect(cell).toHaveTextContent(
          (totalsMock[zoneKey].adults + totalsMock[zoneKey].children).toString()
        );
      } else if (index === 5) {
        expect(cell).toHaveTextContent(totalsMock[zoneKey].infants.toString());
      }
    });
  });

  it("should render empty cells when all totals are zero", () => {
    render(<Totals plane={planeMock} totals={zeroTotalsMock} />);

    const cells = screen.getAllByRole("cell");

    cells.forEach((cell) => {
      expect(cell.textContent).toMatch("");
    });
  });

  it("has the correct CSS class", () => {
    const { container } = render(
      <Totals totals={totalsMock} plane={planeMock} />
    );
    expect(container.firstChild).toHaveClass(`${styles.totals}`);
  });
});
