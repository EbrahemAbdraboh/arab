import React from 'react';
import {Title} from '../../../common/Title/Title';
import MyCoursesSwiper from '../../../common/SwiperModule/MyCoursesSwiper/MyCoursesSwiper';
import './UserCoursesSection.scss';


export const UserCoursesSection = props =>{
  return(
    <div className='swiper-section-wrapper'>
      <Title titleType='main-title' title='دوراتي التدريبية' border='title-no-border'/>
      <MyCoursesSwiper />
    </div>

  )
}
