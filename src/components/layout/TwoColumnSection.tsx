import { ReactNode } from "react";

type ArticleSectionProps = {
  wrapperClassName: string;
  imageSrc: string;
  imageAlt: string;
  imageColClassName: string;
  imageClassName: string;
  textColClassName: string;
  children: ReactNode;
};

function TwoColumnSection({
  wrapperClassName,
  imageSrc,
  imageAlt,
  imageColClassName,
  imageClassName,
  textColClassName,
  children,
}: ArticleSectionProps) {
  return (
    <div className={wrapperClassName}>
      <div className="container">
        <div className="row">
          <div className={imageColClassName}>
            <img src={imageSrc} alt={imageAlt} className={imageClassName} />
          </div>
          <div className={textColClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnSection;
