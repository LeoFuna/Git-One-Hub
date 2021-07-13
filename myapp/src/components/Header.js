import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <div className="Header">
        <h1>Git One Hub</h1>
        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width="110px" style={{margin: "30px"}} alt="github logo" />
      </div>
    )
  }
}

export default Header;
