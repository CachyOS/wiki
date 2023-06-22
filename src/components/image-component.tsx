import { PhotoProvider, PhotoView } from 'react-image-previewer'
import { CloseButton } from 'react-image-previewer/ui';
import React from 'react';

const ImageComponent = ({ imgsrc }) => {
  if (imgsrc == undefined) {
    return <div>Failed</div>
  }

  return (
    <PhotoProvider
      overlayRender={({ onClose }) => {
        return <CloseButton onClick={onClose} />
      }}>
      <PhotoView src={imgsrc}>
        <img src={imgsrc} alt="shit" />
      </PhotoView>
    </PhotoProvider>
  );
};

export default ImageComponent;
