import { ReactNode } from "react";

type MediaTextSectionProps = {
  wrapperClassName: string;
  mediaClassName?: string;
  textClassName: string;
  media?: ReactNode;
  children: ReactNode;
  link?: ReactNode;
  containerClassName?: string;
};

function MediaTextSection({
  wrapperClassName,
  mediaClassName,
  textClassName,
  media,
  children,
  link,
  containerClassName = "container",
}: MediaTextSectionProps) {
  return (
    <div className={wrapperClassName}>
      <div className={containerClassName}>
        <div className="row">
          {media && mediaClassName && <div className={mediaClassName}>{media}</div>}
          <div className={textClassName}>
            {children}
            {link}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaTextSection;
