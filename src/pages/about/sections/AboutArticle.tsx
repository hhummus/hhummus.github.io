import MediaTextSection from "../../../components/layout/MediaTextSection";
import SocialPhotoGrid from "./SocialPhotoGrid";

function AboutArticle() {
  return (
    <MediaTextSection
      wrapperClassName="articleTwo"
      textClassName="col"
    >
      <h1 className="articleTwoTitle">
        Bli bedre kjent med oss gjennom fotografier fra dagliglivet.
      </h1>
      <p className="articleTwoP">Kanskje litt utradisjonelt? Vi liker det sånn.</p>
      <SocialPhotoGrid />
      <p className="articleTwoSmallP">
        Vi liker også kjærlighet for alle. Bærekraft. Norske råvarer. Oransje-vin.
        Bøker. Stine liker krim, Helena digger sci-fi.
      </p>
    </MediaTextSection>
  );
}

export default AboutArticle;
