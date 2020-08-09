import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import Data from '../../data/profileData/profileData.json';
import {ProfileSide} from './ProfileSide/ProfileSide';
import {ProfileContent} from './ProfileContent/ProfileContent';

export class Profile extends React.Component{
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
      <div>
        <Jumbotron jumboClass='page-slide' />
        <SectionWithBg ImageClass='whiteSection'>
          <Row>
            <Col xs={12} md={5} lg={4}>
              <ProfileSide
                profileImage={Data.profileImage}
                userName={Data.userName}
                userCoursesNumber={Data.userCoursesNumber}
                userCoursesSaved={Data.userCoursesSaved}
                teacherCourses={Data.teacherCourses}

              />
            </Col>
            <Col xs={12} md={7} lg={8} >
              <ProfileContent />
            </Col>
          </Row>
        </SectionWithBg>
      </div>
    )
  }
}
