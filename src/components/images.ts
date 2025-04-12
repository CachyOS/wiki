export interface ImageObject {
  src: string;
  width: number;
  height: number;
  format: string;
}

export const getImgPath = async (
  img_input: string | ImageObject | Promise<{ default: ImageObject }>
): Promise<string> => {
  // For remote images (string URLs), return directly
  if (typeof img_input === 'string') {
    return img_input;
  }

  let resolved_input: ImageObject | undefined;

  // Handle promise-like object (dynamic import)
  if (
    typeof img_input === 'object' &&
    img_input !== null &&
    'then' in img_input &&
    typeof img_input.then === 'function'
  ) {
    try {
      // Properly type the module import result
      const module = await img_input;
      resolved_input = module.default;
    } catch (error) {
      console.error('Failed to resolve image promise:', error);
      return ''; // Handle promise rejection
    }
  } else if (typeof img_input === 'object' && img_input !== null && 'src' in img_input) {
    // Direct ImageObject (static import or direct object)
    resolved_input = img_input;
  }

  // Validate the resolved input and its src property
  if (!resolved_input || typeof resolved_input.src !== 'string') {
    console.error('Invalid or unresolved image input:', img_input, 'Resolved:', resolved_input);
    return ''; // Return empty string for invalid cases
  }

  return resolved_input.src;
};

export default getImgPath;
