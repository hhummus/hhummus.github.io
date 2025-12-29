import * as React from 'react'
import { useEffect } from 'react';
import winebarMollaImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';

function NewMovements() {

  useEffect(() => {
    scrollToTop()
   }, []);

    const winebarMollaPhotos = winebarMollaImagesArray.map((image: string) => {
        return (
         <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
            <img
              src={image}
              alt="vinbaren på mølla"
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
      introTitle="Vinbaren på mølla" 
      introText="Vinbaren på Mølla er stedet der du forveksler Kristiansand med København og kan nyte en lille på varme, late sommerdager. Et bredt utvalg naturvin på glass og flaske, deilig og enkel sommermat og en vibe resten av sommerNorge bare kan drømme om.  "
     introLinkText="Besøk Vinbaren på mølla på Instagram her" introLink="https://www.instagram.com/vinbaren.molla/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{winebarMollaPhotos}</div>
      </div>
      <Footer />
    </div>
    
  )
}

export default NewMovements