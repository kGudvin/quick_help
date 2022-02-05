import React from 'react';
import style from './Button.module.css'

function MainButton({children, props}) {
  return (
    <button {...props} className={`${style.main_button}`}>{children}</button>
  );
}

export default MainButton;
