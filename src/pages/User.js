import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getUser from '../store/actions'
import {loadingStateSelector} from '../store/reducers/loading'
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';

class User extends Component {

  componentWillMount() {
    const {user} = this.props.match.params;
    this.props.getUser(user)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.user !== this.props.match.params.user) {
      this.props.getUser(this.props.match.params.user)
    }
  }

  render() {
    const {
      loadingUser,
    } = this.props;
    return (
        <Grid container spacing={16} justify="center">
          <Grid item xs={12}>
            {
              loadingUser
                ? <CircularProgress />
                : <Card />
            }
          </Grid>
        </Grid>
    );
  }
}

const mapStateToProps = state => ({
  loadingUser: loadingStateSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
