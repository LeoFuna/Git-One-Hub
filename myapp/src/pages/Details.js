import React from 'react';
import ContentDetails from '../components/ContentDetails';
import '../components/Content.css';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  render() {
    const { acccount } = this.props.location.detailsProps;
    return(
      <div className="repo-content" style={{textAlign:"center", position: "absolute", top: "1vh", left: "18vw"}}>
        <Link to="/" style={{textDecoration: "none"}}><p style={{color: "#D1D1D1"}}>Return</p></Link>
        <img className="avatar-home" src={ acccount["avatar_url"] } alt="avatar" />
        <h1 style={{color: "#D1D1D1"}}>{ acccount.login }</h1>
        <h4 style={{color: "#D1D1D1", fontStyle: "italic"}}>REPOSITORIES</h4>
        <ContentDetails account={ acccount } />
      </div>
    );
  }
}

export default Details;
