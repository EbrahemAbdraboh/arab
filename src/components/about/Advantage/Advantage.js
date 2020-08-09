import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import { TextWithArrow } from '../../common/TextWithArrow/TextWithArrow';
import './Advantage.scss';


const Advantage = props => {
  return(
      <SectionWithBg ImageClass='whiteSection'>
        <div className='profile-content'>
        <Title titleType='sub-title' title='مزايا تهم معاهد ومراكز التدريب' border='title-no-border'/>
          <Row>
            <Col xs={12} >
              <TextWithArrow text='اتاحة نشر وتسوق الخطط التدريبية ومواعيد الدورات المزمع انعقادها. '/>
              <TextWithArrow text='وتسويق بروشور معهد ومركز التدريب بشكل منفصل.'/>
              <TextWithArrow text='نشر الأخبار والفاعليات الخاصة لمعاهد ومراكز التدريب على المنصة وشبكات التواصل التابعة له.'/>
              <TextWithArrow text='يستطيع معهد ومركز التدريب تعيين موظف مسئول عن رفع محتويات الدورات التدريبية والمواد العلمية.'/>
              <TextWithArrow text='إستقبال إستفسارات المتدربين والإجابة عليها.'/>
              <TextWithArrow text='إستقبال طلبات الإشتراك من قبل طالبي الدورات.'/>
              <TextWithArrow text='نشر السير الذاتية الخاصة بالمدربين المعتمدين من قيل المعهد أو المركز أو المدربين المستقلين.'/>

            </Col>
            <Col />

          </Row>
        </div>
      </SectionWithBg>
  );
};

export default Advantage;
