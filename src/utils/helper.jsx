export const loadImage = (uri, desiredWidth, desiredHeight) => {
    let finalWidth = 0;
    let finalHeight = 0;
    const image = new Image();
    image.src = uri;
  
    return new Promise((resolve) => {
      image.onload = function () {
        const { width, height } = image;
  
        const widthFit = desiredWidth / width;
        const heightFit = desiredHeight / height;
        const scale = widthFit > heightFit ? heightFit : widthFit;
  
        finalWidth = width * scale;
        finalHeight = height * scale;
  
        if (finalWidth < desiredWidth) {
          const difference = desiredWidth / finalWidth;
          finalWidth *= difference;
          finalHeight *= difference;
        }
  
        if (finalHeight < desiredHeight) {
          const difference = desiredHeight / finalHeight;
          finalWidth *= difference;
          finalHeight *= difference;
        }
  
        const initialScale = (finalWidth / width) * 100;
  
        const orientation = height > width ? "portrait" : "landscape";
  
        resolve({
          image,
          height: finalHeight,
          width: finalWidth,
          scale: initialScale,
          orientation,
          actualSize: {
            width,
            height,
          },
        });
      };
    });
  };
  