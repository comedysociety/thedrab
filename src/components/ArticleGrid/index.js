import React from 'react';
import Link from 'gatsby-link';
import style from './style.module.css';

function ArticleGrid({ children }) {
  return (
    <div className={style.root}>
      {children}
    </div>
  );
}

export default ArticleGrid;
