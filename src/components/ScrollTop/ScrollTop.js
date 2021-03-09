import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toTop as scrollToPageTop } from '../../utils/scroll';
import top from './top.png'
import './style.scss';

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      shouldShowScrollTopArrow: false
    };
  }

  handleScroll() {
    const boundingRect = ((document || {}).documentElement || {})
      .getBoundingClientRect;
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100)
        this.setState({ shouldShowScrollTopArrow: true });
      else this.setState({ shouldShowScrollTopArrow: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { theme: { colorPrimary } } = this.context;
    const hideArrowClass = this.state.shouldShowScrollTopArrow ? '' : 'hide';
    return (
      <div className="scroll-top" onClick={(e) => scrollToPageTop()}>
        <div
          className={`arrow ${hideArrowClass}`}
          style={{ color: colorPrimary }}
        >
          <div className="to-top">To Top</div>
          <img src={top} style={{width:'30px',height:'30px'}}/>
        </div>
      </div>
    );
  }
}

ScrollTop.contextTypes = {
  theme: PropTypes.any
};

export default ScrollTop;