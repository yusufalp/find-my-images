import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

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
    let images = this.state.results.map(result => <img src={`${result.urls.small}`} alt=''></img>)
    return (
      <div className="container">
        <SearchBar submitForm={this.searchSubmitHandler} />
        {images}
      </div>
    );
  }
}

export default App;
