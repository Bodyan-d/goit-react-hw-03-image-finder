import React, { Component } from 'react';
import fetchImagesAPI, { resetPage } from './sourse/images-API';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Error from './components/Error';

class App extends Component {
  state = {
    imageName: '',
    error: null,
    imagesSearch: null,
    status: 'idle',
  };

  handleChange = e => {
    if (!e.target.value.trim()) {
      return;
    }

    this.setState({ imageName: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ status: 'pending' });

      resetPage();
      fetchImagesAPI
        .fetchImages(this.state.imageName)
        .then(imagesOnFeedback => {
          this.setState({
            imagesSearch: imagesOnFeedback.hits,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      console.log(this.state.imagesSearch);
    }
  }

  onLoadMoreClick = e => {
    fetchImagesAPI.fetchImages(this.state.imageName).then(imagesOnFeedback => {
      console.log(this.state.imagesSearch);
      console.log(imagesOnFeedback.hits);
      this.setState({
        imagesSearch: [...this.state.imagesSearch, ...imagesOnFeedback.hits],
      });
    });
  };

  render() {
    const { status } = this.state;
    if (status === 'idle') {
      return (
        <>
          <Searchbar
            onChange={this.handleChange}
            imageName={this.state.imageName}
          />
        </>
      );
    }

    if (status === 'pending') {
      return (
        <>
          <Searchbar
            onChange={this.handleChange}
            imageName={this.state.imageName}
          />

          <Loader />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar
            onChange={this.handleChange}
            imageName={this.state.imageName}
          />

          <ImageGallery
            imagesSearch={this.state.imagesSearch}
            loadMore={this.onLoadMoreClick}
          />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <Error error={this.state.error} />
        </>
      );
    }
  }
}

export default App;
