import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, PageLinks, NavContainer,
} from './StyledHeader';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <NavContainer>
        <PageLinks to="/search">
          Search
        </PageLinks>
        <PageLinks to="/search">
          How it works
        </PageLinks>
        <PageLinks to="/search">
          About
        </PageLinks>
      </NavContainer>
    </Container>
  );
}

export default Header;
