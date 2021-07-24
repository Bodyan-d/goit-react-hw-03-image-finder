import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import LMButton from '../Button';

export default function ImageGallery({ imagesSearch, loadMore }) {

  return (
    <div className="container">
      <ul className="ImageGallery">
        {imagesSearch &&
          imagesSearch.map(image => (
            <ImageGalleryItem id={image.id} src={image.webformatURL} />
          ))}
      </ul>

      <LMButton onClick={loadMore} />
    </div>
  );
}
