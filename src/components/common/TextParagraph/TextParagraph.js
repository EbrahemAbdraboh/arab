import React from 'react';
import './TextParagraph.scss';


export const TextParagraph = (props) => (
  <div className='text-paragraph-wrapper'>
    <p>{props.text}</p>
  </div>
)
