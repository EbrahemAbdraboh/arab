import React from 'react';
import { Container } from 'react-bootstrap';
import './SectionWithBg.scss';


const SectionWithBg = (props) => {
  return(
    <div styles={{position: 'relative'}}>
      <div className={props.ImageClass}>
        <div className='sectionWrapper'>
          <Container>
            {props.children}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SectionWithBg;
