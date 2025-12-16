import React from "react";
import "./Thanks.scss";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

interface IThanks {}

const Thanks: React.FC<IThanks> = () => {
  const useBreakPoint = useBreakpoint();
  const isMobile = useBreakPoint.xs;

  return (
    <div className={`Thanks ${isMobile ? "mobile" : ""}`}>
      <div className="title-group">
        <div className="graduation-label font-tertiary">See ya</div>
        <div className="name-label font-secondary">
          I'm looking forward to our best memories ^^
        </div>
      </div>
    </div>
  );
};

export default Thanks;
