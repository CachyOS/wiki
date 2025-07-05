import { PhotoProvider, PhotoView } from 'react-image-previewer';
import { CloseButton, SlideToolbar } from 'react-image-previewer/ui';

const MultipleImages = ({ images }: { images?: string[] }) => {
  if (images == undefined) {
    return <div>Failed</div>;
  }

  return (
    <PhotoProvider
      overlayRender={(props) => {
        const { onClose } = props;
        return (
          <>
            <SlideToolbar {...props} items={['arrowLeft', 'countText', 'arrowRight']} />
            <CloseButton onClick={onClose} />
          </>
        );
      }}
    >
      <div>
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt={item} />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default MultipleImages;
