import React from 'react';
import { makeStyles } from '@material-ui/core';
import GoogleLoginButton from 'src/Components/provider-login-button/GoogleLoginButton';
import FacebookLoginButton from 'src/Components/provider-login-button/FacebookLoginButton';
import AppleLoginButton from 'src/Components/provider-login-button/AppleLoginButton';
import { DefaultTheme } from '@material-ui/styles';
import useIsSmallDevice from 'src/hooks/useIsSmallDevice';

const styles = makeStyles<DefaultTheme, { isSmallDevice: boolean }>({
  pane: ({ isSmallDevice }) => ({
    padding: isSmallDevice ? '30px 30px' : '80px 30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 0px 30px rgb(0 0 0 / 15%)',
  }),
  paneItem: {
    'marginBottom': '20px',

    '&:last-child': {
      marginBottom: 0,
    },
  },
});

interface INotLoggedInViewProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const LoginPane: React.FunctionComponent<INotLoggedInViewProps> = ({
  setIsLoggedIn,
}) => {
  const isSmallDevice = useIsSmallDevice();

  const classes = styles({ isSmallDevice });

  return (
    <div className={classes.pane}>
      <div className={classes.paneItem}>
        <GoogleLoginButton setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div className={classes.paneItem}>
        <FacebookLoginButton setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div className={classes.paneItem}>
        <AppleLoginButton setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default LoginPane;
