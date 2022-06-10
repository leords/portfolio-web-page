import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './styles.module.scss';

const Switch = () => {

  const {theme, setTheme} = useContext(ThemeContext)
  const [switchButton, setSwitchButton] = useState(false)


    function sendActionSwitchButton() {
      if (switchButton == true) {
        setTheme('dark')
      }
      else if(switchButton == false) {
        setTheme('light')
      }
    }
    

  return (
    <>
      <input
        className={styles.reactSwitchCheckbox}
        id={`reactSwitchNew`}
        type="checkbox"
        onClick={() => sendActionSwitchButton()}
        
      />
      <label
        className={styles.reactSwitchLabel}
        htmlFor={`reactSwitchNew`}
        onClick={() => setSwitchButton(!switchButton)}
      >
        <span className={styles.reactSwitchButton}/>
      </label>
    </>
  );
};

export default Switch;



/*referencia de onde peguei o switch button*/
/*https://upmostly.com/tutorials/build-a-react-switch-toggle-component*/