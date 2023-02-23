export const getImageDimensions = async (file: File): Promise<{ width: number; height: number }> => (
  new Promise((resolve, reject) => {
    try {
      // Create data URL
      const dataUrl: string = URL.createObjectURL(file);

      // Get dimensions from image
      const img: HTMLImageElement = new Image();
      img.onload = () => {
        const width: number = img.naturalWidth;
        const height: number = img.naturalHeight;

        resolve({ width, height });
        URL.revokeObjectURL(dataUrl);
      };
      img.src = dataUrl;
    } catch (err) {
      reject(err);
    }
  })
);
