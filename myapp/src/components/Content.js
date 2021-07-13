import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Content.css';

class Content extends React.Component {
  render() {
    const { accounts, isLoading } = this.props;

    if (isLoading) {
      return(
        <div className="users-cards">
          <p style={{fontSize: "80px", color: "#D1D1D1"}}>LOADING...</p>
        </div>
      )
    }

    return(
      <div className="users-cards">
        { accounts.map((account) => (
        <div key={ account.id } className="user-card">
          <Link style={{textDecoration: 'none'}} to={ { pathname: "/details", detailsProps: { acccount: account } } }>
            <img className="avatar-home" alt="avatar" src={ account["avatar_url"] } />
            <p className="user-link" key={ account.id }>{ account.login }</p>
          </Link>
        </div>))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accounts: state.listReducer.accounts,
  isLoading: state.listReducer.isLoading,
});

export default connect(mapStateToProps)(Content);
