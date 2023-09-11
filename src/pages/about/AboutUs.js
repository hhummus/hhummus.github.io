import { Link } from "react-router-dom";
import aboutUsImg from "../../img/om-oss-mobile.jpg";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="container">
        <div className="row">
          <h1 className="aboutPageTitle">
            Vi er et oslobasert fotograf-firma som tar oppdrag for
            privatpersoner og bedrifter.
          </h1>
          <p className="aboutPageIntro">
            Vi har begge lang erfaring med fotografering både i analogt og
            digitalt format. Vi jobber primært i Oslo og omegn men kan også
            flytte oss dit du er.
          </p>
        </div>
        <div className="aboutPageImgContainer">
          <div className="row">
            <img
              src={aboutUsImg}
              alt="stine hasla and helena løkkeberg in nature"
            ></img>
          </div>
        </div>
        <small className="aboutPageImageText">
          Hasla-Løkkeberg Agentur ble grunnlagt i 2021 av Helena Løkkeberg og
          Stine Hasla.
        </small>
        <div className="row">
          <p className="getInTouch">
            <Link to="/kontakt-oss">
              Har du spørsmål? Kunne du tenkt deg en uforpliktende prat? Klikk
              her for å sende oss en e-post.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
