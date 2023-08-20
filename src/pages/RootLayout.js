import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

//Example of fragaments is also present fragments jus wraps the react elements
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
