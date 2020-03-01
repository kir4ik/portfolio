import React, { useContext } from 'react';

import { AvatarCard } from 'components/cards';
import { ThemeContext } from 'context/ThemeProvider';
import { getLevelText } from 'helpers';
import data from 'src/data';

import './style.scss';

const Prifile = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="profile">
      <AvatarCard
        url={data.avatar}
        fullName={`${data.firstName} ${data.lastName}`}
        age={data.age}
        level={getLevelText(data.level)}
        salary={`$${data.salaryUSD}`}
        // monthExperiens={}
      />
      <button
        type="button"
        onClick={() => toggleTheme()}
      >
        сменить тему
      </button>
      {/* <ul className="profile">
        <li>{`${data.firstName} ${data.lastName}`}</li>
        <li>{data.age}</li>
        <li>{data.gender}</li>
        <li>
          {Object.entries(data.skills).map(([key, values]) => (
            <ul>
              <li>
                {key}
                <ul>
                  {values.sort((a, b) => b.level - a.level).map(value => (
                    <li>
                      <b>{value.name}</b>
                      <span>{` ${value.level}/${data.skillLevelLimit}`}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </li>
      </ul> */}
    </div>
  );
};

export default Prifile;
