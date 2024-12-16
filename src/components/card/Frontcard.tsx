import Image from "next/image";
import React from "react";
import frontCard from "../../assets/images/bg-card-front.png";

const Frontcard = () => {
  return (
    <>
      <Image src={frontCard} alt="front card" />
    </>
  );
};

export default Frontcard;
