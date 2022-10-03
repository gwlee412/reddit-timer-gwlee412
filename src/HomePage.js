import { render } from '@testing-library/react';
<<<<<<< HEAD
import React from 'react';
import Header from './Header';
import {
  TitleContainer, TitleQuestion, TitleDescription, SearchPageButton,
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
        <SearchPageButton>
          show me the best time
        </SearchPageButton>
        <TitleDescription>
          r/javascript
        </TitleDescription>
      </TitleContainer>
    </>
  );
=======

const HomePage = () => {
  render();
  return null;
>>>>>>> main
};

export default HomePage;
