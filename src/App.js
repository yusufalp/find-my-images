import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/ImageList/ImageList';

class App extends React.Component {
  state = {
    images: []
  }
  searchSubmitHandler = (searchTerm) => {
    let url = 'https://api.unsplash.com/search/photos?query='

    fetch(`${url}${searchTerm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Client-ID zujqwoWD1PfY8h1azpRRURgOlxHsoTjr5Zcju_uExe4"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong!');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => this.setState({ images: data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <SearchBar submitForm={this.searchSubmitHandler} />
        <p>Found {this.state.images.length} images</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
