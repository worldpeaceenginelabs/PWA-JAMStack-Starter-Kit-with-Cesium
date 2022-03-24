import React from 'react';
import MenuIconOpen from 'src/Components/menu/MenuIconOpen';
import NotLoggedInView from 'src/Components/views/NotLoggedInView';
import { makeStyles } from '@material-ui/core';
import { DefaultTheme } from '@material-ui/styles';
import LoggedInView from 'src/Components/views/LoggedInView';
import NotLoggedInMobileView from 'src/Components/views/mobile/NotLoggedInMobileView';
import useIsSmallDevice from 'src/hooks/useIsSmallDevice';

interface IMainScreenProps {
  setShowMenu: (state: boolean) => void;
  setIsLoggedIn: (loginState: boolean) => void;
  isLoggedIn: boolean;
}

const styles = makeStyles<DefaultTheme, { isSmallDevice: boolean }>({
  mainScreen: ({ isSmallDevice }) => ({
    backgroundColor: isSmallDevice ? '#ffffff' : '#000000',
  }),
});

const MainScreen: React.FunctionComponent<IMainScreenProps> = ({
  setShowMenu,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  const isSmallDevice = useIsSmallDevice();

  const classes = styles({ isSmallDevice });

  if (isSmallDevice) {
    return (
      <div className={`mainScreen full ${classes.mainScreen}`}>
        {!isLoggedIn && <NotLoggedInMobileView setIsLoggedIn={setIsLoggedIn} />}

        {isLoggedIn && (
          <>
            <LoggedInView />
            <MenuIconOpen setShowMenu={setShowMenu} />
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`mainScreen full ${classes.mainScreen}`}>
      {!isLoggedIn && <NotLoggedInView setIsLoggedIn={setIsLoggedIn} />}

      {isLoggedIn && (
        <>
          <LoggedInView />
          <MenuIconOpen setShowMenu={setShowMenu} />
        </>
      )}
    </div>
  );
};

export default MainScreen;
