import cliffCabinImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function CliffCabin() {
  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://en-treetop.fiddan.no/cliff_cabin/"
            target="_blank"
            rel="noreferrer"
          >
            Sjekk ut Cliff Cabin sin nettside her
          </a>
        )}
      >
        <h2>Cliff Cabin</h2>
        <p>Cliff Cabin ble stiftet i 2017 av gründer, økologisk bonde og håndtverker Knut André Fiddan. Trehyttene er prosjektert for å gå i ett med naturen, og er bygget av lokale materialer fra skogene på Fiddan. Konstruksjonen er tilpasset terreng og eksisterende trær, og alt er bygget etter skånsomme prinsipper uten moderne hjelpemidler. Alt er bevart så naturlig som mulig.</p>
      </MediaTextSection>
      <PhotoGrid
        images={cliffCabinImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default CliffCabin;
