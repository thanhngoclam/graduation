import React from "react";
import "./Hero.scss";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

interface IHero {}

const Hero: React.FC<IHero> = () => {
  const useBreakPoint = useBreakpoint();
  const isMobile = useBreakPoint.xs;
  return (
    <div className={`Hero ${isMobile && "mobile"}`}>
      <div className="title-group">
        <div className="invitation-label">Sincerely Invites Y'all To</div>
        <div className="name-label font-secondary">LAMTHANHNGOC's</div>
        <div className="graduation-label font-tertiary">Graduation</div>
      </div>
    </div>
  );
};

export default Hero;
