import React from 'react';
import {CourseHeader} from './CourseHeader/CourseHeader';
import {CourseContentTobics} from './CourseContentTobics/CourseContentTobics';
import {CourseContentTabs} from './CourseContentTabs/CourseContentTabs';



export const CourseItemContent = props => {
  return(
    <div>
      <CourseHeader
        courseName={props.courseName}
        dateStart={props.dateStart}
        rateValue={props.rateValue}
        studentRateNumber={props.studentRateNumber}
      />
      <CourseContentTobics
        topicName='ما الاستفادة من هذا التدريب'
      />
      <CourseContentTabs
        courseDesc={props.courseDesc}
        dateStart={props.dateStart}
        lectureNumber={props.lectureNumber}
        totalLectures={props.totalLectures}
        lock={props.lock}
        lockData={props.lockData}
      />
      <CourseContentTobics
        topicName='متطلبات اجتياز التدريب'
      />

    </div>
  );
};
