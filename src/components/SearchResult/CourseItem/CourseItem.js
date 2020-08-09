import React from 'react'
import { Jumbotron } from '../../common/jumbotron/Jumbotron';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import { CourseItemSide } from './CourseItemSide/CourseItemSide';
import { CourseItemContent } from './CourseItemContent/CourseItemContent';
import Data from '../../../data/courseItemData/courseItemData.json';



export class CourseItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      lock: 'lock',
      lockData: 'lockData'
    }
  }
  openCourseHandler () {
    this.setState({ lock: 'play', lockData: 'openData'})
    };
  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  render(){
    const { lock, lockData } = this.state;
    return(
      <div>
        <Jumbotron jumboClass='page-slide' />
        <SectionWithBg ImageClass='whiteSection'>
          <Row>
            <Col xs={12} md={5} lg={4}>
              <CourseItemSide
                previewImage={Data.previwImage}
                trainerImage={Data.trainerImage}
                trainerName={Data.trainerName}
                trainerTitle={Data.trainerTitle}
                trainerCoursesNumber={Data.trainerCoursesNumber}
                trainerStudentNumber={Data.trainerStudentNumber}
                trainerYearsNumber={Data.trainerYearsNumber}
                openCourseHandler= {()=> this.openCourseHandler()}


              />
            </Col>
            <Col xs={12} md={7} lg={8}>
              <CourseItemContent
                courseName={Data.courseName}
                dateStart={Data.dateStart}
                rateValue={Data.rateValue}
                studentRateNumber={Data.studentRateNumber}
                courseDesc={Data.courseDesc}
                lectureNumber={Data.lectureNumber}
                totalLectures={Data.totalLectures}
                lock={lock}
                lockData={lockData}

              />
            </Col>
          </Row>
        </SectionWithBg>
      </div>
    )
  }
}
