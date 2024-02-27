import { SeatMap } from "./components/SeatMap/SeatMap";
import { Totals } from "./components/Totals/Totals";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SeatMapLabels } from "./components/SeatMapLabels/SeatMapLabels";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Footer } from "./components/Footer/Footer";
import { SeatMapProvider } from "./components/SeatMapProvider/SeatMapProvider";

export const App = () => {
  return (
    <SeatMapProvider>
      <Wrapper>
        <Header />
        <Wrapper isColumn>
          <SeatMap />
          <SeatMapLabels />
        </Wrapper>
        <Totals />
        <ControlPanel />
      </Wrapper>
      <Footer />
    </SeatMapProvider>
  );
};
