import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../../common/RadioButton/RadioButton';
import faker from 'faker'
import _ from 'lodash';
import {
  Menu,
  Sidebar,
  Dropdown
} from 'semantic-ui-react'

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

const VerticalSidebar = ({ payChangeHandler, langChangeHandler, allPaySelect, freePaySelect, paiedPaySelect, allLangSelect, arabicLangSelect, englishLangSelect, animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <p>التصنيفات</p>
      <Dropdown
        placeholder='اختيار التصنيفات'
        fluid
        multiple
        search
        selection
        options={stateOptions}
      />
    </Menu.Item>
    <Menu.Item as='a'>
      <p>التحصيل</p>
      <div className="filter-column-wrapper">
        <RadioButton
              changed={ payChangeHandler }
              name='paiedOption'
              id="1"
              isSelected={allPaySelect}
              label="الكل"
              value="pay"
          />
          <RadioButton
              changed={ payChangeHandler }
              name='paiedOption'
              id="2"
              isSelected={freePaySelect}
              label="مجاني"
              value="free"
          />
          <RadioButton
              changed={ payChangeHandler }
              name='paiedOption'
              id="3"
              isSelected={ paiedPaySelect}
              label="مدفوع"
              value="paied"
          />
      </div>
    </Menu.Item>
    <Menu.Item as='a'>
      <p>اللغة</p>
      <div className="filter-column-wrapper">
        <RadioButton
              changed={ langChangeHandler }
              name='langOption'
              id="4"
              isSelected={allLangSelect}
              label="الكل"
              value="lang"
          />
          <RadioButton
              changed={ langChangeHandler }
              name='langOption'
              id="5"
              isSelected={arabicLangSelect}
              label="عربي"
              value="arabic"
          />
          <RadioButton
              changed={ langChangeHandler }
              name='langOption'
              id="6"
              isSelected={ englishLangSelect}
              label="إنجليزي"
              value="english"
          />
      </div>
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
  payChangeHandler: PropTypes.func.isRequired,
  langChangeHandler: PropTypes.func.isRequired,


}

export default VerticalSidebar;
