import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { LoginRegister } from '../../LoginRegister/LoginRegister';
import { Modal, Button, Icon } from 'semantic-ui-react';
import './SideDrawer.scss';
import logo from '../../../../assets/logo.png';



const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }
    return (
      <nav className={drawerClasses}>
        <div className='drawer-header'>
          <img src={logo} to={process.env.PUBLIC_URL + "/"} alt='Arab-Logo' />
          <div className="toolbar__actions">
            <Modal trigger={
              <Button animated color='red' className="mainButton">
                <Button.Content visible>اشتراك</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
              centered={false}
              onClick={props.click}
              >
              <Modal.Content>
                <Modal.Description>
                  <LoginRegister />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        </div>
        <ul>
          <li onClick={props.click}>
            <Link  to={process.env.PUBLIC_URL + "/"} >الرئيسية</Link>
          </li>
          <li onClick={props.click}>
            <Link  to={process.env.PUBLIC_URL + "/about"} >من نحن</Link>
          </li>
          <li onClick={props.click}>
            <Link  to={process.env.PUBLIC_URL + "/news"} >أخبار ومقالات</Link>
          </li>
          <li onClick={props.click}>
            <Link  to={process.env.PUBLIC_URL + "/inquiry"} >أسئلة شائعة</Link>
          </li>
          <li onClick={props.click}>
            <Link  to={process.env.PUBLIC_URL + "/contact"} >تواصل معنا</Link>
          </li>

        </ul>
      </nav>
    )

}

SideDrawer.propTypes = {
    click: PropTypes.func.isRequired
};

export default SideDrawer;
