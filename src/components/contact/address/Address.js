import React from 'react';
import { Title } from '../../common/Title/Title';
import { Header, Icon } from 'semantic-ui-react'
import './Address.scss';


export const Address = (props) => (
    <div className="address-wrapper">
      <Title titleType='sub-sub-title' title={props.contry} border='title-no-border' />
      <Header as='h4'>
        <Icon name='map marker alternate' />
        <Header.Content>{props.address}</Header.Content>
      </Header>
      <Header as='h4'>
        <Icon name='phone' />
        <Header.Content>{props.phone}</Header.Content>
      </Header>
    </div>


)
