import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {connect} from '../utils/helpers'

const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const startState = (props = {}) =>
  props.userInfo
    ? {
      name: props.userInfo.name ? props.userInfo.name : '',
      company: props.userInfo.company ? props.userInfo.company : '',
      location: props.userInfo.location ? props.userInfo.location : '',
      bio: props.userInfo.bio ? props.userInfo.bio : '',
      secret: ''
    }
    : {
      name: '',
      company: '',
      location: '',
      bio: '',
      secret: ''
    };

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {...startState(props)};
    this.startState = {...startState(props)};

    this.changeFunc = this.changeFunc.bind(this);
    this.cancelFunc = this.cancelFunc.bind(this);
    this.saveFunc = this.saveFunc.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.userInfo.name !== this.props.userInfo.name) && prevProps.userInfo.name === '') {
      this.setState(state => ({
        ...state,
        ...startState(this.props)
      }));
      this.startState = {...startState(this.props)}
    }
  }

  changeFunc = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  cancelFunc() {
    this.setState({...this.startState});
  }

  saveFunc() {
    this.props.save(this.state)
  }

  render() {
    const {
      name,
      company,
      location,
      bio,
      secret,
    } = this.state;
    const {classes} = this.props;


    return (
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={this.changeFunc('name')}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="company"
            label="Company"
            value={company}
            onChange={this.changeFunc('company')}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="location"
            label="Location"
            value={location}
            onChange={this.changeFunc('location')}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="bio"
            label="Biography"
            value={bio}
            onChange={this.changeFunc('bio')}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="secret"
            label="Secret Token"
            value={secret}
            onChange={this.changeFunc('secret')}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <Button onClick={this.cancelFunc} variant="contained" color="primary" className={classes.button}>
            Cancel
          </Button>
          <Button onClick={this.saveFunc} variant="contained" color="primary" className={classes.button}>
            Save
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(connect(Form));