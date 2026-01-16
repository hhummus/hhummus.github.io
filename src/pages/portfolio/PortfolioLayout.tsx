import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import HeaderComponent from "../products/HeaderComp";
import Footer from "../../components/global/Footer";

function PortfolioLayout() {
  return (
    <div>
      <Navbar />
      <HeaderComponent
        pricesImage="portfolioHeaderImage"
        titlePricesHeader="Tidligere arbeid"
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PortfolioLayout;
