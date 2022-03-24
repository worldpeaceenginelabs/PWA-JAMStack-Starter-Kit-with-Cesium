import React from 'react';
import LoginProviderButton from 'src/Components/provider-login-button/LoginProviderButton';
import GoogleLogin from 'react-google-login';
import appConfig from 'src/getConfig';

interface IGoogleLoginButtonProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const GoogleLoginButton: React.FunctionComponent<IGoogleLoginButtonProps> = ({
  setIsLoggedIn,
}) => {
  return (
    <GoogleLogin
      clientId={appConfig.GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <LoginProviderButton
          loginProvider="google"
          onLogin={() => renderProps.onClick()}
        />
      )}
      onSuccess={() => setIsLoggedIn(true)}
      onFailure={(error) => {
        console.error('Google login error', error);
        setIsLoggedIn(false);
      }}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLoginButton;
