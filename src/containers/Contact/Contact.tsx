import React from "react";
import "./Contact.scss";
import FBIcon from "../../assets/fb.svg";
import { Grid, Image } from "antd";
const { useBreakpoint } = Grid;
import sweet from "../../assets/background_contact.jpg";

interface IContact {}

const Contact: React.FC<IContact> = () => {
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/lamthanhngoc713", "_blank");
  };

  const useBreakPoint = useBreakpoint();
  const isMobile = useBreakPoint.xs;

  return (
    <div className={`Contact ${isMobile && "mobile"}`}>
      <div className="image">
        <Image
          src={sweet}
          preview={false}
          className="sweet"
          width={isMobile ? 350 : 600}
        />
      </div>
      <div className="contact-content">
        Halluuu, I'm Thanh Ngoc Lam 🙋‍♀️ <br />
        <br />I am about to complete my 4-year miracle journey and that would be
        one of the best milestone I have ever achieved in my life. 🎓 <br />
        <br />
        To be honest, this journey has not been easy at all and I would never be
        here without all the support from you - my beloved ones 💖
        <br /> <br />
        Thus, I would be extremely honored and grateful if you could join me at
        my graduation ceremony to celebrate this special occasion with me. 🎉{" "}
        <br /> <br />
        For your best experience, please contact me via:
        <br /> <br />
        <div className="contact-info">
          <div className="phone">📞 (+84) 945 820 509</div>
          <div className="fb" onClick={handleFacebookClick}>
            <Image
              src={FBIcon}
              preview={false}
              className="fb-icon"
              width={20}
            />{" "}
            Lâm Thanh Ngọc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
