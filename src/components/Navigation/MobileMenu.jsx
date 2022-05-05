import React, { useContext } from 'react';
import { MenuContext } from '../../context/menu.context';
import { Links } from '../index';
import './MobileMenu.scss';

const MobileMenu = () => {
  // loop over the menu links
  const menus = Links.map((menu, index) => {
    return (
      <a
        href={menu.src}
        key={index + menu.name}
        // when we select a menu we need menu to disapear
        onClick={() => setIsMenuOpen(false)}
      >
        <li>{menu.name}</li>
      </a>
    );
  });

  // destrcutre the context
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  // wrpa every thin to the context

  return (
    <>
      {isMenuOpen && (
        <>
          <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fg__mobileMenu">
            <ul>{menus}</ul>
            {/* we forget the cta Button 😅 */}
            <button type="button" onClick={() => setIsMenuOpen(false)}>
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
