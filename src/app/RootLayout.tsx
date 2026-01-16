import { Outlet } from "react-router-dom";
import ScrollToTopOnRoute from "../components/global/ScrollToTopOnRoute";

function RootLayout() {
  return (
    <>
      <ScrollToTopOnRoute />
      <Outlet />
    </>
  );
}

export default RootLayout;
