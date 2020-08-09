import React from 'react';
// import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './MoreButton.scss';


export const MoreButton = (props) => (
    <div className={props.MoreWrapper}>
      <Link to={props.page} className="btn btn-primary btn-lg " onClick={props.prevent}>{props.caption}</Link>
    </div>
)
