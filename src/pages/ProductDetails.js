import { useParams, Link } from "react-router-dom"; //useParams to access the param from URL

//goes back one step back as per the url Back if relative is set to path (By default it is route according to route definitions in app.js)
function ProductDetails() {
  const params = useParams();
  return (
    <div>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
}

export default ProductDetails;
