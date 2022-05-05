import { useState } from 'react';
import { Links, MobileMenu } from '../index';
// import images here
import Images from '../../constants/index';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MenuContext } from '../../context/menu.context';
import './Navigation.scss';

const Navigation = () => {
  // loop over our menu links
  const menus = Links.map((menu, index) => {
    return (
      <a href={menu.src} key={menu.name + index}>
        <li>{menu.name}</li>
      </a>
    );
  });

  // let's implement hiding unhidnig the menu programatically
  const [isMenuOpen, setIsMenuOpen] = useState(false); // by default menu is hidden

  return (
    <>
      <nav className="fg__nav">
        <div className="fg__nav--brand">
          <img src={Images.Logo} alt="Logo" />
        </div>
        <div className="fg__nav--links">
          <ul>{menus}</ul>
        </div>
        <div className="fg__nav--cta">
          <button type="button">Login</button>
          {/* let's have menu button, we'll use react icons  */}
          <HiMenuAlt3
            onClick={() => {
              setIsMenuOpen(true); // onclick to show menu
            }}
          />
        </div>
      </nav>

      {/* here we put the mobile menu */}
      {/* wrap our context provider to the menu  */}
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        {/* needs to be animated while appearinf and disapperain on the screen will solve it later */}
        <MobileMenu />
      </MenuContext.Provider>
    </>
  );
};

export default Navigation;
