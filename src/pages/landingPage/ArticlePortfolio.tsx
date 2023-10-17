import * as React from "react";
import { Link } from "react-router-dom";
import portfolioImage from "../../img/portfolio-intro-image.JPG";
import scrollToTop from "../../components/global/scrollToTop";

function ArticlePortfolio() {
  return (
    <div className="articleContainer">
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-sm-7 col-no-padding">
            <div className="articleContainerText blue">
              <h3 className="articleTitle">Tidligere arbeid</h3>
              <p className="articleP">
                Vi tar oppdrag for blant annet bedrifter, privatpersoner,
                eventer, bryllup og nyfødt fotografering.
              </p>
              <div className="articleBtn btn-white">
                <Link 
                to="/tidligere-arbeid"
                onClick={scrollToTop}>
                  Ta en titt
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-5 portfolioImgContainer col-no-padding">
            <div className="divForImage">
              <img src={portfolioImage} alt="something" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePortfolio;