import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Modal, Button, Icon } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-bootstrap';
import DrowerToggleButton from './DrowerNavigation/DrowerToggleButton';
import { ArabButton } from '../arabButton/ArabButton';
import { LoginRegister } from '../LoginRegister/LoginRegister';
import logo from '../../../assets/logo.png';
import './header.scss';

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}
export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }

  componentDidMount() {

    return window.addEventListener('scroll', debounce(this.handleScroll, 20));
  }
  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 20))
  }

  handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }
  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
    render(){
      const isScrolling = this.state.scrollPositionY
      return(
        <div className='header'>
          <div className={(isScrolling) ? 'customHeader-container header-shrink isScrolling' : 'customHeader-container header-wrapper'}>
            <Container fluid isscrolling={isScrolling}>
              <nav className="toolbar__navigation">
                <div className="toolbar__logo">
                  <Link to={process.env.PUBLIC_URL + "/"} onClick={this.eventPrevent}>
                    <img src={logo} alt='Arab-Education'/>
                  </Link>
                </div>
                <div className='category-menu'>
                  <ArabButton classes="secondButton" caption="الدورات" icon="list layout" arabIcon='trueIcon' />
                  <div className='category-mega-menu'>
                    <Container fluid >
                      <Row className='grideView'>
                      <Col xs={12} md={4} lg={3}>
                        <div className='category-items'>
                          <span><Link to={process.env.PUBLIC_URL + "/searchResult"}>تصميم برامج</Link></span>
                          <List >
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>ورش عمل متنوعة</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                          </List>
                        </div>
                      </Col>
                      <Col xs={12} md={4} lg={3}>
                        <div className='category-items'>
                          <span><Link to={process.env.PUBLIC_URL + "/searchResult"}>تصميم برامج</Link></span>
                          <List >
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>ورش عمل متنوعة</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                          </List>
                        </div>
                      </Col>
                      <Col xs={12} md={4} lg={3}>
                        <div className='category-items'>
                          <span><Link href={process.env.PUBLIC_URL + "/searchResult"}>تصميم برامج</Link></span>
                          <List >
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>ورش عمل متنوعة</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                          </List>
                        </div>
                      </Col>
                      <Col xs={12} md={4} lg={3}>
                        <div className='category-items'>
                          <span><Link to={process.env.PUBLIC_URL + "/searchResult"}>تصميم برامج</Link></span>
                          <List >
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>ورش عمل متنوعة</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                          </List>
                        </div>
                      </Col>
                      <Col xs={12} md={4} lg={3}>
                        <div className='category-items'>
                          <span><Link to={process.env.PUBLIC_URL + "/searchResult"}>تصميم برامج</Link></span>
                          <List >
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>ورش عمل متنوعة</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                          </List>
                        </div>
                      </Col>
                      <Col xs={12} md={4} lg={3}>
                        <div className='category-items'>
                          <span><Link to={process.env.PUBLIC_URL + "/searchResult"}>تصميم برامج</Link></span>
                          <List >
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>ورش عمل متنوعة</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم ثابت</List.Item>
                            <List.Item href={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>تصميم متحرك</List.Item>
                          </List>
                        </div>
                      </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
                <div className='search-link'>
                  <Link  to={process.env.PUBLIC_URL + "/searchResult"} onClick={this.eventPrevent}>
                    <Icon circular name='search' size='large' />
                  </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                  <ul>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/"} onClick={this.eventPrevent}>الرئيسية</Link>
                    </li>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/about"} onClick={this.eventPrevent}>من نحن</Link>
                    </li>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/news"} onClick={this.eventPrevent}>أخبار ومقالات</Link>
                    </li>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/inquiry"} onClick={this.eventPrevent}>أسئلة شائعة</Link>
                    </li>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/contact"} onClick={this.eventPrevent}>تواصل معنا</Link>
                    </li>

                  </ul>
                </div>
                <div className="spacer" />
                <div className="toolbar__actions">

                  <Modal trigger={
                    <Button animated color='red' className="mainButton">
                      <Button.Content visible>اشتراك</Button.Content>
                      <Button.Content hidden>
                        <Icon name='arrow right' />
                      </Button.Content>
                    </Button>}
                    centered={false}
                    >
                    <Modal.Content>
                      <Modal.Description>
                        <LoginRegister />
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </div>
                <div className="toolbar__toggle-button">
                    <DrowerToggleButton click={this.props.drawerClickHandler} />
                </div>

              </nav>

            </Container>
          </div>
        </div>

      )
    }
};
Header.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired
};
