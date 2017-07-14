import React from 'react';
import Link from "gatsby-link"
import style from './style.module.css';

function ArticleItem({ title, kicker, led, link, image = null }) {

  return (
    <div className={style.root}>
      <Link className={style.title} to={link}>
        <h2>{title}</h2>
      </Link>
      <img src={image} />
      <div className={style.led}>{led}</div>
    </div>
  );
}

export default ArticleItem;