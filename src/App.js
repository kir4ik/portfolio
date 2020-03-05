
import React from 'react';

import Profile from 'components/Profile';
import ThemeProvider from 'context/ThemeProvider';
import { SwitchThemeButton } from 'components/buttons';

const App = () => (
  <ThemeProvider>
    <SwitchThemeButton />
    <Profile />
  </ThemeProvider>
);

export default App;
