import TwoColumnSection from "../../../components/layout/TwoColumnSection";
import allMagazinesImg from "../../../img/magazine/kontakt-alle-optimized.jpg";

function MagazineIntro() {
  return (
    <TwoColumnSection
      wrapperClassName="magazine-intro-container container"
      imageSrc={allMagazinesImg}
      imageAlt="three KONTAKT magazines depicted"
      imageColClassName="col-lg-4 col-xl-6 magazine-image-container"
      imageClassName=""
      textColClassName="col-lg-8 col-xl-6 magazine-pitch-container"
    >
      <div>
        <h1 className="magazine-pitch">
          <span>KONTAKT </span>er et tidsskrift som har hovedforankring i analoge
          foto og har en ambisjon om å være et friskt tilskudd i skjæringspunktet
          mellom natur og kultur. Hver utgave har ulik tilnærming til disse temaene.
        </h1>
        <p>
          KONTAKT 02 og KONTAKT 03 kan kjøpes på Oslovelo. KONTAKT 03 kan også
          kjøpes på Kuro/F5. <br /> KONTAKT 04 er tilgjengelig hos Oslo foto, Små
          Spor, og også Kuro/F5.
        </p>
        <p className="contact-price">Pris 199,-</p>
        <small className="contact-shipping">
          Det blir lagt på 82,- for frakt med Helthjem ved bestilling.
        </small>
      </div>
    </TwoColumnSection>
  );
}

export default MagazineIntro;
