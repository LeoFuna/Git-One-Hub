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
    const { userRepos } = this.state
    console.log(userRepos)
    return(
      <div>
        { userRepos.map((repo, index) => (
          <div key={ index }>
            <h3>{ repo.name }</h3>
            <p>Forks: { repo['forks_count'] }</p>
            <p>Stars: { repo['stargazers_count'] }</p>
            <p>Watchers: { repo['watchers'] }</p>
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
