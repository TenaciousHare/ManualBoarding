import React, { ChangeEvent } from "react";

export interface Plane {
  name: string;
  type: string;
  seq: number;
  rows: number[];
  evacuationRow: string[];
  evacuationRowColored: string[];
  notExistingSeats: string[];
  notExisitingRows: number;
  totalRows: string[];
  totalLabels: { zone: string }[];
  zones: {
    zone1Start: number;
    zone1End: number;
    zone2Start: number;
    zone2End: number;
    zone3Start: number;
    zone3End: number;
  };
  maxPaxPerZone: {
    zone1: number;
    zone2: number;
    zone3: number;
  };
}

export interface SeatValue {
  value: string;
  seat: string;
  seatType: string;
  paxType: string;
  evacuationRow: boolean;
  evacuationRowColored: boolean;
}

export interface Zone {
  adults: number;
  children: number;
  infants: number;
}

// Components props interfaces
export interface ControlPanelProps {
  onPrint: () => void;
  onClearSeatMap: () => void;
  onGenerate: () => void;
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  onCountTotals: () => void;
}

export interface HeaderProps {
  name: string;
  code: string;
}

export interface RowProps {
  row: number;
  index: number;
  seatsValues: SeatValue[];
}

export interface SeatProps {
  id: number;
  seatValue?: SeatValue;
}

export interface SeatMapLabelsProps {
  plane: {
    zones: {
      zone1Start: number;
      zone1End: number;
      zone2Start: number;
      zone2End: number;
      zone3Start: number;
      zone3End: number;
    };
    maxPaxPerZone: {
      zone1: number;
      zone2: number;
      zone3: number;
    };
  };
}

export interface TotalsProps {
  plane: {
    totalRows: string[];
    totalLabels: { zone: string }[];
  };
  totals: {
    adults?: number;
    children?: number;
    infants?: number;
  }[];
}

export interface WrapperProps {
  children: React.ReactNode;
  isColumn?: boolean;
}
