import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../components/List';
import {api} from '../utils/api';

class StartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }
  componentWillMount() {
    api().getUsers().then(
      res => {
        this.setState({users:[...res]});
        this.setState({loading: false});
      }
    )
  }

  render(){
    const {
      users,
      loading
    } = this.state;
    return (
      loading
        ? <CircularProgress />
        : <List users={users} />
    );
  }
}
export default StartList;
