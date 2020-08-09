import PropTypes from "prop-types";
import React from "react";
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ data, styles, sliderClass, prevent }) => {
  return (
    <div className={`col-lg-3 ${sliderClass ? sliderClass : ""}`}>
      <Link to={process.env.PUBLIC_URL + "/searchResult"} onClick={prevent}>
        <div className="category-single">
          <div className='image-wrapper'>
            <img src={data.image} samesite="none" alt="Arab-category" />;
          </div>
          <p>{data.name}</p>
        </div>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object,

};

export default CategoryCard;
