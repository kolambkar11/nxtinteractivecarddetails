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
const ProductDetails = ({ params }: Props) => {
  return (
    <>
      <h1>Products details of {params.productId}</h1>
    </>
  );
};

export default ProductDetails;
