import React from 'react';
import { Title } from '../../../../common/Title/Title';
import { TextWithArrow } from '../../../../common/TextWithArrow/TextWithArrow';
import './CourseContentTobics.scss';

export const CourseContentTobics = props => {
  return(
    <div className='tobics-wrapper'>
      <Title titleType='sub-sub-title' title={props.topicName} border='title-no-border'/>
      <div className="tobic-item">
        <TextWithArrow text='فهم واسع وشامل لعلم الحاسوب والبرمجة' />
        <TextWithArrow text='مواضيع مختلفة مثل: التجريد، الخوارزميات، هياكل البيانات، إدارة الموارد، الأمان، هندسة البرمجيات، وتطوير الويب.' />
        <TextWithArrow text='دراية بعدد من برامج البرمجة مثل C، بايثون، SQL، JavaScript، بالإضافة إلى CSS & HTML' />
        <TextWithArrow text='تطبيق كل ما تعلمته في مشاريع وتحديات عملية واقعية' />
        <TextWithArrow text='كيف تقوم بتطوير وعرض البرنامج الخاص بك لباقي زملائك' />
      </div>
    </div>
  );
};
