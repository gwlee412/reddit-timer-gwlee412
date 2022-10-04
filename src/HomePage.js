import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {
  TitleContainer, TitleQuestion, TitleDescription, SearchPageButton,
  HeatMapImg, ImageContainer, InfoContainer1, InfoContainer2, InfoTitle, InfoDetails,
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
      <InfoContainer1 id="how-it-works">
        <InfoTitle>
          How it works
        </InfoTitle>

        <InfoDetails>
          ∙ We find the 500 top posts from the past year for a subreddit.
          <br />
          ∙ The data is visualized in a heatmap grouped by weekday and hour of the day.
          <br />
          ∙ See immediately when to submit your reddit post.
        </InfoDetails>

      </InfoContainer1>
      <InfoContainer2 id="about">
        <InfoTitle>
          About
        </InfoTitle>
        <InfoDetails>
          This app was created during a course on
          {' '}
          <a href="https://profy.dev" target="_blank" rel="noreferrer">profy.dev</a>
          {' '}
          with the goal
          to implement a
          <br />
          pixel-perfect real-world
          application with professional workflows and tools like
          Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
          <a href="https://profy.dev/employers" target="_blank" rel="noreferrer"> Click here for more information.</a>
        </InfoDetails>
      </InfoContainer2>
      <Footer />
    </>
  );
};

export default HomePage;
