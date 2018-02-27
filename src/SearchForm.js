import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  onChangeHandle(e) {
    this.props.updateSearchText(e.target.value);
  } 

  onSubmit(e) {
    e.preventDefault();
    this.props.query();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} className="Searchform">
      <input
        type="text"
        id="searchText"
        className="Searchform-text"
        onChange={e => this.onChangeHandle(e)}
        value={this.props.searchText}
      />
      <button 
        type="submit"
        className="Searchform-submit">
        Change location
      </button>  
    </form>
    );
  }
}

export default SearchForm;
