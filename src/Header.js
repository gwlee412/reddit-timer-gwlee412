import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Logo, PageLinks, NavContainer, ScrollLinks,
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
        <ScrollLinks to="#how-it-works">
          How it works
        </ScrollLinks>
        <ScrollLinks to="#about">
          About
        </ScrollLinks>
      </NavContainer>
    </Container>
  );
}

export default Header;
