import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { THEME_KEY } from 'consts';

const htmlClassList = document.querySelector('html').classList;

const initThemeContext = {
  isDarkTheme: /true/i.test(localStorage.getItem(THEME_KEY)),
};

export const ThemeContext = React.createContext(initThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(initThemeContext.isDarkTheme);

  const toggleTheme = () => setDarkTheme(!isDarkTheme);

  useEffect(() => {
    htmlClassList.remove(`theme_${isDarkTheme ? 'dark' : 'default'}`);
    htmlClassList.add(`theme_${isDarkTheme ? 'default' : 'dark'}`);
    localStorage.setItem(THEME_KEY, isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ThemeProvider;
