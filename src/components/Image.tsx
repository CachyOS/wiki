import { PhotoProvider, PhotoView } from 'react-image-previewer';
import { CloseButton } from 'react-image-previewer/ui';

const Image = ({ imgsrc, alt }: { imgsrc?: string; alt?: string }) => {
  if (!imgsrc) {
    return (
      <div>
        <p>Image not found</p>
      </div>
    );
  }

  return (
    <PhotoProvider
      overlayRender={({ onClose }) => {
        return <CloseButton onClick={onClose} />;
      }}
    >
      <PhotoView src={imgsrc}>
        <img src={imgsrc} alt={alt ?? ''} />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Image;
