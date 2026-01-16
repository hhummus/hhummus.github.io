import PhotoGrid from "../../../components/layout/PhotoGrid";
import { socialMediaPhotos } from "../../../data/aboutSocialImages";

function SocialPhotoGrid() {
  return (
    <PhotoGrid
      images={socialMediaPhotos}
      gridClassName="photographsDaily row"
      gridId="photographsDailyWrap"
      itemClassName="social-image-container col-4 col-md-3 col-lg-3"
      imageClassName="socialImageWidth img-fluid"
      imageAlt="social media photos"
    />
  );
}

export default SocialPhotoGrid;
