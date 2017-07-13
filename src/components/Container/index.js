import React from 'react';
import style from './style.module.css';


function Container({ children }) {
  return <div className={style.root}>{children}</div>;
}

export default Container;