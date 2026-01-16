import "../../../css/portfolioPages.css"
import kokImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function Kok() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://koknorge.no/"
            target="_blank"
            rel="noreferrer"
          >
            Besøk KOK sin nettside her
          </a>
        )}
      >
        <h2>KOK</h2>
        <p>KOK Norge AS ble stiftet av Kristin Lorange i 2017. Siden den gang har KOK eskapendert både i innbyggernes interesse og antall og drifter i dag 9 badstuer i Oslo.</p>
      </MediaTextSection>
      <PhotoGrid
        images={kokImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default Kok;
