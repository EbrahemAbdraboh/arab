import React from 'react';
import {Title} from '../../../common/Title/Title';
import SavedCoursesSwiper from '../../../common/SwiperModule/MyCoursesSwiper/MyCoursesSwiper';
import './UserSavedSection.scss';


export const UserSavedSection = props =>{
  return(
    <div className='swiper-section-wrapper'>
      <Title titleType='main-title' title='الدورات المحفوظة' border='title-no-border'/>
      <SavedCoursesSwiper />
    </div>

  )
}
