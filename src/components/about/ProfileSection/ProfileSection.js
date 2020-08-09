import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import { TextWithArrow } from '../../common/TextWithArrow/TextWithArrow';
import profile from './profile.png';
import './ProfileSection.scss';


const ProfileSection = props => {
  return(
      <SectionWithBg ImageClass='whiteSection'>
        <div className='profile-content'>
        <Title titleType='sub-title' title='ما هي منصة عرب' border='title-no-border'/>
          <Row>
            <Col xs={12} className='mobile-view'>
              <img src={profile} alt='ARAB_Profile' />
            </Col>
            <Col xs={12} md={6}>
              <TextWithArrow text='منصة عرب هي منصة تعليمية إلكترونية عربية تصل بين المدرب والمتدرب ومراكز ومعاهد التدريب، وهي من منتجات مركز المستقبل الخليجي للتدريب بالتعاون مع الشركة المصرية لتطوير الأعمال EBDCO' />
              <TextWithArrow text='منصة عرب (Web app) هو تطبيق ويب للتدريب والتعليم عن بُعد يتناسب مع جميع المستخدمين سواء مستخدمي الجوالات أو الحاسب.' />
              <TextWithArrow text='منصة عرب تعتمد على مبدأ التواصل الفعال بين مراكز ومعاهد التدريب أو المدربين المستقلين وبين الباحثين عن البرامج التعليمية والتدريبية حول العالم.' />
            </Col>
            <Col />
            <Col sm={5} className='mobile-hidden'>
              <img src={profile} alt='ARAB_Profile' />
            </Col>
          </Row>
        </div>
      </SectionWithBg>
  );
};

export default ProfileSection;
