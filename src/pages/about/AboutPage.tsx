import * as React from "react";
import { useEffect } from "react";
import "../../css/aboutPage.css";
import Footer from "../../components/global/Footer";
import Navbar from "../../components/navigation/Navbar";
import AboutUs from "./AboutUs";
import SocialMediaLinks from "./SocialMediaAbout";
import ArticleTwo from "./ArticleTwo";
import scrollToTop from "../../components/global/scrollToTop";

function AboutPage() {
  useEffect(() => {
    scrollToTop()
   }, []);

  return (
    <div>
      <Navbar />
      <div className="aboutPage">
        <AboutUs />
        <ArticleTwo />
        <SocialMediaLinks />
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
