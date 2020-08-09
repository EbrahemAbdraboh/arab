import React from 'react';
import { Jumbotron } from '../../common/jumbotron/Jumbotron';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Title } from '../../common/Title/Title';
import { TextParagraph } from '../../common/TextParagraph/TextParagraph';
import Video from '../../common/Video/Video';


import './ArticleSingle.scss';


export class ArticleSingle extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      Articles:
        {
          "id": "1",
          "image": "https://i.postimg.cc/RFGQmSgG/Course01.png",
          "name": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "desc": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
          "date": "12/مايو/2020",
          "type": "Article Card",
          "url":"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
          "linkAttach":"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

        }

    }
  }
  render(){
      const {Articles} = this.state;
      return(
        <div className='article-single-page'>
          <Jumbotron jumboClass='news-slide' massegeClass='hideClass' />
          <SectionWithBg ImageClass='whiteSection'>
            <Row >
              <Col xs={4} md={3} className='article-header-img'>
                <img src={Articles.image} alt="Arab Training Article" />
              </Col>
              <Col xs={8} md={9} className='article-header'>
                <Title titleType='sub-title' title={Articles.name} border='title-no-border'/>
                <small className="text-muted">{Articles.date}</small>
              </Col>
              <Col xs={12}>
                <TextParagraph text={Articles.desc}/>
                <TextParagraph text={Articles.desc}/>
                <TextParagraph text={Articles.desc}/>
                <TextParagraph text={Articles.desc}/>
              </Col>
              <Col xs={12} className='article-content-img'>
                <img src={Articles.image} alt="Arab Training Article" />
              </Col>
              <Col xs={12} className='article-content-link'>
                <Link href={Articles.linkAttach} target='-blank'>
                  <Icon name='attach' />
                  <span>اضغط هنا (مسار مهم)</span>
                </Link>
              </Col>
              <Col xs={12} className='article-content-vid'>
                <Video videoURL={Articles.url} />
              </Col>

            </Row>
          </SectionWithBg>
        </div>
      )
  }
}
