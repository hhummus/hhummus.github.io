import nmImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function NewMovements() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://newmovements.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sjekk ut New Movements nettbutikk her
          </a>
        )}
      >
        <h2>New Movements</h2>
        <p>New Movements så dagens lys i 2018 og ble stiftet av Martin Evensen. New Movements visjon er å gjøre den forbrukerorienterte gatemoten mer miljøvennlig. Skoene er unisexmodeller og har lisser av resirkulerte plastflasker, en gummisåle som er kombinasjon av resirkulert og ny gummi, samt skinn fra et miljøsertifisert italiensk garveri.</p>
      </MediaTextSection>
      <PhotoGrid
        images={nmImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default NewMovements;
