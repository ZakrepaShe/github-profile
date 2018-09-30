import React from 'react';
import Form from '../components/Form'
import Grid from '@material-ui/core/Grid';

const Edit = () => (
  <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={16}
  >
    <Grid item xs={12}>
      <Form/>
    </Grid>
  </Grid>
);

export default Edit;
