import * as React from 'react'
import { useEffect } from 'react';
import torungenImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';


function Torungen() {

 useEffect(() => {
  scrollToTop()
 }, []);

  const torungenPhotos = torungenImagesArray.map((image: string) => {
    return (
      <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
        <img
          src={image}
          alt="Torungen Design"
          className="portfolioImageWidth img-fluid"
        ></img>
      </div>
    );
  });

  return (
    <div>
        <Navbar />
        <HeaderComponent 
       pricesImage="portfolioHeaderImage"
       titlePricesHeader="Tidligere arbeid"
      />
      <div className="container portfolioIndividualContainer">
      <AboutIntroText 
      introTitle="Torungen" 
      introText="Torungen Design ble stiftet av Kaja Baust i 1995. Med sitt tidløse design, inspirasjon fra Sørlandets skjærgård og garn fra Rauma er hun stadig like populær hos både Husfliden og kunder fra hele Norden. "
     introLinkText="Se Torungen Design av Kaja Baust sin nettside her"  introLink="https://www.torungendesign.no/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{torungenPhotos}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Torungen;