import wilderImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function WilderKitchen() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://www.hawkes.work/about"
            target="_blank"
            rel="noreferrer"
          >
            Besøk Wilder Kitchen av Rebecca Hawkes sin nettside her
          </a>
        )}
      >
        <h2>Wilder Kitchen</h2>
        <p>Kokk, fotograf og kunster Rebecca Hawkes startet opp det idealistiske konseptet Wilder Kitchen i 2021. Med fokus på sesongbaserte råvarer og det hun finner i naturen lager hun hver fjerde søndag spennende, veganske måltider på Losæter i Oslo. Hver enkelt betaler selv det man føler man har råd til og alle er velkommne. På denne måten får hun samlet mennesker fra alle lag til et felles måltid. Snakk om fantastisk dame!</p>
      </MediaTextSection>
      <PhotoGrid
        images={wilderImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default WilderKitchen;
