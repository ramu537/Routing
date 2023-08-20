import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetails /> }, //dynamic paths using ":"
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

//Notes:
//using createRoutesFromElements
// const routes = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const routesUsingElements = createBrowserRouter(routes)
