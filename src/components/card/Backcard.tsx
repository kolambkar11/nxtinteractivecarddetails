import React from "react";
import statiCard from "../../assets/images/bg-card-back.png";
import Image from "next/image";

const Backcard = () => {
  return (
    <>
      <Image src={statiCard} width={500} height={500} alt="back card" />
    </>
  );
};

export default Backcard;
