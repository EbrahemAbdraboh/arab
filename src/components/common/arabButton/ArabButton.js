import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './arabButton.scss';


export const ArabButton = props => {
	return(
    <Button className={props.classes}  >
      <Icon name={props.icon} className={props.arabIcon}/> {props.caption}
    </Button>
	)
}
