import React, { Component } from 'react';
import fetchImagesAPI, { resetPage } from '../../sourse/images-API';
import ImageGalleryItem from '../ImageGalleryItem';
import LMButton from '../Button';

export default class ImageGallery extends Component {
  state = {
    imagesSearch: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      resetPage();
      fetchImagesAPI
        .fetchImages(this.props.imageName)
        .then(imagesOnFeedback => {
          this.setState({ imagesSearch: imagesOnFeedback.hits });
        });
      console.log(this.state.imagesSearch);
    }
  }

  fetchingImages = () => {};

  onLoadMoreClick = e => {
    window.scrollTo({
      top: document.getElementById('loadMore'),
      behavior: 'smooth',
    });

    fetchImagesAPI.fetchImages(this.props.imageName).then(imagesOnFeedback => {
      this.setState({
        imagesSearch: [...this.state.imagesSearch, ...imagesOnFeedback.hits],
      });
    });
  };

  render() {
    const { imagesSearch } = this.state;

    return (
      <div className="container">
        <ul className="ImageGallery">
          {imagesSearch &&
            imagesSearch.map(image => (
              <ImageGalleryItem id={image.id} src={image.webformatURL} />
            ))}
        </ul>
        {}
        <LMButton onClick={this.onLoadMoreClick} />
      </div>
    );
  }
}
