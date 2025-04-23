import React from 'react';
const images = require.context('./images', true);

const ImageGallery = () => {
  const imageList = images.keys().map((key) => ({
    name: key.replace('./', ''),
    src: images(key),
  }));

  const handleCopy = (relativeUrl) => {
    // Turn “/static/media/…” into “https://yourdomain.com/static/media/…”
    const fullUrl = new URL(relativeUrl, window.location.origin).toString();
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => alert('Copied full image URL!'))
      .catch((err) => console.error('Copy failed', err));
  };

  return (
    <div>
      <h1>AR Rackets Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {imageList.map((image, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <p style={{ margin: '8px 0', fontWeight: 'bold' }}>{image.name}</p>
            <img
              src={image.src}
              alt={image.name}
              style={{ width: '250px', height: 'auto', display: 'block' }}
            />
            <button
              onClick={() => handleCopy(image.src)}
              style={{ marginTop: '8px', cursor: 'pointer' }}
            >
              Copy Full Image URL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
