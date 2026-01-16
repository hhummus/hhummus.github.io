import winebarMollaImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function Vinbaren() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://www.instagram.com/vinbaren.molla/"
            target="_blank"
            rel="noreferrer"
          >
            Besøk Vinbaren på mølla på Instagram her
          </a>
        )}
      >
        <h2>Vinbaren på mølla</h2>
        <p>Vinbaren på Mølla er stedet der du forveksler Kristiansand med København og kan nyte en lille på varme, late sommerdager. Et bredt utvalg naturvin på glass og flaske, deilig og enkel sommermat og en vibe resten av sommerNorge bare kan drømme om.</p>
      </MediaTextSection>
      <PhotoGrid
        images={winebarMollaImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default Vinbaren;
