import React from "react";
import "./Information.scss";
import { Col, Grid, Row } from "antd";
const { useBreakpoint } = Grid;

interface IInformation {}

const Information: React.FC<IInformation> = () => {
  const useBreakPoint = useBreakpoint();
  const isMobile = useBreakPoint.xs;
  const handleClickAddress = () => {
    window.open("https://maps.app.goo.gl/XPh8nCXTS2dUzybz6", "_blank");
  };

  return (
    <div className={`Information ${isMobile ? "mobile" : ""}`}>
      <Row gutter={[16, 16]}>
        <Col span={isMobile ? 24 : 12} style={{ paddingInline: 0 }}>
          <div className="info-box">
            <div className="location-info">
              <div className="place-name font-secondary">
                University of Science - VNUHCM
              </div>
              <br />
              <div
                className="address-line "
                onClick={handleClickAddress}
                style={{ textDecoration: "underline" }}
              >
                227 Nguyen Van Cu Street, Cho Quan Ward, HCMC
              </div>
            </div>
          </div>
        </Col>
        <Col span={isMobile ? 24 : 12} style={{ paddingInline: 0 }}>
          <div className="info-box" style={{ marginTop: isMobile ? -100 : 0 }}>
            <div className="datetime-info font-secondary">
              <div className="date">Saturday, December 20, 2025</div>
              <div className="time">10:30 AM - 12:00 PM</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
