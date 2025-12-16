import React from "react";
import "./LandingPage.scss";
import Hero from "../../containers/Hero/Hero";
import Contact from "../../containers/Contact/Contact";
import Information from "../../containers/Information/Information";
import ParkingTip from "../../containers/ParkingTip/ParkingTip";
import Thanks from "../../containers/Thanks/Thanks";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

interface ILandingPage {}

const LandingPage: React.FC<ILandingPage> = () => {
  const useBreakPoint = useBreakpoint();
  const isMobile = useBreakPoint.xs;
  
  return (
    <div className={`LandingPage ${isMobile && "mobile"}`}>
      <Hero />
      <Contact />
      <Information />
      <ParkingTip />
      <Thanks />
      <div className="credit">
        <div className="credit-label">@2025 - lamthanhngoc&trieunhatminh</div>
      </div>
    </div>
  );
};

export default LandingPage;
