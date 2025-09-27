import React, { Component } from 'react';

export class GifList extends Component {
  render() {
    const { gifs } = this.props;

    return (
      <ul className='gif-list'>
        {gifs.map(gif => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    );
  }
}