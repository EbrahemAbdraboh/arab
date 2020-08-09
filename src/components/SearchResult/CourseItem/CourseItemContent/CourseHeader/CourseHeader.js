import React from 'react';
import { Breadcrumb, Icon, Label } from 'semantic-ui-react';
import { Title } from '../../../../common/Title/Title';
import StarRatings from 'react-star-ratings';
import './CourseHeader.scss';


export const CourseHeader = props => {
  return(
    <div>
      <div className='course-header'>
        <Breadcrumb>
          <Breadcrumb.Section link to={process.env.PUBLIC_URL + "/searchResult"}>التصنيف العام</Breadcrumb.Section>
          <Breadcrumb.Divider icon='left angle' />
          <Breadcrumb.Section active>
            التصنيف الفرعي
          </Breadcrumb.Section>
        </Breadcrumb>
        <Title titleType='sub-title' title={props.courseName} border='title-no-border'/>
        <div className="date-start">
          <span className="title">موعد البدء</span>
          <span className="text">{props.dateStart}</span>
        </div>
        <div className="header-numbers">
          <Label>
            <Icon name='dollar' /> مجاني
          </Label>
          <Label>
            <Icon name='clock outline' /> 5 ساعات
          </Label>
          <div className="rate-wrapper">
            <span className="text">({props.studentRateNumber}) متدرب</span>
            <StarRatings
              rating={props.rateValue}
              starRatedColor="#c62020"
              starEmptyColor="#bababa"
              starDimension="15px"
              starSpacing="3px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
