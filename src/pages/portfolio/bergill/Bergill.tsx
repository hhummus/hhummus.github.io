import bergillImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function Bergill() {
  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://open.spotify.com/artist/71eBLTesFWVopfyOfCO7zx"
            target="_blank"
            rel="noreferrer"
          >
            Besøk Bergill på Spotify her
          </a>
        )}
      >
        <h2>Bergill</h2>
        <p>Åshild Bergill Hagen, kjent under artistnavnet «Bergill» er låtskriver og vokalist fra Eiker. Sjangeren hun frekventerer er jazzpop og budskapet i låtene omhandler de små hverdagsøyeblikkene som føles store. I 2023 slapp hun debutalbumet «Si noe» og høstet gode kritikker fra både anmeldere og den gemene hop.</p>
      </MediaTextSection>
      <PhotoGrid
        images={bergillImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default Bergill;
