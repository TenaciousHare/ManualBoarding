import { SeatMap } from "./components/SeatMap/SeatMap";
import { Totals } from "./components/Totals/Totals";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { SelectPlane } from "./components/SelectPlane/SelectPlane";
import { SeatMapLabels } from "./components/SeatMapLabels/SeatMapLabels";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Footer } from "./components/Footer/Footer";
import { SeatMapProvider } from "./components/SeatMapProvider/SeatMapProvider";
import { HexCode } from "./components/HexCode/HexCode";
import { LangToggle } from "./components/LangToggle/LangToggle";
import { Heading } from "./components/Heading/Heading";

export const App = () => {
  return (
    <SeatMapProvider>
      <Wrapper>
        <Header>
          <HexCode />
          <LangToggle />
          <Heading />
        </Header>
        <Wrapper isColumn>
          <SeatMap />
          <SeatMapLabels />
        </Wrapper>
        <Totals />
        <ControlPanel>
          <SelectPlane />
          <ButtonGroup />
        </ControlPanel>
      </Wrapper>
      <Footer />
    </SeatMapProvider>
  );
};
