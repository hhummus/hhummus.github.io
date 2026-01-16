import "../../css/airbnb.css";
import { Link } from 'react-router-dom';
import AirBnbImagesArray from './Images';
import Navbar from '../../components/navigation/Navbar'
import Footer from '../../components/global/Footer';

function Ambijus() {

  const airBnbPhotos = AirBnbImagesArray.map((image: string) => {
    return (
        <div className="social-image-container col-4 col-md-3 col-lg-3 ">
           <img
             src={image}
             alt="social media photos"
             className="socialImageWidth img-fluid"
           ></img>
       </div>
       );
     });

  return (
    <div>
        <Navbar />
        <div className="container portfolioIndividualContainer">
            <div className="airbnb-container">
            <h1 className="airbnb-title">Boligfotografering</h1>
            <p className="airbnb-p">Skal du leie ut leiligheten, hytta eller ferieboligen din på airbnb eller lignende markedsplasser? <span className="span-block">Da kan det fort lønne seg å ha fine, stemningsfylte bilder. </span>Vi tar dem gjerne!  
            </p>
            </div>
            <Link to="/kontakt-oss" className="airbnb-contact-us">Kontakt oss her for en uforpliktende prat.</Link>
            <div className="portfolioPhotos row" id="portfolioPhotosWrap" >{airBnbPhotos}</div>
        </div>
        <Footer />
    </div> 
  );
};
export default Ambijus;
