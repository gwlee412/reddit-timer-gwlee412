import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, PageLinks,
} from './StyledFooter';

function Footer() {
  return (
    <Container>
      <a href="https://profy.dev/employers" target="_blank" rel="noopener noreferrer">
        profy.dev
      </a>
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
