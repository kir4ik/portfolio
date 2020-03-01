import React from 'react';
import PropTypes from 'prop-types';

import noImageIcon from 'assets/img/no-image.svg';

import './style.scss';

const AvatarCard = ({
  url,
  fullName,
  monthExperiens,
  salary,
  level,
  age,
}) => (
  <div className="avatar-card">
    <img
      className="avatar-card__avatar"
      src={url || noImageIcon}
      alt={fullName}
    />
    <div className="avatar-card__additional">

      <div className="avatar-card__additional__group">
        <span className="avatar-card__additional__group__name">
          {fullName}
        </span>
        {age && (
          <span className="avatar-card__additional__group__age">
            {age}
          </span>
        )}
      </div>

      {monthExperiens && (
        <span className="avatar-card__additional__experiens">
          {monthExperiens}
        </span>
      )}
      {level && (
        <span className="avatar-card__additional__level">
          {level}
        </span>
      )}
      {salary && (
        <span className="avatar-card__additional__salary">
          {salary}
        </span>
      )}
    </div>
  </div>
);

AvatarCard.propTypes = {
  url: PropTypes.string,
  fullName: PropTypes.string,
  monthExperiens: PropTypes.string,
  salary: PropTypes.string,
  level: PropTypes.string,
  age: PropTypes.number,
};

AvatarCard.defaultProps = {
  url: '',
  fullName: '',
  monthExperiens: '',
  salary: '',
  level: '',
  age: null,
};

export default AvatarCard;
