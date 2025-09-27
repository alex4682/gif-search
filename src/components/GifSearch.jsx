import { Component } from 'react';

export class GifSearch extends Component {
  state = {
    keyword: '',
  };

  handleChange = (event) => {
    this.setState({ keyword: event.target.value });
  }

  handleSearch = () => {
    this.props.setKeyword(this.state.keyword); 
  }

 

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for GIFs"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}