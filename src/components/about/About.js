import React from 'react';
import axios from 'axios';
import aboutAPI from '../../API/aboutAPI';
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import ProfileSection from './ProfileSection/ProfileSection';
import WhySection from './WhySection/WhySection';
import Advantage from './Advantage/Advantage';



export class About extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      AboutData: []
    }
  }
  componentDidMount() {
    aboutAPI.get(`/aboutus`)
      .then(res => {
        const AboutData = res.data;
        this.setState({ AboutData });
        console.log(AboutData);
      })

  }

  render(){
    const { AboutData } = this.state;
    return(
      <div >
        <Jumbotron jumboClass='page-slide' massegeClass='hideClass' massege='يناسب جميع المستخدمين' />
        <ProfileSection />
        <WhySection />
        <Advantage />
      </div>
    );
  }
}
