import sovesveisImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";


function Sovesveis() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://www.znippen.no/om-sovesveis"
            target="_blank"
            rel="noreferrer"
          >
            Se Sovesveis av Ola G Snippen sin nettbutikk her
          </a>
        )}
      >
        <h2>Sovesveis</h2>
        <p>OIa G. Snippen bor på et lite småbruk i Telemark, kalt Lykka. Der jobber han med foto, kunst og tekstil-håndverk. Våren 2023 fullførte han sin bachelor i Kunst, design og handverk ved Høgskulen i Volda, der oppgaven hans handlet om hvordan å se «det magiske i naturen» Kjærligheten for natur og bærekraft resulterte i merket Sovesveis.</p>
      </MediaTextSection>
      <PhotoGrid
        images={sovesveisImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default Sovesveis;
