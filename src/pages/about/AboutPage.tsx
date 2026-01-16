import "../../css/aboutPage.css";
import Footer from "../../components/global/Footer";
import Navbar from "../../components/navigation/Navbar";
import AboutIntro from "./sections/AboutIntro";
import SocialMediaLinks from "./sections/SocialMediaLinks";
import AboutArticle from "./sections/AboutArticle";

function AboutPage() {

  return (
    <div>
      <Navbar />
      <div className="aboutPage">
        <AboutIntro />
        <AboutArticle />
        <SocialMediaLinks />
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
