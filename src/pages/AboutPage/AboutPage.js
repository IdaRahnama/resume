import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I have a strong passion for <span className="highlight">Software Development</span> 
              .</p>
            <p>I am an innovative and self-driven programmer. Equipped with a diverse and promising skill set. Experienced
                  in various platforms and languages. Able to effectively self manage during independent projects, as
well as collaborate as part of a productive team.
            </p>
            <p>
            Have my masters degree in IT and my bachelor's degree in software engineering. 
            </p>
            <p>
            A full-stack developer with good knowledge in programming languages such as  <span className="highlight">Python, Java, SQL, HTML, Javascript, C# and CSS</span>.
            </p>
            <p>
            I have experience of working with big data using Python and SQL. 
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
            
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
