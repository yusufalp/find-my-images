import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard/ImageCard';

const ImageList = (props) => {
  const images = props.images.map(
    (image, i) => <ImageCard key={image.id} image={image}></ImageCard>
  )

  return (
    <div className='images'>
      {images}
    </div>
  );
}

export default ImageList