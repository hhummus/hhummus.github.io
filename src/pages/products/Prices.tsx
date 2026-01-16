import "../../css/prices.css";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/global/Footer";
import HeaderComponent from "./HeaderComp";
import Products from "./Products";

function Prices() {


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
