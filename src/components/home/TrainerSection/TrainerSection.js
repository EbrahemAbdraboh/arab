import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import trainerImage from './trainerImage.png';
import './TrainerSection.scss';


export class TrainerSection extends React.Component{
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
        <SectionWithBg ImageClass='trainingSection'>
          <Row className='trainer-home-wrapper'>
            <Col xs={12} md={6}>
              <img src={trainerImage} alt="Logo" />;
            </Col>
            <Col xs={12} md={6}>
              <div className='ads-wrapwer'>
                <p>تعيين مدرب</p>
                <span>لو كنت مدرب يمكنك تسجيل الآن ونشر المادة العلمية</span>
                <MoreButton page={process.env.PUBLIC_URL + "/searchResult"} MoreWrapper="button-wrapper-white" caption="طلب" prevent={this.eventPrevent}/>
              </div>
            </Col>
          </Row>
        </SectionWithBg>
    );
  }


};

export default TrainerSection;
