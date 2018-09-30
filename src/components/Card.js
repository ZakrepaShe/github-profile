import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from "react-router-dom";
import {connect} from '../utils/helpers'

const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  media: {
    objectFit: 'cover',
    height: 250,
  },
});

const MediaCard = (props) => {
  const {
    classes,
    userInfo,
  } = props;
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
  const clickFunction = () =>{
    props.history.push(`/${login}/edit`)
  };
  return (
    <Card className={classes.card}>
        {
          imgUrl
            ? <CardMedia
              className={classes.media}
              image={imgUrl}
              title="Avatar"
            />
            : ''
        }
        <CardContent>
          {
            name
              ? <a href={pageLink}>
                  <Typography gutterBottom variant="headline" component="h1">
                    Name: {name}
                  </Typography>
                </a>
              : ''
          }
          {
            login
              ? <Typography gutterBottom variant="title">
                NickName: {login}
              </Typography>
              : ''
          }
          {
            company
              ? <Typography variant="subheading">
                Company: {company}
              </Typography>
              : ''
          }
          {
            location
              ? <Typography variant="subheading">
                Location: {location}
              </Typography>
              : ''
          }
          <Typography variant="body2">
            Bio:
          </Typography>
          <Typography component="p">
            {bio ? bio : 'no bio entered'}
          </Typography>
          {
            (repositories || following || followers)
              ? <Typography variant="body2">
                Statistics:
              </Typography>
              : ''
          }
          {
            repositories
              ? <Typography component="p">
                Repositories: {repositories}
              </Typography>
              : ''
          }
          {
            following
              ? <Typography component="p">
                Following: {following}
              </Typography>
              : ''
          }
          {
            followers
              ? <Typography component="p">
                Followers: {followers}
              </Typography>
              : ''
          }
          <Button onClick={clickFunction} variant="contained" color="primary" className={classes.button}>
            Edit
          </Button>
        </CardContent>
    </Card>
  )
};

export default withStyles(styles)(withRouter(connect(MediaCard)));