import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Weather from './Weather';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: props.initialCity,
      data: null
    };
    this.query();
  }

  updateSearchText(searchText) {
    this.setState({
      searchText
    });
  }

  query() {
    const searchText = this.state.searchText;
    const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${searchText}")and u='c'&format=json`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({data: responseJson.query.results.channel}))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Weather App <i className="fas fa-sun slow-spin"></i></div>       
          <SearchForm 
              searchText={this.state.searchText} 
              updateSearchText={this.updateSearchText.bind(this)} 
              query={this.query.bind(this)}
          />
        </header>
        <Weather data={this.state.data}/>
      </div>
    );
  }
}

export default App;
