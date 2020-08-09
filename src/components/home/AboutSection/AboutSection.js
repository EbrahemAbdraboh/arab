import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import { TextWithArrow } from '../../common/TextWithArrow/TextWithArrow';
import WhySection from './whySection.png';
import './AboutSection.scss';


export class AboutSection extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  render(){
    return(
        <SectionWithBg ImageClass='graySection'>
          <div className='profile-content'>

            <Row>
              <Col xs={12} className='mobile-view'>
                <img src={WhySection} alt='ARAB_about' />
              </Col>
              <Col xs={12} md={6}>
                <Title titleType='sub-title' title='لماذا منصة عرب' border='title-no-border'/>
                <TextWithArrow text='قد يواجه العديد من طالبي التعليم والتدريب بعض الصعوبات في الحضور الى قاعات التدريب والتعليم بشكل منتظم وبمواعيد محددة، لذلك فهم يجدون من السهل التعلم والتدرب عبر منصة عرب في أي زمان أفي وفي أي مكان.' />
                <TextWithArrow text='دائماً ما يحتاج المتدربون التواصل مع المدربين في أوقات عديدة وهذا ما توفره منصة عرب بيسر وسهولة.' />
                <MoreButton page={process.env.PUBLIC_URL + "/about"} MoreWrapper="button-wrapper button-side" caption="المزيد" prevent={this.eventPrevent}/>
              </Col>
              <Col sm={6} className='mobile-hidden'>
                <img src={WhySection} alt='ARAB_Profile' />
              </Col>
            </Row>
          </div>
        </SectionWithBg>
    );
  }


};

export default AboutSection;
