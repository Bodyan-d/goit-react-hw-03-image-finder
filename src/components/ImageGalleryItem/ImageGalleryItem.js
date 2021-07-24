import React from 'react';

export default function ImageGalleryItem({ src, id }) {

  return (
    <li key={id} className="ImageGalleryItem">
      <img src={src} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}
