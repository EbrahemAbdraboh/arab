import React from 'react';
import './Title.scss';


export const Title = (props) => (
  <div className='title-wrapper'>
    <p className={props.titleType}>{props.title}</p>
    <div className={props.border}></div>
  </div>
)
