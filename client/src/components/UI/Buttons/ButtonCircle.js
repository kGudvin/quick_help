import React from 'react';
import style from './Button.module.css'


{/* <div classNames={[styles.base, styles.clickable, styles.withIcon].join(' ')} /> */}

function ButtonCircle({children, ...props}) {
  return (
    <button {...props} onClick={props.Handler} className={[style.btn_circle].join(' ')}>{children}</button>
  );
}

export default ButtonCircle;
