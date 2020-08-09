import React from 'react';
import { Icon, Input } from 'semantic-ui-react'
import { Container } from 'react-bootstrap';

import './Search.scss';


export const Search = (props) => (
    <div className='search-wrapper'>
      <Container>
        <Input
          icon={<Icon name='search' inverted circular link />}
          placeholder='ماذا تريد أن تتعلم'
          size='huge'
        />
      </Container>
    </div>
)
