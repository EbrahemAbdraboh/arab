import React from 'react'
import PropTypes from 'prop-types';
import './DrowerToggleButton.scss'

const DrowerToggleButton = props => {
	return(
		<button className="toggle-button" onClick={props.click}>
	    <div className="toggle-button__line" />
	    <div className="toggle-button__line" />
	    <div className="toggle-button__line" />
	  </button>
	)

};
DrowerToggleButton.propTypes = {
    click: PropTypes.func.isRequired
};

export default DrowerToggleButton;
