import React from 'react';
import ListItem from './ListItem'
import Grid from '@material-ui/core/Grid';

const List = (props) => {
  return (
    <Grid container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={16}
    >
      {
        props.users.map(user =>
          (
            <Grid item key={user.login} xs={12}>
              <ListItem user={user}/>
            </Grid>
          )
        )
      }
    </Grid>
  )
};

export default List;