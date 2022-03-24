import React from 'react';

interface IMenuIconOpenProps {
  setShowMenu: (state: boolean) => void;
  strokeColor?: string;
  shadowColor?: string;
}

const MenuIconOpen: React.FunctionComponent<IMenuIconOpenProps> = ({
  setShowMenu,
  strokeColor = '#fff',
  shadowColor = 'rgba(0, 0, 0, 0.3)',
}) => {
  return (
    <div className="menuIcon open" onClick={() => setShowMenu(true)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `drop-shadow(1px 1px 0px ${shadowColor}) drop-shadow(-1px 1px 0px ${shadowColor}) drop-shadow(1px -1px 0px ${shadowColor}) drop-shadow(-1px -1px 0px ${shadowColor})`,
        }}
      >
        <path d="M0 21H22M0 1H22M0 11H22" stroke={strokeColor} />
      </svg>
    </div>
  );
};

export default MenuIconOpen;
