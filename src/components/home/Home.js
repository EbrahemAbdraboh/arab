import React from 'react';
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import { CoursesSection } from './CoursesSection/CoursesSection';
import AboutSection from './AboutSection/AboutSection';
import { CategorySection } from './CategorySection/CategorySection';
import TrainerSection from './TrainerSection/TrainerSection';
import { Search } from '../common/Search/Search';


export const Home = (props) => (
  <div>
    <Jumbotron jumboClass='home-slide' massegeClass='showClass' massege='انضم الى منصة عرب واشترك في العديد من الدورات التدريبية'>
      <div style={{position:"absolute", width: '100%', height: '100%'}}>
        <Search />
      </div>
    </Jumbotron>
    <CoursesSection />
    <AboutSection />
    <CategorySection />
    <TrainerSection />
  </div>
)
