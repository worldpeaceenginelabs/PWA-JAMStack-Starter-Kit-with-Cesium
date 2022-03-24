import React from 'react';
import { makeStyles } from '@material-ui/core';
import LoginPane from 'src/Components/views/not-logged-in/LoginPane';
import GlobeImage from './../not-logged-in/globe.png';

const styles = makeStyles({
  root: {
    height: '100%',
    position: 'relative',
  },
  imagePane: {
    height: '100%',
    padding: '15px',
  },
  image: {
    height: '100%',
    backgroundImage: `url("${GlobeImage}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundOrigin: 'content-box',
  },
  globeImage: {
    width: 'auto',
    height: 'auto',
    padding: '15px',
    margin: 'auto',
  },
  loginPane: {
    position: 'absolute',
    bottom: 'calc(15px + env(safe-area-inset-bottom))',
    right: '15px',
    left: '15px',
  },
});

interface INotLoggedInViewProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const NotLoggedInMobileView: React.FunctionComponent<INotLoggedInViewProps> = ({
  setIsLoggedIn,
}) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imagePane}>
        <div className={classes.image} />
      </div>
      <div className={classes.loginPane}>
        <LoginPane setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default NotLoggedInMobileView;
