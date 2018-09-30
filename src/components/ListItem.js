import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
    minWidth: 300,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 70,
    height: 70,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  badge: {
    borderRadius: '10px',
    background: '#3949ab',
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: '10px',
    padding: '0 10px'
  }
});

function Item(props) {
  const {classes, user} = props;
  const {
    avatar_url: imgUrl,
    login,
    site_admin: admin,
    html_url: adress
  } = user;

  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={imgUrl}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Grid item container>
                <Typography gutterBottom variant="subheading">
                  <Link to={`/${login}`}>{login}</Link>
                </Typography>
                {admin
                  ? <Typography gutterBottom variant="subheading" className={classes.badge}>
                    admin
                  </Typography>
                  : ''}
              </Grid>
              <Typography gutterBottom>
                {adress}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Item);