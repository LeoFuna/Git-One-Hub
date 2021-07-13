import React from 'react';
import ContentDetails from '../components/ContentDetails';
import '../components/Content.css';

class Details extends React.Component {
  render() {
    const { acccount } = this.props.location.detailsProps;
    return(
      <div style={{textAlign:"center", position: "absolute", top: "12vh", left: "42vw"}}>
        <img className="avatar-home" src={ acccount["avatar_url"] } alt="avatar" />
        <h1>{ acccount.login }</h1>
        <h3>REPOSITORIES</h3>
        <ContentDetails account={ acccount } />
      </div>
    );
  }
}

export default Details;
