import React from 'react';
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import { Row, Col } from 'react-bootstrap';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import { Title } from '../common/Title/Title';
import { Header, Icon, Input, Form, TextArea } from 'semantic-ui-react'
import { ArabButton } from '../common/arabButton/ArabButton';
import { Address } from './address/Address';
import './contact.scss';

export const Contact = (props) => (
  <div className='contact-page'>
    <Jumbotron jumboClass='contact-slide' massegeClass='hideClass' massege=''/>
    <SectionWithBg ImageClass='whiteSection'>
      <Title titleType='main-title' title='تواصل معنا' border='title-no-border' />
      <div className='contact-info'>
        <Row>
          <Col xs={12} md={6}>
            <Row className="web-mail-info">
              <Col md={12} lg={6}>
                <Header as='h4'>
                  <Icon name='globe' />
                  <Header.Content>www.arab-education.com</Header.Content>
                </Header>
              </Col>
              <Col md={12} lg={6}>
                <Header as='h4'>
                  <Icon name='mail' />
                  <Header.Content>info@arab-education.com</Header.Content>
                </Header>
              </Col>
              <Col xs={12}>
                <Input placeholder='أكتب بريدك الإلكتروني'>
                  <input />
                </Input>
              </Col>
              <Col xs={12}>
                <Form>
                  <TextArea placeholder='أكتب رسالتك أو استفسارك وانتظر الرد على بريدك الإلكتروني' style={{ minHeight: 148 }} />
                </Form>
              </Col>
              <Col xs={12}>
                <ArabButton classes="secondButton submitButton" caption="إرسال" arabIcon='falseIcon'/>
              </Col>


            </Row>
          </Col>
          <Col xs={12} md={6} className="adress-container">
            <Address contry="بولندا" address="103 مقاطعة بيجل - بينجام ـ بولندا" phone="20105068070100+"/>
            <Address contry="السعودية" address="103 مقاطعة بيجل - بينجام ـ بولندا" phone="20105068070100+"/>
            <Address contry="مصر" address="103 مقاطعة بيجل - بينجام ـ بولندا" phone="20105068070100+"/>
          </Col>

        </Row>
      </div>



    </SectionWithBg>
  </div>
)
