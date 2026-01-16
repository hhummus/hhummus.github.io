import { Link } from "react-router-dom";
import aboutUsImage from "../../../img/about/bli-kjent-2-optimized.jpg";
import TwoColumnSection from "../../../components/layout/TwoColumnSection";

function AboutIntro() {
  return (
    <TwoColumnSection
      wrapperClassName="aboutUs"
      imageSrc={aboutUsImage}
      imageAlt="Helena and Stine in front of mountains."
      imageColClassName="col-lg-4 col-xl-6 aboutUsImageContainer"
      imageClassName="aboutUsImage"
      textColClassName="col-lg-8 col-xl-6 aboutUsP"
    >
      <p>
        Hasla-Løkkeberg Agentur ble etablert i 2021 av Stine Hasla og Helena
        Løkkeberg. Helena har studert kunstfoto ved DTK og kan skilte med flere
        soloutstillinger, prosjekter og fotoboken «Challenging the view». Stine
        etablerte i 2018 «Hasla Foto» og har i en årrekke samarbeidet med ulike
        aktører innen mote, kunst og kultur.
      </p>
      <p>
        Hasla-Løkkeberg holder til på Holmen i Fredrikstad, men vi flytter oss
        gjerne dit kunden befinner seg.
      </p>
      <p>
        I 2021 bestemte vi oss for å skape tidsskriftet{" "}
        <Link to="/tidsskrift-kontakt" className="ctaInternal">
          KONTAKT
        </Link>{" "}
        og siden den gang har det kommet fire utgaver.
      </p>
    </TwoColumnSection>
  );
}

export default AboutIntro;
