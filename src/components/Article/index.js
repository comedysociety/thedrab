import React from 'react';
import sample from 'lodash/sample';

import style from './style.module.css';

function Article({ title, datePublished, kicker = 'Who knows', bodyMarkup, author = null }) {

  return (
    <div className={style.container}>
      <article>
        <div className={style.meta}>
          <div className={style.kicker}>{kicker}</div>
          <h1 className={style.title}>{title}</h1>
          <div className={style.meta}>{author !== null ? <span>{author}, </span> : null}</div>
        </div>

        <div className={style.body}>
          <div className="Prose" dangerouslySetInnerHTML={{ __html: bodyMarkup }} />
        </div>
      </article>
    </div>
  );
}

export default Article;