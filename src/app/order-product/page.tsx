"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log(router);
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button
        className="bg-green-400 text-emerald-950 p-2 rounded-2xl"
        onClick={handleClick}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderProduct;
