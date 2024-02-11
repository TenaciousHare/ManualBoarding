// Importuj komponent, który chcesz przetestować
import { SeatMapLabels } from "./SeatMapLabels";
// Importuj biblioteki testowe
import { describe, it, expect } from "vitest";
import { within, render, screen } from "@testing-library/react";

// Definiuj dane testowe
const plane = {
  zones: {
    zone1Start: 1,
    zone1End: 10,
    zone2Start: 11,
    zone2End: 20,
    zone3Start: 21,
    zone3End: 30,
  },
  maxPaxPerZone: {
    zone1: 50,
    zone2: 40,
    zone3: 30,
  },
};
describe("SeatMapLabels component", () => {
  it("renders seat map labels correctly", () => {
    render(<SeatMapLabels plane={plane} />);

    const labels = screen.getAllByRole("listitem");

    expect(labels).toHaveLength(3);

    const [fwdLabel, midLabel, aftLabel] = labels;

    expect(within(fwdLabel).getByText("FWD ZONE")).toBeInTheDocument();
    expect(within(fwdLabel).getByText("ROWS 1 to 10")).toBeInTheDocument();
    expect(within(fwdLabel).getByText("MAX PAX")).toBeInTheDocument();
    expect(within(fwdLabel).getByText("50")).toBeInTheDocument();

    expect(within(midLabel).getByText("MID ZONE")).toBeInTheDocument();
    expect(within(midLabel).getByText("ROWS 11 to 20")).toBeInTheDocument();
    expect(within(midLabel).getByText("MAX PAX")).toBeInTheDocument();
    expect(within(midLabel).getByText("40")).toBeInTheDocument();

    expect(within(aftLabel).getByText("AFT ZONE")).toBeInTheDocument();
    expect(within(aftLabel).getByText("ROWS 21 to 30")).toBeInTheDocument();
    expect(within(aftLabel).getByText("MAX PAX")).toBeInTheDocument();
    expect(within(aftLabel).getByText("30")).toBeInTheDocument();
  });
});
