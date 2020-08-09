import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import {Title} from '../../common/Title/Title';
import CategorySwiper from '../../common/SwiperModule/CategorySwiper/CategorySwiper';

import './CategorySection.scss';


export class CategorySection extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  render(){
    return(
        <SectionWithBg ImageClass='whiteSection'>
          <div className='category-content'>
            <Title titleType='sub-title' title='أهم التصنيفات'  border='title-no-border'/>
            <CategorySwiper />
          </div>
        </SectionWithBg>
    );
  }


};

export default CategorySection;
