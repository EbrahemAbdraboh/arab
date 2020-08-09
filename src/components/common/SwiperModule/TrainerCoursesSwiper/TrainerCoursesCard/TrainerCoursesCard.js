import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import './TrainerCoursesCard.scss';

const TrainerCoursesCard = ({ data, styles, sliderClass, prevent }) => {
  return (
    <div className={`col-lg-4 ${sliderClass ? sliderClass : ""}`}>
        <div className='project-item'>
        <Link to={process.env.PUBLIC_URL + "/courseItem"} onClick={prevent}>
          <Card>
            <div className='image-wrapper'>
              <Card.Img variant="top" samesite="none" src={data.images} />
            </div>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Row>
                <Col xs={6}>
                  <p className='title'>{data.time}</p>
                  <p className='title'>  ساعات</p>
                </Col>
                <Col xs={6} className="rate-wrapper">
                  <StarRatings
                    rating={3}
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
        <div className="ribbon"><span>{data.price}</span></div>
      </div>
    </div>
  );
};

TrainerCoursesCard.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object,

};

export default TrainerCoursesCard;
