interface ImageObject {
  src: string | Promise<{ default: { src: string } }>;
  width: number;
  height: number;
  format: string;
}

export const getImgPath = async (
  imgInput: string | object | Promise<{ default: ImageObject }>
): Promise<string> => {
  // If input is a remote image URL string, return as is
  if (typeof imgInput === 'string') {
    return imgInput;
  }

  // Await if input is a promise (ESM import), else use directly
  const imageObj: ImageObject =
    'then' in imgInput ? (await imgInput).default : (imgInput as ImageObject);

  // If src is missing or undefined, return empty string
  if (!imageObj.src) {
    return '';
  }

  // If src is a string, return it directly
  if (typeof imageObj.src === 'string') {
    return imageObj.src;
  }

  // If src is a promise (inlined ESM import), resolve and return src
  if ('then' in imageObj.src) {
    const metadata = (await imageObj.src).default;
    return metadata.src;
  }

  // Fallback: return empty string for unexpected cases
  return '';
};

export default getImgPath;
