import React from 'react';
import { connect } from 'react-redux';

class ContentDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      userRepos: [],
    }
    this.requestRepoData = this.requestRepoData.bind(this);
  }

  componentDidMount(props) {
    const { account } = this.props
    this.requestRepoData(account['repos_url']);
  }

  async requestRepoData(query) {
    const URL = query;
    const response = await fetch(URL);
    const responseJson = await response.json();
    let repos = [];
    if (responseJson.length >= 3) {
      repos = [ responseJson[0], responseJson[1], responseJson[2] ]
    } else {
      repos = [...responseJson];
    }
    this.setState({
      userRepos: repos,
    });
  }

  render() {
    const { userRepos } = this.state;
    return(
      <div className="all-repo-cards">
        { userRepos.map((repo, index) => (
          <div className="repo-card" key={ index }>
            <h3 className="user-repo">{ repo.name }</h3>
            <p className="user-repo-data">Forks: { repo['forks_count'] }</p>
            <p className="user-repo-data">Stars: { repo['stargazers_count'] }</p>
            <p className="user-repo-data">Watchers: { repo['watchers'] }</p>
          </div>
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // accounts
});

export default connect(mapStateToProps)(ContentDetails);
