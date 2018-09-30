import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Route, Switch, Link, withRouter} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '../components/Card';
import {api} from '../utils/api';
import Follow from "./Follow";
import Edit from "./Edit";
import {Provider} from '../utils/helpers';

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
      followersArr: [],
      followingArr: [],
      loadingUser: true,
      loadingFollowers: true,
      loadingFollowing: true,
    };
  }

  componentWillMount() {
    const {user} = this.state;
    this.getUser(user)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.user !== this.props.match.params.user) {
      this.getUser(this.props.match.params.user)
    }
  }

  getUser(user) {
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

  save(saveData) {
    const {secret, ...sendData} = saveData;
    api(secret).patchSingleUser(sendData).then(
      res=>{
        const { user }= this.state;
        this.getUser(user);
        this.props.history.push(`/${user}`)
      }
    )
  }

  getProviderState() {
    return {
      ...this.state,
      save: this.save
    }
  }

  render() {
    const {
      userInfo: {login},
      loadingUser,
    } = this.state;
    return (
      <Provider value={this.getProviderState()}>
        <Grid container spacing={16} justify="center">
          <Grid item xs={4}>
            {
              loadingUser
                ? <CircularProgress />
                : <Card />
            }
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={16} justify="center">
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <Switch>
                  <Route exact path="/:user" component={Follow}/>
                  <Route path="/:user/:subPage(following|followers)" component={Follow}/>
                  <Route exact path="/:user/edit" component={Edit} />}
                </Switch>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Provider>
    );
  }
}

export default withRouter(User);
