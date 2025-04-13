interface ImageObject {
  src: string;
  width: number;
  height: number;
  format: string;
}

export const getImgPath = async (img_input: string | object) => {
  // for remote images, only validate the width and height props
  if (typeof img_input === 'string') {
    return img_input;
  }

  const promised_input = (
    'then' in img_input ? (await img_input).default : img_input
  ) as ImageObject;

  // for remote images, only validate the width and height props
  if (typeof promised_input.src === 'string') {
    return promised_input.src;
  }

  if (typeof promised_input.src === 'undefined') {
    return '';
  }

  // resolve the metadata promise, usually when the ESM import is inlined
  const metadata =
    'then' in promised_input.src ? (await promised_input.src).default : promised_input.src;
  return metadata.src;
};

export default getImgPath;
