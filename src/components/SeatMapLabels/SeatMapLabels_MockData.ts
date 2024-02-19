interface PlaneMock {
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

export const planeMock: PlaneMock = {
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
