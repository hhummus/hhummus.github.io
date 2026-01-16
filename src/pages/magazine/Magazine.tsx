import "../../css/magazine.css";
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/global/Footer';
import MagazineIntro from "./sections/MagazineIntro";
import MagazineGrid from "./sections/MagazineGrid";

function Magazine() {


  return (
    <div>
        <Navbar />
        <div className="container magazine-container">
            <MagazineIntro />
            <MagazineGrid />
        </div>
      <Footer />
    </div>
  )
}
export default Magazine
