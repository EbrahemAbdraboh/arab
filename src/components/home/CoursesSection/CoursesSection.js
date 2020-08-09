import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import {CourseCard} from '../../common/CourseCard/CourseCard'

import './CoursesSection.scss';


export class CoursesSection extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        Courses: [
          {
            images: 'https://i.postimg.cc/RFGQmSgG/Course01.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: 'مجاني',
            time: '3:00',
            rateValue: '4.5',
          },
          {
            images:'https://i.postimg.cc/DzrPCds9/Course02.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: '252$',
            time: '3:00',
            rateValue: '2.5',

          },
          {
            images:'https://i.postimg.cc/CKT4H6ZC/Course03.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: 'مجاني',
            time: '3:00',
            rateValue: '3',

          },
          {
            images:'https://i.postimg.cc/RCsQb06Z/Course04.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: '30$',
            time: '3:00',
            rateValue: '4.5',

          },
          {
            images:'https://i.postimg.cc/W3s6xFwh/Course05.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: '252$',
            time: '3:00',
            rateValue: '2.5',

          },
          {
            images:'https://i.postimg.cc/PrCzGkYz/Course06.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: 'مجاني',
            time: '3:00',
            rateValue: '3',

          },
          {
            images:'https://i.postimg.cc/gjJykC5p/Course07.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: '30$',
            time: '3:00',
            rateValue: '4.5',

          },
          {
            images:'https://i.postimg.cc/XqzfZ2SC/Course08.png',
            title: 'إدارة أعمال متقدم المستوى الخامس',
            price: '252$',
            time: '3:00',
            rateValue: '2.5',

          },
        ]
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
        <div className='Courses-wrapper'>
          <Title titleType='main-title' title='الدورات الشائعة' border='title-no-border' />
          <div className='Courses-content'>
            <CourseCard Courses={this.state.Courses} rateValue={this.state.Courses.rateValue}/>
          </div>
          <MoreButton page={process.env.PUBLIC_URL + "/searchResult"} MoreWrapper="button-wrapper" caption="المزيد" prevent={this.eventPrevent}/>
        </div>
        </SectionWithBg>
    );
  }
}

export default CoursesSection;
