import React, { createElement } from 'react';
import { Button, ButtonProps, darken, makeStyles } from '@material-ui/core';
import { DefaultTheme } from '@material-ui/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import GoogleIcon from 'src/Components/provider-login-button/icons/GoogleIcon';
import FacebookIcon from 'src/Components/provider-login-button/icons/FacebookIcon';
import AppleIcon from 'src/Components/provider-login-button/icons/AppleIcon';

type LoginProvider = 'google' | 'facebook' | 'apple';

interface ProviderSettings {
  label: string;
  backgroundColor: string;
  color: string;
  icon: React.ComponentType<SvgIconProps>;
}

const loginProviderSettingsMap: Record<LoginProvider, ProviderSettings> = {
  google: {
    label: 'Google',
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.54)',
    icon: GoogleIcon,
  },
  facebook: {
    label: 'Facebook',
    backgroundColor: '#1877F2',
    color: '#ffffff',
    icon: FacebookIcon,
  },
  apple: {
    label: 'Apple',
    backgroundColor: '#000000',
    color: '#ffffff',
    icon: AppleIcon,
  },
};

const styles = makeStyles<
  DefaultTheme,
  { backgroundColor: string; color: string }
>({
  button: (props) => ({
    'width': '100%',
    'height': '54px',
    'backgroundColor': props.backgroundColor,
    'color': props.color,
    'fontSize': '20px',
    'textTransform': 'none',
    'borderRadius': '10px',
    'boxShadow': 'rgb(0 0 0 / 20%) 2px 3px 6px',
    'padding': '0 15px 0 0',
    '&:hover': {
      backgroundColor: darken(props.backgroundColor, 0.2),
    },
  }),
  icon: {
    flex: '0 1 24px',
    width: '24px',
    height: '24px',
    margin: '0 15px 0 15px',
  },
  labelContainer: {
    display: 'flex',
  },
  label: {
    flex: '1 0 auto',
    textAlign: 'left',
  },
});

interface ILoginProviderButtonProps extends ButtonProps {
  loginProvider: LoginProvider;
  onLogin: (provider: LoginProvider) => void;
}

const LoginProviderButton: React.FunctionComponent<ILoginProviderButtonProps> = ({
  loginProvider,
  onLogin,
  ...buttonProps
}) => {
  const {
    label: providerLabel,
    icon: providerIcon,
    color,
    backgroundColor,
  } = loginProviderSettingsMap[loginProvider];

  const classes = styles({ color, backgroundColor });

  return (
    <Button
      {...buttonProps}
      onClick={() => onLogin(loginProvider)}
      classes={{
        root: classes.button,
        label: classes.labelContainer,
      }}
    >
      {createElement(providerIcon, { className: classes.icon })}

      <span className={classes.label}>Sign Up with {providerLabel}</span>
    </Button>
  );
};

export default LoginProviderButton;
