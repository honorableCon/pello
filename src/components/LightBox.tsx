import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

interface LightBoxProps {
  isOpen: boolean;
  onClose: () => any;
  images: Array<any>;
  defaultIdx?: number;
}
const LightBox = ({ isOpen, onClose, defaultIdx, images }: LightBoxProps) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  useEffect(() => {
    if (defaultIdx) {
      setPhotoIndex(defaultIdx);
    }
  }, [defaultIdx]);

  const onPrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };
  const onNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].downloadLink}
          nextSrc={images[(photoIndex + 1) % images.length].downloadLink}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length]
              .downloadLink
          }
          onCloseRequest={onClose}
          onMovePrevRequest={onPrev}
          onMoveNextRequest={onNext}
        />
      )}
    </>
  );
};

export default LightBox;
