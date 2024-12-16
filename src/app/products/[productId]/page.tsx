import React from "react";

const page = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return (
    <>
      <h1>Products details of {params.productId}</h1>
    </>
  );
};

export default page;
