import { SeatMapLabels } from "./SeatMapLabels";

import { describe, it, expect } from "vitest";
import { within, render, screen } from "@testing-library/react";
import { planeMock } from "./SeatMapLabels_MockData";

describe("SeatMapLabels component", () => {
  it("renders seat map labels correctly", () => {
    render(<SeatMapLabels plane={planeMock} />);

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
