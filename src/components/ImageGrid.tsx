import React from 'react';
interface ImagesProps {
  images: string[];
}

export const ImageGrid = (props:ImagesProps) => {

  const { images } = props;

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="instagram" />
      ))}
    </div>

  )
}