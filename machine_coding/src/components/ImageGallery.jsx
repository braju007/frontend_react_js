import React, { useState } from 'react';
import './../css/ImageGallery.css';

// Image Gallery Component
export const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddImage = () => {
    if (imageUrl.trim() !== '') {
      setImages([...images, imageUrl]);
      setImageUrl('');
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Image Gallery Application</h1>
      {/* Input for adding a new image */}
      <div>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button
          onClick={handleAddImage}
          style={{ padding: '8px 16px', marginLeft: '10px' }}
        >
          Add Image
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {images.map((url, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={url}
              alt={`Gallery Image ${index}`}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedImage(url)}
            />
            <button
              onClick={() => handleDeleteImage(index)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px, 10px',
                cursor: 'pointer',
              }}
            >
              {' '}
              Delete
            </button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setSelectedImage(null)}
          id="modal"
        >
          <img
            src={selectedImage}
            style={{ maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
