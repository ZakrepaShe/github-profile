import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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

function MediaCard(
  {
    classes,
    name,
    company,
    location,
    bio,
    changeFunc,
    save,
    cancel,
  }
) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={changeFunc('name')}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="company"
          label="Company"
          value={company}
          onChange={changeFunc('company')}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="location"
          label="Location"
          value={location}
          onChange={changeFunc('location')}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="bio"
          label="Biography"
          value={bio}
          onChange={changeFunc('bio')}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <Button onClick={cancel} variant="contained" color="primary" className={classes.button}>
          Cancel
        </Button>
        <Button onClick={save} variant="contained" color="primary" className={classes.button}>
          Save
        </Button>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);