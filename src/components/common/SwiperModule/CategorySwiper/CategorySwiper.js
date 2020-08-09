import React from 'react';
import Swiper from 'react-id-swiper';
import categoryData from "../../../../data/categoryData/categoryData.json";
import CategoryCard from "./CategoryCard/CategoryCard";
import styles from "./CategorySwiper.scss";
import 'swiper/swiper.scss';

class CategorySwiper extends React.Component {
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
          slidesPerView: 4
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
            {categoryData &&
              categoryData.map((single, key) => {
                return (
                  <CategoryCard
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

export default CategorySwiper;
