import React from 'react';
const images  = require.context('./images', true);

const ImageGallery = () => {

  const imageList = images.keys().map((imageName) => images(imageName));

  return (
      <div>
        <h1>AR Rackets Image Gallery</h1>
        <div>
          {imageList.map((imageName, index) => (
            <img
              style={{width: '250px', height: 'auto'}}
              key={index}
              src={imageName}
              alt={`Display ${index}`}
            />
          ))}
        </div>
      </div>
    );
};

export default ImageGallery;
