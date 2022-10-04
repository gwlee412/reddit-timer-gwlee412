import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';
import {
  TitleContainer, TitleQuestion, TitleDescription, SearchPageButton, HomePageContainer,
} from './StyledHomePage';

const HomePage = () => {
  render();
  return (
    <HomePageContainer>
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
    </HomePageContainer>
  );
};

export default HomePage;
