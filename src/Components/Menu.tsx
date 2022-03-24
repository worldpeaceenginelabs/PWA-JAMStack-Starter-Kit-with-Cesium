import React from 'react';
import MenuIconClose from 'src/Components/menu/MenuIconClose';

interface IMenuProps {
  showMenu: boolean;
  setShowMenu: (state: boolean) => void;
}

const Menu: React.FunctionComponent<IMenuProps> = ({
  showMenu,
  setShowMenu,
}) => {
  return (
    <div className={`menu full ${showMenu ? 'show' : 'hide'}`}>
      <MenuIconClose setShowMenu={setShowMenu} />
    </div>
  );
};

export default Menu;
