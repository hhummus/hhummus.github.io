import  * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/magazine.css";
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/global/Footer';
import arrayMagazines from './ArrayMagazine';
import scrollToTop from '../../components/global/scrollToTop';
import allMagazinesImg from "../../img/magazine/kontakt-alle-optimized.jpg";

function Magazine() {

// setting types to be expected from magazines array
interface itemObjects {
    title: string,
    subTitle: string,
    id: number,
    pitch: string,
    image: string,
    soldOut: boolean,
    comingSoon: boolean

  };
    
const displayMagazines = arrayMagazines.map((magazine:itemObjects) => {
    return (
    <div className="col-md-6 eachMagazine" key={magazine.id}>
        <div className="magazine-title-container row">
                <div className="col-12">
                    <h2 className="magazine-h2">{magazine.title}</h2>
                    <small className="magazine-sm">{magazine.subTitle}</small>
                </div>
        </div>
        <div className="row">
            <div className="magazine-image col-sm-6 col-md-12 col-lg-6">
                <img src={magazine.image} alt="kontakt 01" className="img-fluid"></img>
            </div>                    
            <div className="magazine-p col-sm-6 col-md-12 col-lg-6">
                <div className="row">
                    <div className="col-12">
                        <p className="magazine-about-p">
                        {magazine.pitch}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
            {
                magazine.comingSoon && !magazine.soldOut ? 
                <div className="col-sm-6 col-md-12 col-lg-6 magazine-comingSoon"><p>Kommer snart</p></div>  :
                magazine.soldOut ? <div className="col-lg-6 magazine-soldout"><small>Utsolgt</small></div> :
                <div className="col-lg-6 magazine-order"><Link to="/kontakt-oss">Bestill</Link></div>
            }
            </div>
        </div>
    </div>    
    );
  });


    useEffect(() => {
        scrollToTop()
       }, []);

  return (
    <div>
        <Navbar />
        <div className="container magazine-container">
            <div className="magazine-intro-container container">
                <div className="row">
                   
                        <div className="col-lg-4 col-xl-6 magazine-image-container">
                            <img src={allMagazinesImg} alt="three KONTAKT magazines depicted"></img>
                        </div>
                        <div className="col-lg-8 col-xl-6 magazine-pitch-container">
                            <div>
                        <h1 className="magazine-pitch"><span>KONTAKT </span>er et tidsskrift som har hovedforankring i analoge foto og har en ambisjon om å være et friskt tilskudd i skjæringspunktet mellom natur og kultur. Hver utgave har ulik tilnærming til disse temaene.</h1>
                        <p> KONTAKT 02 og KONTAKT 03 kan kjøpes på Oslovelo. KONTAKT 03 kan også kjøpes på Kuro/F5. <br/> KONTAKT 04 er tilgjengelig hos Oslo foto, Små Spor, og også Kuro/F5. 
                        </p>
                        <p className="contact-price">Pris 199,-</p>
                        <small className="contact-shipping">Det blir lagt på 82,- for frakt med Helthjem ved bestilling.</small>
                        </div>
                           
                        </div>
                       
                
                </div>
            </div>
            
            <div className="row magazine-books-container">
                {displayMagazines}
            </div>
        </div>
      <Footer />
    </div>
  )
}
export default Magazine