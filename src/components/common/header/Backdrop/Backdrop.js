import React from 'react'
import PropTypes from 'prop-types';
import './Backdrop.scss'

const Backdrop = props => {
  return (
    <div className="Backdrop" onClick={props.click}/>
  )
}

Backdrop.propTypes = {
  click: PropTypes.func.isRequired
};
export default Backdrop;
