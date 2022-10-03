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
        <PageLinks to="/search.javascript">
          Search
        </PageLinks>
        <PageLinks to="#how-it-works">
          How it works
        </PageLinks>
        <PageLinks to="#about">
          About
        </PageLinks>
      </NavContainer>
    </Container>
  );
}

export default Header;
