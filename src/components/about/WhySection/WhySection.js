import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import { TextWithArrow } from '../../common/TextWithArrow/TextWithArrow';
import why from './why.png';
import './WhySection.scss';


const WhySection = props => {
  return(
      <SectionWithBg ImageClass='graySection'>
        <div className='profile-content'>
        <Title titleType='sub-title' title='لماذا منصة عرب' border='title-no-border'/>
          <Row>
            <Col xs={12} className='mobile-view'>
              <img src={why} alt='ARAB_about' />
            </Col>
            <Col xs={12} md={6}>
              <TextWithArrow text='قد يواجه العديد من طالبي التعليم والتدريب بعض الصعوبات في الحضور الى قاعات التدريب والتعليم بشكل منتظم وبمواعيد محددة، لذلك فهم يجدون من السهل التعلم والتدرب عبر منصة عرب في أي زمان أفي وفي أي مكان.' />
              <TextWithArrow text='دائماً ما يحتاج المتدربون التواصل مع المدربين في أوقات عديدة وهذا ما توفره منصة عرب بيسر وسهولة.' />
              <TextWithArrow text='تهتم منصة عرب بالتعاون مع أفضل الجهات التدريبية في الوطن العربي.' />
              <TextWithArrow text='يقدم برنامج عرب الدورات باللغتين العربية والإنجليزية لكي تتناسب مع غير الناطقين باللغة العربية.' />
              <TextWithArrow text='دائما ما يسعى القائمون على البرنامج للوصول إلى طلاب العلم وايصالهم بالمدربين المطلوبين في كافة المجالات.' />
              <TextWithArrow text='تساعد المنصة معاهد ومراكز التدريب على تسويق الخطة التدريبية، وكذا بالنسبة للمدربين المستقلين فيستطيعون تسويق السير الذاتية الخاصة بهم لتصل لأكبر مجتمع تدريبي ممكن.' />
            </Col>
            <Col sm={5} className='mobile-hidden'>
              <img src={why} alt='ARAB_Profile' />
            </Col>
          </Row>
        </div>
      </SectionWithBg>
  );
};

export default WhySection;
