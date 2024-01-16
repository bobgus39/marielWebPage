import React from "react";

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
      <img className="whatsapp" src="../../img/whatsapp.png" alt="whatsapp" />
    </button>
  );
};

export default WhatsappButton;
