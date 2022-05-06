import React, { useContext } from 'react';
import { MenuContext } from '../../context/menu.context';
import { Links } from '../index';
import './MobileMenu.scss';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  // define varients for menu items
  const varients = {
    // initially opacity will be zero and x position will be -20
    hidden: { opacity: 0, x: -20 },
    show: {
      opcaity: 1,
      x: 0,
      transition: {
        staggertChildren: 0.1,
        easing: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  // varients for childs
  const child = {
    hidden: { y: -50, opacity: 0 }, // initially y position and opacity
    show: { y: 0, opacity: 1 },
  };

  // loop over the menu links
  const menus = Links.map((menu, index) => {
    return (
      <a
        href={menu.src}
        key={index + menu.name}
        // when we select a menu we need menu to disapear
        onClick={() => setIsMenuOpen(false)}
      >
        {/* convert regular li to motion.li */}
        <motion.li variants={child}>{menu.name}</motion.li>
      </a>
    );
  });

  // destrcutre the context
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  // wrpa every thin to the context
  //   wrap every thing to animate presence
  // key will help us track down whic element is removed from the DOM
  // exit => animates wen the element is removing from the DOM
  // we have ste the orgin of the transform to the right
  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="overlay"
            key="overlay"
            initial={{ opacity: 0, scaleX: 0 }} // intially pass some val
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setIsMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* we seperated & wrpa ech one to animate presence  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menus"
            varients={varients}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fg__mobileMenu"
          >
            <ul>{menus}</ul>
            {/* we forget the cta Button 😅 */}
            <button
              type="button"
              varients={child}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
