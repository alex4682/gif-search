import { Component } from 'react';
import { GifSearch } from './components/GifSearch';
import { GifList } from './components/GifList';
import './App.css';

export class App extends Component {
  state = {
    keyword: '',
    gifs: [],
    page: 0,
    limit: 19, 
  }

  setKeyword = (keyword) => {
    this.setState({ keyword, page: 0 }, this.fetchGifs); 
  }

  fetchGifs = () => {
    const apiKey = 'waV8Vad56n6FYV1cMZk9bZ7mzx3Yzueb';
    const { keyword, page, limit } = this.state; 
    const offset = page * limit; 
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g`; // Use offset instead of page

    fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setState({ gifs: data.data });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  next = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchGifs); 
  }

  prev = () => {
    this.setState((prevState) => ({ page: Math.max(0, prevState.page - 1) }), this.fetchGifs); 
  }

  render() {
    return (
      <div className='app'>
        <button onClick={this.prev} disabled={this.state.page === 0} className='prev'>Prev</button> {}
        <button onClick={this.next} className='next'>Next</button>
        <GifSearch setKeyword={this.setKeyword} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}