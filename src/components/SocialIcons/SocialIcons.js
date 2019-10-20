import React from 'react';
import PropTypes from 'prop-types';
import git from './GitHub.png'
import link from './linkedin.png'
import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IdaRahnama" style={ { color: colorPrimary } }><i className="fab fa-github"><img src={git} style={{width:'30px',height:'30px'}}/></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ida-rahnama-013640178" style={ { color: colorPrimary } }><i className="fab fa-linkedin"><img style={{width:'30px',height:'30px'}}src={link}/></i></a>
    
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;