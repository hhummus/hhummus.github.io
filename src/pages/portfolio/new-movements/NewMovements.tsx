import * as React from 'react'
import { useEffect } from 'react';
import nmImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';

function NewMovements() {
  
  useEffect(() => {
    scrollToTop()
   }, []);

    const nmPhotos = nmImagesArray.map((image: string) => {
        return (
         <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
            <img
              src={image}
              alt="new movements photos"
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
      introTitle="New Movements" 
      introText="New Movements så dagens lys i 2018 og ble stiftet av Martin Evensen. New Movements visjon er å gjøre den forbrukerorienterte gatemoten mer miljøvennlig. 
      Skoene er unisexmodeller og har lisser av resirkulerte plastflasker, en gummisåle som er kombinasjon av resirkulert og ny gummi, samt skinn fra et miljøsertifisert italiensk garveri."
     introLinkText="Sjekk ut New Movements nettbutikk her" introLink="https://newmovements.com/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{nmPhotos}</div>
      </div>
      <Footer />
    </div>
    
  )
}

export default NewMovements