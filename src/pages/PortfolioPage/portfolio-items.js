import React from 'react';
import rea from './logo192.png';
import py from './py.png';
import html from './html5.png';
import css from './css-3.png';
import java from './java.png';
import hash from './hashtag.png';
import { bold } from 'ansi-colors';
export default [{
  name: 'typy',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        ReactJS
      </div>
      <div className='portfolio-item__desc'>
      <a href="https://github.com/IdaRahnama/Javascript-weather-app"style={{fontStyle:"italic",fontWeight:"bold"}}> Web Application Development</a> 
       

      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <img src={rea} style={{width:'60px',height:'60px'}}/>
        <i className="fab fa-npm"></i>
      </div>
      
    </div>
  )
}, {
  name: 'dev-landing-page',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Django
      </div>
      <div className='portfolio-item__desc'>
        <a href="https://github.com/IdaRahnama/Webscraping-Python"style={{fontStyle:"italic",fontWeight:"bold"}}>Web scraping</a> and <a href="https://github.com/IdaRahnama/Machine-Learning"style={{fontStyle:"italic",fontWeight:"bold"}}>Machine learning</a> 
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <img src={py} style={{width:'60px',height:'60px'}}/>
        <i className="fab fa-css3"></i>
      </div>
     
    </div>
  )
}, {
  name: 'react-redux-boilerplate',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        HTML5
      </div>
      <div className='portfolio-item__desc'style={{fontStyle:"italic",fontWeight:"bold"}} >
      Web content development and Design
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <img src={html} style={{width:'60px',height:'60px'}}/>
        <i className="fab fa-js"></i>
      </div>
      
    </div>
  )
}, {
  name: 'npm-module-boilerplate',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        CSS3
      </div>
      <div className='portfolio-item__desc' style={{fontStyle:"italic",fontWeight:"bold"}}>
        Web page Design
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <img src={css} style={{width:'60px',height:'60px'}}/>
        <i className="fab fa-npm"></i>
      </div>
      
    </div>
  )
}, {
  name: 'axios-retry-interceptor',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Java
      </div>
      <div className='portfolio-item__desc'>
      <a href="https://github.com/IdaRahnama/JavaTestExamples"style={{fontStyle:"italic",fontWeight:"bold"}}>Sample codes</a> 
        Back-end development
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <img src={java} style={{width:'60px',height:'60px'}}/>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.testdome.com/cert/2a4e5ddd62d44f15bc03076bdc39e754">Certificate</a>
        
      </div>
    </div>
  )
}, {
  name: 'browser-or-node',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        C#
      </div>
      <div className='portfolio-item__desc'>
     
        
        <a href="https://github.com/IdaRahnama/includeExlude"style={{fontStyle:"italic",fontWeight:"bold"}}>Sample codes</a> 
          Back-end development
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <img src={hash} style={{width:'60px',height:'60px'}}/>
        <i className="fab fa-npm"></i>
      </div>
      
    </div>
  )
}]