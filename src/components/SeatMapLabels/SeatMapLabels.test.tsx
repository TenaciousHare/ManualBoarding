import { SeatMapLabels } from "./SeatMapLabels";
import { SeatMapContext } from "../../context/SeatMapContext";

import { describe, it, expect } from "vitest";
import { within, render, screen } from "@testing-library/react";
import { mockValue } from "../../mockData/mockData";

describe("SeatMapLabels component", () => {
  it("renders seat map labels correctly", () => {
    render(<SeatMapLabels />, {
      wrapper: ({ children }) => (
        <SeatMapContext.Provider value={mockValue}>
          {children}
        </SeatMapContext.Provider>
      ),
    });

    const labels = screen.getAllByRole("listitem");

    expect(labels).toHaveLength(3);

    const [fwdLabel, midLabel, aftLabel] = labels;

    expect(within(fwdLabel).getByText("FWD ZONE")).toBeInTheDocument();
    expect(within(fwdLabel).getByText("ROWS 1 to 5")).toBeInTheDocument();
    expect(within(fwdLabel).getByText("MAX PAX")).toBeInTheDocument();
    expect(within(fwdLabel).getByText("27")).toBeInTheDocument();

    expect(within(midLabel).getByText("MID ZONE")).toBeInTheDocument();
    expect(within(midLabel).getByText("ROWS 6 to 28")).toBeInTheDocument();
    expect(within(midLabel).getByText("MAX PAX")).toBeInTheDocument();
    expect(within(midLabel).getByText("132")).toBeInTheDocument();

    expect(within(aftLabel).getByText("AFT ZONE")).toBeInTheDocument();
    expect(within(aftLabel).getByText("ROWS 29 to 33")).toBeInTheDocument();
    expect(within(aftLabel).getByText("MAX PAX")).toBeInTheDocument();
    expect(within(aftLabel).getByText("30")).toBeInTheDocument();
  });
});
