import React from 'react';
import Container from '../Container';
import Logo from '../Logo';

import style from './style.module.css';

function Footer() {

  return (
    <footer className={style.root}>
      <Container className={style.container}>
        <div className={style.logo}>
          <Logo white />
        </div>
        is a satirical envdeor by The Sussex Comedy Society.
     </Container>
    </footer>
  );
}

export default Footer;