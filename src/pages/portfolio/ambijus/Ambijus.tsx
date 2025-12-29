import * as React from 'react'
import { useEffect } from 'react';
import ambijusImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';

function Ambijus() {
 useEffect(() => {
  scrollToTop()
 }, []);

  const ambijusPhotos = ambijusImagesArray.map((image: string) => {
    return (
      <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
        <img
          src={image}
          alt="kok photos"
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
      introTitle="Ambijus" 
      introText="Ambijus ble grunnlagt av Christian & Alexander, to brødre som fra ung alder av har vært inspirert av naturen i hjemlandet Norge. I 2015 la de ut på et eventyr for å lansere Norges første premium alkoholfrie drikkedistributør, LESKE.
      I løpet av denne prosessen fikk de møte inspirerende nordiske kokker og sommelierer. De begynte å forstå at det manglet alkoholfrie alternativer til vin, og de satte seg fore å redefinere kategorien.
      Resultatet ble Ambijus."
     introLinkText="Besøk Ambijus sin nettbutikk her" introLink="https://www.ambijus.com/"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{ambijusPhotos}</div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Ambijus;