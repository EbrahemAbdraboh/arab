import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import './CourseCard.scss';


export class CourseCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rateValue: 2.5
    }
  }
  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  render(){
    const {Courses} = this.props;
    const theCourses = Courses.map((Courses, index) => {
      return(
        <Col xs={12} sm={4} lg={3} key={index}>
          <div className='project-item'>
            <Link to={process.env.PUBLIC_URL + "/courseItem"} onClick={this.eventPrevent}>
              <Card>
                <div className='image-wrapper'>
                  <Card.Img variant="top" samesite="none" src={Courses.images} />
                </div>
                <Card.Body>
                  <Card.Title>{Courses.title}</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <p className='title'>{Courses.time}</p>
                      <p className='title'>  ساعات</p>
                    </Col>
                    <Col xs={6} className="rate-wrapper">
                      <StarRatings
                        rating={this.state.rateValue}
                        starRatedColor="#c62020"
                        starEmptyColor="#bababa"
                        starDimension="15px"
                        starSpacing="3px"
                      />
                    </Col>

                  </Row>

                </Card.Body>
              </Card>
            </Link>
            <div className="ribbon"><span>{Courses.price}</span></div>
          </div>
        </Col>
      )
    })
    return(

      <div className='row'>
        {theCourses}
      </div>
    );
  }
}
