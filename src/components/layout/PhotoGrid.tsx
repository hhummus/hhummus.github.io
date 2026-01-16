type PhotoGridProps = {
  images: string[];
  gridClassName: string;
  gridId?: string;
  itemClassName: string;
  imageClassName: string;
  imageAlt: string;
};

function PhotoGrid({
  images,
  gridClassName,
  gridId,
  itemClassName,
  imageClassName,
  imageAlt,
}: PhotoGridProps) {
  return (
    <div className={gridClassName} id={gridId}>
      {images.map((image) => {
        return (
          <div className={itemClassName} key={image}>
            <img src={image} alt={imageAlt} className={imageClassName} />
          </div>
        );
      })}
    </div>
  );
}

export default PhotoGrid;
