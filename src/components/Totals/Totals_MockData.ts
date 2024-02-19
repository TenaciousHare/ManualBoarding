import { Zones } from "../../hooks/useCountZones/useCountZones";

export const planeMock = {
  totalRows: ["rows 1-5", "rows 6-28", "rows 29-33", ""],
  totalLabels: [
    { zone: "ZONE 1" },
    { zone: "ZONE 2" },
    { zone: "ZONE 3" },
    { zone: "TOTAL" },
  ],
};
export const totalsMock: Zones = {
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

export const zeroTotalsMock = {
  zone1: { adults: 0, children: 0, infants: 0 },
  zone2: { adults: 0, children: 0, infants: 0 },
  zone3: { adults: 0, children: 0, infants: 0 },
  zone4: { adults: 0, children: 0, infants: 0 },
};
