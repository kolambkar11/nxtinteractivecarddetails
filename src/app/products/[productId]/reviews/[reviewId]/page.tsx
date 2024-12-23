import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetaData = ({ params }: Props): Metadata => {
  return {
    title: `Product${params.productId}`,
  };
};

const page = ({
  params,
}: {
  params: {
    productId: number;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div className="p-3">
      <h1>Product</h1>
      <p>{params.productId}</p>

      <h1>Review</h1>
      <p>{params.reviewId}</p>
    </div>
  );
};

export default page;
