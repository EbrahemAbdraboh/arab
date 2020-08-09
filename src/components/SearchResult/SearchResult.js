import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import { CourseCard } from './CourseCard/CourseCard';
import VerticalSidebar from './VerticalSidebar/VerticalSidebar';
import SearchBox from '../common/SearchBox/SearchBox';

import './SearchResult.scss';

import {
  Button,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react'



export class SearchResult extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      payChecked: 'pay',
      langChecked: 'lang',
      filterFiled: '',
      searchFiled: '',
      langFiled: '',
      animation: 'slide out',
      direction: 'right',
      dimmed: false,
      visible: false,
      Courses: [
        {
          images: 'https://i.postimg.cc/RFGQmSgG/Course01.png',
          title: 'تحليل مالي الجزء السادس',
          price: 'مجاني',
          time: '3:00',
          rateValue: '4.5',
          type:'free pay',
          lang: 'arabic lang'
        },
        {
          images:'https://i.postimg.cc/DzrPCds9/Course02.png',
          title: 'إدارة أعمال متقدم المستوى الخامس',
          price: '252$',
          time: '3:00',
          rateValue: '2.5',
          type:'paied pay',
          lang: 'arabic lang'
        },
        {
          images:'https://i.postimg.cc/CKT4H6ZC/Course03.png',
          title: 'تحليل مالي الجزء السادس',
          price: 'مجاني',
          time: '3:00',
          rateValue: '3',
          type: 'free pay',
          lang: 'arabic lang'
        },
        {
          images:'https://i.postimg.cc/RCsQb06Z/Course04.png',
          title: 'إدارة أعمال متقدم المستوى الخامس',
          price: '30$',
          time: '3:00',
          rateValue: '4.5',
          type:'paied pay',
          lang: 'arabic lang'

        },
        {
          images:'https://i.postimg.cc/W3s6xFwh/Course05.png',
          title: 'موارد بشرية وسلوك إنساني الجزء الرابع',
          price: '252$',
          time: '3:00',
          rateValue: '2.5',
          type:'paied pay',
          lang: 'arabic lang'

        },
        {
          images:'https://i.postimg.cc/PrCzGkYz/Course06.png',
          title: 'إدارة أعمال متقدم المستوى الخامس',
          price: 'مجاني',
          time: '3:00',
          rateValue: '3',
          type: 'free pay',
          lang: 'english lang'

        },
        {
          images:'https://i.postimg.cc/gjJykC5p/Course07.png',
          title: 'إدارة أعمال متقدم المستوى الخامس',
          price: '30$',
          time: '3:00',
          rateValue: '4.5',
          type:'paied pay',
          lang: 'english lang'

        },
        {
          images:'https://i.postimg.cc/XqzfZ2SC/Course08.png',
          title: 'إدارة أعمال متقدم المستوى الخامس',
          price: '252$',
          time: '3:00',
          rateValue: '2.5',
          type:'paied pay',
          lang: 'english lang'

        },
      ]
    }
  }
  payChangeHandler = (event) => {
    this.setState({
      payChecked: event.target.value,
      filterFiled: event.target.value

    })
  }
  langChangeHandler = (event) => {
    this.setState({
      langChecked: event.target.value,
      langFiled: event.target.value

    })
  }

  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }))


  handleDirectionChange = (direction) => () =>
    this.setState({ direction, visible: false })

  render(){
    const { filterFiled, searchFiled, langFiled, Courses, payChecked, langChecked, animation, dimmed, direction, visible } = this.state;
    const filterCourses = Courses.filter(Course =>
        Course.title.toLowerCase().includes(searchFiled.toLowerCase())
      );
    const radioCourses = filterCourses.filter(Radio =>
        Radio.type.toLowerCase().includes(filterFiled.toLowerCase())
      );
    const langCourses = radioCourses.filter(Language =>
        Language.lang.toLowerCase().includes(langFiled.toLowerCase())
      );

    const vertical = direction === 'bottom' || direction === 'top'
    return(
      <div>
        <Jumbotron jumboClass='page-slide' />
        <SectionWithBg ImageClass='whiteSection'>
        <div className='filter-wrapper'>
          <Button
            icon labelPosition='right'
            disabled={vertical}
            onClick={this.handleAnimationChange('slide out')}
            >
            <Icon name='filter' />
            خيارات محددة
          </Button>
          <SearchBox searchBoxOnchange={e => this.setState({searchFiled: e.target.value})}/>
        </div>
        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
            payChangeHandler={this.payChangeHandler}
            langChangeHandler={this.langChangeHandler}
            allPaySelect={ payChecked === 'pay' }
            freePaySelect={ payChecked === 'free' }
            paiedPaySelect={ payChecked === 'paied' }
            allLangSelect={ langChecked === 'lang' }
            arabicLangSelect={ langChecked === 'arabic' }
            englishLangSelect={ langChecked === 'english' }
            />
          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <CourseCard
                Courses={langCourses}
                ratings={Courses.rateValue}

                />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

        </SectionWithBg>
      </div>
    )
  }
}
