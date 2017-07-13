import React from 'react';
import Link from 'gatsby-link';
import sample from 'lodash/sample';
import Container from '../Container';
import Logo from '../Logo';
import taglines from './taglines';

import style from './style.module.css';

function Header() {
  return (
    <Container>
      <header className={style.root}>
        <div className={style.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={style.tagline}>{sample(taglines)}</div>
      </header>
    </Container>
  );
}


export default Header;