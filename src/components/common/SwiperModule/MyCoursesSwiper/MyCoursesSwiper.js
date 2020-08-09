import React from 'react';
import Swiper from 'react-id-swiper';
import userCourseData from "../../../../data/UserCourseCard/UserCourseCard.json";
import MyCourseCard from "./MyCourseCard/MyCourseCard";
import styles from "./MyCoursesSwiper.scss";
import 'swiper/swiper.scss';

class MyCoursesSwiper extends React.Component {
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
    const params = {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
        }
      }
    };
    return(

          <Swiper {...params} >
            {userCourseData &&
              userCourseData.map((single, key) => {
                return (
                  <MyCourseCard
                    data={single}
                    key={key}
                    styles={styles}
                    sliderClass="swiper-slide"
                    prevent={this.eventPrevent}
                  />
                );
              })}

          </Swiper>

  )}
}

export default MyCoursesSwiper;
