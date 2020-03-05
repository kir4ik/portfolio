import { useContext } from 'react';

import { ThemeContext } from 'context/ThemeProvider';

export default () => {
  const {
    toggleTheme,
    isDarkTheme,
    setDarkTheme,
  } = useContext(ThemeContext);

  return {
    isDarkTheme,
    setDarkTheme,
    toggleTheme,
  };
};
