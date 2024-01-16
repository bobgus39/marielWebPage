import React from "react";
import Whatsapp from "../../img/whatsapp.png";
const WhatsappButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <button className="btn" onClick={handleClick}>
      {" "}
      <img className="whatsapp" src={Whatsapp} alt="whatsapp" />
    </button>
  );
};

export default WhatsappButton;
