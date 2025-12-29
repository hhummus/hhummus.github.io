import * as React from 'react'
import { useEffect } from 'react';
import bergillImagesArray from './Images';
import Navbar from '../../../components/navigation/Navbar'
import HeaderComponent from '../../products/HeaderComp';
import AboutIntroText from '../AboutIntroText';
import Footer from '../../../components/global/Footer';
import scrollToTop from '../../../components/global/scrollToTop';

function Ambijus() {
  useEffect(() => {
    scrollToTop()
   }, []);


    const bergillPhotos = bergillImagesArray.map((image: string) => {
        return (
         <div className="portfolio-image-container col-sm-12 col-md-4 col-lg-3">
            <img
              src={image}
              alt="Bergill"
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
        introTitle="Bergill" 
        introText="Åshild Bergill Hagen, kjent under artistnavnet «Bergill» er låtskriver og vokalist fra Eiker. Sjangeren hun frekventerer er jazzpop og budskapet i låtene omhandler de små hverdagsøyeblikkene som føles store. I 2023 slapp hun debutalbumet «Si noe» og høstet gode kritikker fra både anmeldere og den gemene hop. "
        introLinkText="Besøk Bergill på Spotify her" 
        introLink="https://open.spotify.com/artist/71eBLTesFWVopfyOfCO7zx"/>
        <div className="portfolioPhotos row" id="portfolioPhotosWrap" >
          {bergillPhotos}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ambijus;