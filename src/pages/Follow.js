import React, {Component, Fragment} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../components/List';
import {api} from '../utils/api';
import {Capital} from "../utils/helpers";

class Follow extends Component {
  constructor(props) {
    super(props);
    const subPage = props.match.params.subPage || 'following';
    this.state = {
      user: props.match.params.user,
      subPage: subPage,
      [`${subPage}Arr`]: [],
      [`loading${Capital(subPage)}`]: true,
    };
  }

  componentWillMount() {
    const {user,subPage} = this.state;
    api()[`get${Capital(subPage)}`](user).then(
      res => {
        this.setState({[`${subPage}Arr`]: [...res]});
        this.setState({[`loading${Capital(subPage)}`]: false});
      }
    );
  }

  componentDidUpdate(prevProps, prevState){
    if (
      prevProps.match.params.subPage !== this.props.match.params.subPage
      || prevProps.match.params.user !== this.props.match.params.user
    ) {
      const {user,subPage='following'} = this.props.match.params;
      this.setState({[`loading${Capital(subPage)}`]: true});
      api()[`get${Capital(subPage)}`](user).then(
        res => {
          this.setState({[`${subPage}Arr`]: [...res]});
          this.setState({subPage: subPage});
          this.setState({[`loading${Capital(subPage)}`]: false});
        }
      );
    }
  }

  render() {
    const {subPage} = this.state;
    return (
      <Fragment>
      {
        this.state[`loading${Capital(subPage)}`]
          ? <CircularProgress/>
          : <List users={this.state[`${subPage}Arr`]}/>
      }
    </Fragment>
  );
  }
}

export default Follow;
