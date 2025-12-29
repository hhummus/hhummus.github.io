import * as React from 'react'
import { useEffect } from 'react';
import wilderImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';

function WilderKitchen() {

 useEffect(() => {
  scrollToTop()
 }, []);

  const wkPhotos = wilderImagesArray.map((image: string) => {
    return (
      <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
        <img
          src={image}
          alt="Wilder Kitchen"
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
      introTitle="Wilder Kitchen" 
      introText="Kokk, fotograf og kunster Rebecca Hawkes startet opp det idealistiske konseptet Wilder Kitchen i 2021. Med fokus på sesongbaserte råvarer og det hun finner i naturen lager hun hver fjerde søndag spennende, veganske måltider på Losæter i Oslo. Hver enkelt betaler selv det man føler man har råd til og alle er velkommne. På denne måten får hun samlet mennesker fra alle lag til et felles måltid. Snakk om fantastisk dame!"
     introLinkText="Besøk Wilder Kitchen av Rebecca Hawkes sin nettside her"  introLink="https://www.hawkes.work/about"/>
      <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{wkPhotos}</div>
      </div>
      <Footer />
    </div>
    
  )
}

export default WilderKitchen;