import * as React from 'react'
import { useEffect } from 'react';
import cliffCabinImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';

function Ambijus() {
  useEffect(() => {
    scrollToTop()
   }, []);

    const cliffCabinPhotos = cliffCabinImagesArray.map((image: string) => {
        return (
         <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
            <img
              src={image}
              alt="cliff cabin photos"
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
        introTitle="Cliff Cabin" 
        introText="Cliff Cabin ble stiftet i 2017 av gründer, økologisk bonde og håndtverker Knut André Fiddan. 
        Trehyttene er prosjektert for å gå i ett med naturen, og er bygget av lokale materialer fra skogene på Fiddan. Konstruksjonen er tilpasset terreng og eksisterende trær, og alt er bygget etter skånsomme prinsipper uten moderne hjelpemidler. Alt er bevart så naturlig som mulig."
        introLinkText="Sjekk ut Cliff Cabin sin nettside her" 
        introLink="https://en-treetop.fiddan.no/cliff_cabin/"/>
        <div className="portfolioPhotos row" id="portfolioPhotosWrap" >
          {cliffCabinPhotos}
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Ambijus;