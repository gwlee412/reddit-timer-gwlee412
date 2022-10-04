import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {
  TitleContainer, TitleQuestion, TitleDescription, SearchPageButton,
  HeatMapImg, ImageContainer,
} from './StyledHomePage';

const HomePage = () => {
  render();
  return (
    <>
      <Header />
      <TitleContainer>
        <TitleQuestion>
          No reactions to your reddit posts?
        </TitleQuestion>
        <TitleDescription>
          Great timing, great results! Find the best time to post on your subreddit.
        </TitleDescription>
        <Link to="/search/javascript">
          <SearchPageButton>
            show me the best time
          </SearchPageButton>
        </Link>
        <TitleDescription>
          r/javascript
        </TitleDescription>
      </TitleContainer>
      <ImageContainer>
        <Link to="/search/javascript">
          <HeatMapImg />
        </Link>
      </ImageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
