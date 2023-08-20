import { Link } from "react-router-dom";

function ProductsPage() {
  const PRODUCTS = [
    { id: "p1", title: "Prod1" },
    { id: "p2", title: "Prod2" },
    { id: "p3", title: "Prod3" },
  ];

  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li>
              <Link to={product.id}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsPage;
