import * as React from "react";
import { useEffect } from "react";
import "../../css/prices.css";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/global/Footer";
import HeaderComponent from "./HeaderComp";
import Products from "./Products";
import scrollToTop from "../../components/global/scrollToTop";

function Prices() {

  useEffect(() => {
    scrollToTop()
   }, []);

  return (
    <div>
      <Navbar />
      <HeaderComponent
        pricesImage="pricesHeaderImage"
        titlePricesHeader="Priser"
      />
      <Products />
      <Footer />
    </div>
  );
}
export default Prices;
