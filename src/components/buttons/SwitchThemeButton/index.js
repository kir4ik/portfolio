import React, { useRef, useEffect } from 'react';

import hooks from 'hooks';

import './style.scss';

// TODO добавить debounce на переключение темы
const SwitchThemeButton = () => {
  const { toggleTheme, isDarkTheme } = hooks.useTheme();

  const sunDark = useRef();
  const sunLight = useRef();
  const starDark = useRef();
  const starLigth = useRef();

  useEffect(() => {
    if (isDarkTheme) {
      sunDark.current.beginElementAt(0);
      starDark.current.beginElementAt(0.16);
    } else {
      starLigth.current.beginElementAt(0);
      sunLight.current.beginElementAt(0.16);
    }
  }, [isDarkTheme]);

  return (
    <button id="themeButton" type="button" onClick={toggleTheme} className="switch-theme-button">
      <svg className="switch-theme-button__svg" viewBox="0 0 24 24">
        <defs>
          <path id="star" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69z">
            <animate ref={starDark} attributeType="CSS" attributeName="stroke-width" from="9.5px" to="3.5px" dur=".16s" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines=".4 0 .2 1" begin="themeButton.click" />
            <animate ref={starLigth} attributeType="CSS" attributeName="stroke-width" from="3.5px" to="9.5px" dur=".16s" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines=".4 0 .2 1" begin="themeButton.click" />
          </path>
          <clipPath id="outline-clip">
            <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69z" />
          </clipPath>
        </defs>
        <g>
          <use id="use" xlinkHref="#star" fill="none" clipPath="url(#outline-clip)" />
        </g>
        <circle id="moon" r="5" cx="12" cy="12" />
        <circle id="sun" r="5.1" cx="8" cy="12">
          <animate ref={sunDark} attributeType="XML" attributeName="cx" from="8" to="12" dur=".16s" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines=".4 0 .2 1" begin="themeButton.click" />
          <animate ref={sunLight} attributeType="XML" attributeName="cx" from="12" to="8" dur=".16s" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines=".4 0 .2 1" begin="themeButton.click" />
        </circle>
        <path d="M0 0h24v24H0V0z" fill="none" />
      </svg>
    </button>
  );
};

export default SwitchThemeButton;
