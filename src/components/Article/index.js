import React from 'react';
import sample from 'lodash/sample';

import style from './style.module.css';

function Article({ title, datePublished, bodyMarkup }) {

  return (
    <div className={style.container}>
      <article>
        <div className={style.meta}>
          <h1 className={style.title}>{title}</h1>
        </div>

        <div className="Prose" dangerouslySetInnerHTML={{ __html: bodyMarkup }} />
      </article>
    </div>
  );
}

export default Article;