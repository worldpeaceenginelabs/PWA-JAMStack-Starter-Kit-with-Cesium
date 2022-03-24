import React, { useState } from 'react';
import MainScreen from 'src/Components/MainScreen';
import Menu from 'src/Components/Menu';

const App: React.FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <MainScreen
        setShowMenu={setShowMenu}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />

      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default App;
