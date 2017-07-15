import React from 'react';
import ReactMarkdown from 'react-markdown';
import isArray from 'lodash/isArray';
import startsWidth from 'lodash/startsWith';

import style from './style.module.css';

function removeFrontMatter(content) {
  if (startsWidth(content, '---\n')) {
    return content.replace(/---((.|\s)*?)---/, '');
  }
}

const contentComponents = {
  heading: (props, children) => {
    return React.createElement(
      `h${props.depth}`,
      {
        className: 'Heading'
      },
      children
    );
  },
  text: props => props.value,
  paragraph: (props, children) =>
    <p>
      {children}
    </p>,
  emphasis: (props, children) =>
    <em>
      {children}
    </em>,
  image: props => <img src={props.url} />
};

function renderNode(node) {
  if (!node) {
    console.warn(node, 'is not a node');
  }

  if (isArray(node)) {
    return node.map(renderNode);
  }

  if (!Object.hasOwnProperty.call(contentComponents, node.type)) {
    console.warn(node.type, 'not found in component map');
    return null;
  }

  return contentComponents[node.type](
    node,
    Object.hasOwnProperty.call(node, 'children')
      ? renderNode(node.children)
      : null
  );
}

function Article({
  title,
  datePublished,
  kicker = 'Who knows',
  content,
  author = null
}) {
  console.log(content);
  return (
    <div className={style.container}>
      <article>
        <div className={style.meta}>
          <div className={style.kicker}>
            {kicker}
          </div>
          <h1 className={style.title}>
            {title}
          </h1>
          <div className={style.meta}>
            {author !== null
              ? <span>
                  {author},{' '}
                </span>
              : null}
          </div>
        </div>

        <div className={`${style.body} Prose`}>
          {content.children.map(node => renderNode(node))}
        </div>
      </article>
    </div>
  );
}

export default Article;
