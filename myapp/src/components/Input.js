import React from 'react';
import { connect } from 'react-redux';
import { handleApi } from '../actions';
import './Input.css';

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchInput } = this.state;
    const { searchUser } = this.props;
    return(
      <div className="input-div">
        <input className="input-search" type="text" name="searchInput" value={ searchInput } onChange={ this.handleEvent } placeholder="Let me know who do you want to search" />
        <button className="button-search" type="button" onClick={ () => searchUser(searchInput) } >Search</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchUser: (request) => dispatch(handleApi(request)),
});

export default connect(null, mapDispatchToProps)(Input);
