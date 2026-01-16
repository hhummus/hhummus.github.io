import torungenImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";


function Torungen() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://www.torungendesign.no/"
            target="_blank"
            rel="noreferrer"
          >
            Se Torungen Design av Kaja Baust sin nettside her
          </a>
        )}
      >
        <h2>Torungen</h2>
        <p>Torungen Design ble stiftet av Kaja Baust i 1995. Med sitt tidløse design, inspirasjon fra Sørlandets skjærgård og garn fra Rauma er hun stadig like populær hos både Husfliden og kunder fra hele Norden.</p>
      </MediaTextSection>
      <PhotoGrid
        images={torungenImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default Torungen;
