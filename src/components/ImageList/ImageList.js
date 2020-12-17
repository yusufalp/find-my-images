import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map(
    (result, i) => <img key={result.id} src={result.urls.small} alt={result.alt_description}></img>
  )

  return (
    <div className='images'>
      {images}
    </div>
  );
}

export default ImageList