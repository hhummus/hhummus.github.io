import ambijusImagesArray from './Images';
import MediaTextSection from '../../../components/layout/MediaTextSection';
import PhotoGrid from "../../../components/layout/PhotoGrid";

function Ambijus() {

  return (
    <div className="container portfolioIndividualContainer">
      <MediaTextSection
        wrapperClassName="aboutIntroText"
        containerClassName=""
        textClassName="col"
        link={(
          <a
            className="visitCta"
            href="https://www.ambijus.com/"
            target="_blank"
            rel="noreferrer"
          >
            Besøk Ambijus sin nettbutikk her
          </a>
        )}
      >
        <h2>Ambijus</h2>
        <p>Ambijus ble grunnlagt av Christian & Alexander, to brødre som fra ung alder av har vært inspirert av naturen i hjemlandet Norge. I 2015 la de ut på et eventyr for å lansere Norges første premium alkoholfrie drikkedistributør, LESKE. I løpet av denne prosessen fikk de møte inspirerende nordiske kokker og sommelierer. De begynte å forstå at det manglet alkoholfrie alternativer til vin, og de satte seg fore å redefinere kategorien. Resultatet ble Ambijus.</p>
      </MediaTextSection>
      <PhotoGrid
        images={ambijusImagesArray}
        gridClassName="portfolioPhotos row"
        gridId="portfolioPhotosWrap"
        itemClassName="portfolio-image-container col-sm-12 col-md-4 col-lg-3"
        imageClassName="portfolioImageWidth img-fluid"
        imageAlt="portfolio photos"
      />
    </div>
  );
}

export default Ambijus;
