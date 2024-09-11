/**
 * create image preview url from a File object
 * @param file File object
 * @returns image preview url
 */
export const createImagePreviewUrl = async (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.onerror = err => {
      reject(err);
    };

    fileReader.readAsDataURL(file);
  });
};
