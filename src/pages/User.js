import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, Switch, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '../components/Card';
import {api} from '../utils/api';
import Follow from "./Follow";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.match.params.user,
      userInfo: {
        avatar_url: '',
        name: '',
        login: '',
        company: '',
        location: '',
        bio: '',
        public_repos: '',
        following: '',
        followers: '',
      },
      loadingUser: true,
    };
  }

  componentWillMount() {
    const {user} = this.state;
    api().getSingleUser(user).then(
      res => {
        this.setState({userInfo: {...res}});
        this.setState({loadingUser: false});
      }
    );
    api().getFollowers(user).then(
      res => {
        this.setState({followersArr: [...res]});
        this.setState({loadingFollowers: false});
      }
    );
    api().getFollowing(user).then(
      res => {
        this.setState({followingArr: [...res]});
        this.setState({loadingFollowing: false});
      }
    )
  }

  render() {
    const {
      userInfo,
      loadingUser,
    } = this.state;
    const {
      avatar_url: imgUrl,
      html_url: pageLink,
      name,
      login,
      company,
      location,
      public_repos: repositories,
      following,
      followers,
      bio,
    } = userInfo;
    return (
      <Grid container spacing={16} justify="center">
        <Grid item xs={4}>
          {
            loadingUser
              ? <CircularProgress/>
              : <Card
                imgUrl={imgUrl}
                pageLink={pageLink}
                name={name}
                login={login}
                company={company}
                location={location}
                bio={bio}
                repositories={repositories}
                following={following}
                followers={followers}
                clickFunction={() => {}}
              />
          }
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Grid container spacing={16}>
              <Grid item xs={4}>
                <Link to={`/${login}/following`}>following</Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={`/${login}/followers`}>followers</Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={`/${login}/edit`}>edit</Link>
              </Grid>
            </Grid>
          </Paper>
          <Switch>
            <Route exact path="/:user/:subPage" component={Follow} />
            {/*<Route exact path="/:user/edit" component={Edit} />*/}
          </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default User;
