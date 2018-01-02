import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor() {
    super(...arguments);

    this.state = { value: '' }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.value);
    this.setState({ value: '' });
  }

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search for the city"
          className="form-control"
          value={this.state.value}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
