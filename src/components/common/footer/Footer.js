import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

import './Footer.scss';


export const Footer = props => {
  return(
    <div className="footer">
      <div className="footer-head">
        <Container>
          <Row>
            <Col xs={12}  md={3} >
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"} onClick={props.prevent}>
                  <img src={logo} onClick={props.prevent} alt='ARAB-Education'/>
                </Link>
              </div>
            </Col>

            <Col xs={12} md={9}>
              <div className="footer-sitemap">
                <ul >
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"} onClick={props.prevent}>الرئيسية</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"} onClick={props.prevent}>من نحن</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/news"} onClick={props.prevent}>أخبار ومقالات</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/inquiry"} onClick={props.prevent}>أسئلة شائعة</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"} onClick={props.prevent}>تواصل معنا</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/Polices"} onClick={props.prevent}>الشروط والسياسات</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container>
          <Row>
            <Col xs={12}  md={6} >
              <div className='social'>
                <span className="facebook" >
                  <Link to="//www.facebook.com//" target='_blank'></Link>
                </span>
                <span className="tweeter" >
                  <Link to="//www.facebook.com//" target='_blank'></Link>
                </span>
                <span className="linkedin">
                  <Link to="//www.linkedin.com/company//" target='_blank'></Link>
                </span>
                <span className="youtube">
                  <Link to="//www.linkedin.com/company//" target='_blank'></Link>
                </span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="copyright">
                <p>الحقوق محفوظة لدى شركة المصرية للتقنية 2020</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>









  );
};
