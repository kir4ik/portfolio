
import React from 'react';

import Profile from 'components/Profile';
import ThemeProvider from 'context/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <Profile />
  </ThemeProvider>
);

export default App;
