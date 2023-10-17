import * as React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../components/global/scrollToTop";

function ArticlePrices() {
  return (
    <div className="articlePrices">
      <div className="container">
        <h2 className="articleTitle">
          Hva koster det å bestille{" "}
          <span className="textSpan">fotografering av oss?</span>
        </h2>
        <div className="articleBtn btn-black btn-extra-margin">
          <Link 
          to="/prislister"
          onClick={scrollToTop}>
            Til prislister
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlePrices;