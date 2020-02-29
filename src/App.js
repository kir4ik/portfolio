
import React from 'react';

import Profile from 'components/Profile';

const data = {
  firstName: 'Владислав',
  lastName: 'Лакович',
  birth: '17.01.1997',
  gender: 'мужской',
  skills: ['HTML', 'CSS', 'JS(ES5+) + React/Redux/hooks'],
};

const App = () => (
  <Profile
    fullname={`${data.firstName} ${data.lastName}`}
    birth={data.birth}
    gender={data.gender}
    skills={data.skills}
  />
);

export default App;
