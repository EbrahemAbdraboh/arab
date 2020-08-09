import React, { Component } from 'react';
import './ScrollButton.scss';
import { FaArrowAltCircleUp } from "react-icons/fa";
export default class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <button title='Back to top' className='scroll d-none d-lg-block' onClick={() => this.scrollToTop()}>
            <span className='arrow-up icon-down-open'>
              <FaArrowAltCircleUp />
            </span>
          </button>
        )}
      </div>
    );
  }
}
