import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CesiumMap from 'src/Components/views/CesiumMap';

const styles = makeStyles({
  root: {
    height: '100%',
    position: 'relative',
  },
});

const LoggedInView: React.FunctionComponent = () => {
  const classes = styles();

  return (
    <Grid container={true} spacing={0} classes={{ root: classes.root }}>
      <CesiumMap />
    </Grid>
  );
};

export default LoggedInView;
