import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import {NewsCard} from './NewsCard/NewsCard';
import {NewsControlPanel} from './NewsControlPanel/NewsControlPanel';



export class News extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      checked: 'Card',
      filterFiled: '',
      searchFiled: '',
      Articles: [
        {
          "id": "1",
          "image": "https://i.postimg.cc/RFGQmSgG/Course01.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "Article Card"
        },
        {
          "id": "2",
          "image": "https://i.postimg.cc/DzrPCds9/Course02.png",
          "name": "التموين تدرج الكمامات القماش ضمن سلع البطاقات.. والتوزيع أول الأسبوع المقبل",
          "desc": "التموين تدرج الكمامات القماش ضمن سلع البطاقات.. والتوزيع أول الأسبوع المقبل",
          "date": "12/مايو/2020",
          "type": "News Card"
        },
        {
          "id": "3",
          "image": "https://i.postimg.cc/CKT4H6ZC/Course03.png",
          "name": "التعليم: لم يحدث أى تسريب لامتحانات الثانوية العامة.. الوزارة: مزاعم صفحات الغش هدفها تحقيق مكاسب مادية.. رئيس الامتحانات: نسبة المستفيدين من الغش الإلكترونى قليلة.. وأى محاولات للتسريب يتم ضبطها خلال دقائق",
          "desc": "التعليم: لم يحدث أى تسريب لامتحانات الثانوية العامة.. الوزارة: مزاعم صفحات الغش هدفها تحقيق مكاسب مادية.. رئيس الامتحانات: نسبة المستفيدين من الغش الإلكترونى قليلة.. وأى محاولات للتسريب يتم ضبطها خلال دقائق",
          "date": "12/مايو/2020",
          "type": "News Card"
        },
        {
          "id": "4",
          "image": "https://i.postimg.cc/RCsQb06Z/Course04.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "Article Card"
        },
        {
          "id": "5",
          "image": "https://i.postimg.cc/W3s6xFwh/Course05.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "News Card"
        },
        {
          "id": "6",
          "image": "https://i.postimg.cc/PrCzGkYz/Course06.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "Article Card"
        },
        {
          "id": "7",
          "image": "https://i.postimg.cc/gjJykC5p/Course07.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "News Card"
        },
        {
          "id": "8",
          "image": "https://i.postimg.cc/XqzfZ2SC/Course08.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "News Card"
        },
        {
          "id": "9",
          "image": "https://i.postimg.cc/RCsQb06Z/Course04.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "Article Card"
        }
      ]
    }
  }


// Radio Filters

    radioChangeHandler = (event) => {
      this.setState({
        checked: event.target.value,
        filterFiled: event.target.value
      })


    }
    eventPrevent () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

  render(){
    const { filterFiled, searchFiled, Articles, checked } = this.state;
    const filterArticles = Articles.filter(Article =>
        Article.desc.toLowerCase().includes(searchFiled.toLowerCase())
      );
    const radioArticles = filterArticles.filter(Radio =>
        Radio.type.toLowerCase().includes(filterFiled.toLowerCase())
      );

    return(
      <div>
        <Jumbotron jumboClass='page-slide' massegeClass='hideClass' massege='نعتمد على مبدأ التواصل الفعال'/>
        <SectionWithBg ImageClass='whiteSection'>
          <NewsControlPanel
            searchBoxOnchange={e => this.setState({searchFiled: e.target.value})}
            radioChangeHandler={this.radioChangeHandler}
            allSelect={ checked === 'Card' }
            newsSelect={ checked === 'News' }
            articleSelect={ checked === 'Article' }
          />
          <div className='courses-wrapper'>
            <NewsCard Articles={radioArticles} prevent={this.eventPrevent}/>
          </div>
        </SectionWithBg>
      </div>
      )
  }
}