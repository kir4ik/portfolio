import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Prifile = ({
  fullname,
  birth,
  gender,
  skills,
}) => (
  <div>
    Тут будет компонент профайла
    <p>А пока вот</p>
    <ul className="profile">
      <li>{fullname}</li>
      <li>{birth}</li>
      <li>{gender}</li>
      <li>{skills.join(', ')}</li>
    </ul>
  </div>
);

Prifile.propTypes = {
  fullname: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Prifile;
