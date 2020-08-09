import React from 'react';
import './TextWithArrow.scss';


export const TextWithArrow = (props) => (
  <ul className='text-with-arrow-wrapper'>
    <li><p>{props.text}</p></li>
  </ul>
)
