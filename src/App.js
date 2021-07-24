import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';


class App extends Component {
  state = {
    imageName: '',
  };

  handleChange = e => {
    if (!e.currentTarget.value.trim()) {
      return;
    }
    this.setState({ imageName: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Searchbar
          onChange={this.handleChange}
          imageName={this.state.imageName}
        />

        <ImageGallery imageName={this.state.imageName} />
      </>
    );
  }
}

export default App;
