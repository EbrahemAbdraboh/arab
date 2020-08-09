import React from 'react';
import {Title} from '../../../common/Title/Title';
import TrainerCoursesSwiper from '../../../common/SwiperModule/TrainerCoursesSwiper/TrainerCoursesSwiper';
import './TrainerCoursesSection.scss';


export const TrainerCoursesSection = props =>{
  return(
    <div className='swiper-section-wrapper'>
      <Title titleType='main-title' title='دوراتي كمدرب' border='title-no-border'/>
      <TrainerCoursesSwiper />
    </div>

  )
}
