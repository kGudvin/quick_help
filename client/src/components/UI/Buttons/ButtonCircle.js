import React from 'react';
import style from './Button.module.css'


function ButtonCircle({children, ...props}) {
  return (
    <button {...props} className={style.btn_circle}>{children}</button>
  );
}

export default ButtonCircle;
