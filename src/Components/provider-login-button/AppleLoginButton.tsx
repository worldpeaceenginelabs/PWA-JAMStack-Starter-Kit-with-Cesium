import React from 'react';
import LoginProviderButton from 'src/Components/provider-login-button/LoginProviderButton';
import appConfig from 'src/getConfig';
import AppleLogin from 'react-apple-login';

interface IAppleLoginButtonProps {
  setIsLoggedIn: (loginState: boolean) => void;
}

const AppleLoginButton: React.FunctionComponent<IAppleLoginButtonProps> = ({
  setIsLoggedIn,
}) => {
  return (
    <AppleLogin
      clientId={appConfig.APPLE_APP_ID}
      redirectURI={location.href}
      callback={() => setIsLoggedIn(true)}
      render={(renderProps) => (
        <LoginProviderButton
          loginProvider="apple"
          onLogin={() => renderProps.onClick()}
        />
      )}
    />
  );
};

export default AppleLoginButton;
