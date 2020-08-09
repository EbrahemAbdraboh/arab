import React from 'react'
import { ArabButton } from '../../arabButton/ArabButton';


export const ButtonsGroup = props => {
  return (
    <div>
      <ArabButton classes="secondButton cyrcleButton" caption="En" arabIcon='falseIcon'/>
      <ArabButton classes="mainButton" caption="إشتراك" icon="user" arabIcon='trueIcon'/>
    </div>

  )
}
