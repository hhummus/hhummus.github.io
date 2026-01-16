import { Link } from "react-router-dom";
import { arrayMagazines } from "../../../data/arrayMagazines";

function MagazineGrid() {
  const displayMagazines = arrayMagazines.map((magazine) => {
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
            <img src={magazine.image} alt="kontakt 01" className="img-fluid" />
          </div>
          <div className="magazine-p col-sm-6 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-12">
                <p className="magazine-about-p">{magazine.pitch}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {magazine.comingSoon && !magazine.soldOut ? (
              <div className="col-sm-6 col-md-12 col-lg-6 magazine-comingSoon">
                <p>Kommer snart</p>
              </div>
            ) : magazine.soldOut ? (
              <div className="col-lg-6 magazine-soldout">
                <small>Utsolgt</small>
              </div>
            ) : (
              <div className="col-lg-6 magazine-order">
                <Link to={`/kontakt-oss?subject=KONTAKT&issue=${magazine.issue}`}>
                  Bestill
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <div className="row magazine-books-container">{displayMagazines}</div>;
}

export default MagazineGrid;
