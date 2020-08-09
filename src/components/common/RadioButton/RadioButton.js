import React from "react";
import "./RadioButton.scss";

const RadioButton = (props) => {
    return (
        <div className="RadioButton">
            <input id={props.id} name={props.name} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;
