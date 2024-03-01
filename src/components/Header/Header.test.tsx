import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Header } from "./Header";
import styles from "../HexCode/HexCode.module.css";
import { LangToggle } from "../LangToggle/LangToggle";
import { Heading } from "../Heading/Heading";
import { HexCode } from "../HexCode/HexCode";
import { SeatMapContext } from "../../context/SeatMapContext";
import { mockValue } from "../../mockData/mockData";

describe("Header component", () => {
  it("renders without crashing", () => {
    render(
      <Header>
        <LangToggle />
        <Heading />
        <HexCode />
      </Header>,
      {
        wrapper: ({ children }) => (
          <SeatMapContext.Provider value={mockValue}>
            {children}
          </SeatMapContext.Provider>
        ),
      }
    );
  });

  it("has the correct CSS class", () => {
    render(
      <Header>
        <LangToggle />
        <Heading />
        <HexCode />
      </Header>,
      {
        wrapper: ({ children }) => (
          <SeatMapContext.Provider value={mockValue}>
            {children}
          </SeatMapContext.Provider>
        ),
      }
    );
    const hexCode = screen.getAllByTestId("code")[0];
    expect(hexCode).toHaveClass(`${styles.code}`);
  });

  it("renders Header with correct name and code", () => {
    render(
      <Header>
        <LangToggle />
        <Heading />
        <HexCode />
      </Header>,
      {
        wrapper: ({ children }) => (
          <SeatMapContext.Provider value={mockValue}>
            {children}
          </SeatMapContext.Provider>
        ),
      }
    );
    expect(screen.getByText(/Boeing 737-800/i)).toBeInTheDocument();
    expect(screen.getByText(/#777/i)).toBeInTheDocument();
  });
});
