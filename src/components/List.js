import React from 'react';
import ListItem from './ListItem'
import Grid from '@material-ui/core/Grid';

const List = (props) => (
  <Grid container
        direction="column"
        justify="center"
        alignItems="flex-start"
        spacing={16}>{
    props.users.map(user => (
        <Grid item key={user.login}>
          <ListItem user={user}/>
        </Grid>
      )
    )
  }
  </Grid>
);

export default List;