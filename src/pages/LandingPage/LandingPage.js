import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Nav from '../../components/Nav/Nav';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import BrowserNotes from '../../components/BrowserNotes/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Ida!</div>
          <div className="tagline">
            Full Stack Developer
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
