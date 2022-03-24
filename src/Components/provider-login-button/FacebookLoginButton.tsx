import React from 'react';
import LoginProviderButton from 'src/Components/provider-login-button/LoginProviderButton';
import FacebookLogin from 'react-facebook-login';
import appConfig from 'src/getConfig';

interface IFacebookLoginButtonProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const FacebookLoginButton: React.FunctionComponent<IFacebookLoginButtonProps> = ({
  setIsLoggedIn,
}) => {
  return (
    <FacebookLogin
      appId={appConfig.FACEBOOK_APP_ID}
      fields="name,email,picture"
      callback={() => setIsLoggedIn(true)}
      onFailure={(response) => {
        console.error('Login failed', response);
        setIsLoggedIn(false);
      }}
      render={(renderProps) => (
        <LoginProviderButton
          loginProvider="facebook"
          onLogin={() => renderProps.onClick()}
        />
      )}
    />
  );
};

export default FacebookLoginButton;
