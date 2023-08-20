import { useParams } from "react-router-dom"; //useParams to access the param from URL

function ProductDetails() {
  const params = useParams();
  return (
    <div>
      <p>{params.productId}</p>
    </div>
  );
}

export default ProductDetails;
