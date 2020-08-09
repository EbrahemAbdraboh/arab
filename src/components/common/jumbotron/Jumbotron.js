import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import ParticleTwo from '../particles/ParticleTwo';
import './jumbotron.scss';


export const Jumbotron = (props) => (
    <div className='jumbo-wrapper'>
      {props.children}
      <Jumbo fluid className={props.jumboClass}>
        <Container className='massegeContainer'>
          <p className={props.massegeClass}>{props.massege}</p>
        </Container>
      </Jumbo>
      <ParticleTwo />
    </div>
)
