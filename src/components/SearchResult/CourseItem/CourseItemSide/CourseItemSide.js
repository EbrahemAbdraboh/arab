import React from 'react';
import { Button, Icon, Image, Statistic } from 'semantic-ui-react'

import './CourseItemSide.scss';


export const CourseItemSide = props => {
  return(
    <div className='course-item-side-wrapper'>
      <div className='course-action-wrapper'>
        <div className='side-img-wrapper'>
          <img src={props.previewImage} alt='Arab training' />
        </div>
        <div className='side-action-wrapper'>
          <Button animated className='mainButton' onClick={props.openCourseHandler}>
            <Button.Content visible>انضم الى التدريب</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
        </div>
      </div>
      <div className='trainer-wrapper'>
        <div className='trainer-info'>
          <Image src={props.trainerImage} avatar />
          <div className='info-container'>
            <span>{props.trainerName}</span>
            <span>{props.trainerTitle}</span>
          </div>

        </div>
        <div className='info-statistic'>
          <Statistic.Group>
            <Statistic>
              <Statistic.Value>{props.trainerCoursesNumber}</Statistic.Value>
              <Statistic.Label>عدد الدورات</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{props.trainerStudentNumber}</Statistic.Value>
              <Statistic.Label>عدد الطلاب</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{props.trainerYearsNumber}</Statistic.Value>
              <Statistic.Label>سنوات التدريب</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </div>

      </div>
    </div>
  );
};
