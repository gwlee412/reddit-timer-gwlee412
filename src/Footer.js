import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, PageLinks,
} from './StyledFooter';

function Footer() {
  return (
    <Container>
      <PageLinks to={{ pathname: 'https://profy.dev/employers' }}>
        profy.dev
      </PageLinks>
      <Link to="/">
        <Logo />
      </Link>
      <PageLinks to="/terms">
        Terms & Privacy
      </PageLinks>
    </Container>
  );
}

export default Footer;
