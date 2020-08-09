import React from 'react';
import Swiper from 'react-id-swiper';
import trainerCoursesData from "../../../../data/UserCourseCard/UserCourseCard.json";
import TrainerCoursesCard from "./TrainerCoursesCard/TrainerCoursesCard";
import styles from "./TrainerCoursesSwiper.scss";
import 'swiper/swiper.scss';

class TrainerCoursesSwiper extends React.Component {
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
            {trainerCoursesData &&
              trainerCoursesData.map((single, key) => {
                return (
                  <TrainerCoursesCard
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

export default TrainerCoursesSwiper;
