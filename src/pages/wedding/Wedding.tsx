import * as React from 'react'
import { useEffect } from 'react';
import Navbar from '../../components/navigation/Navbar'
import "../../css/wedding.css";
import scrollToTop from '../../components/global/scrollToTop';
import weddingImagesArray from './Images';
import WeddingText from './WeddingText';
import Footer from '../../components/global/Footer';

function Wedding() {
 useEffect(() => {
  scrollToTop()
 }, []);

  const weddingPhotos = weddingImagesArray.map((image: string) => {
    return (
      <div className="wedding-image-container col-sm-12 col-md-4 col-lg-2">
        <img
          src={image}
          alt="Bryllupsbilder"
          className="weddingImageWidth img-fluid"
        ></img>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="container weddingContainer">
        <div className="row">
          <WeddingText />
        </div>
        <div className="weddingPhotos row" id="weddingPhotosWrap">
          {weddingPhotos}
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Wedding