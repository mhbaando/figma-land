import { createContext } from 'react';
// menu context for managing state of the menu

export const MenuContext = createContext({
  isMenuOpen: {},
  setIsMenuOpen: {},
});
