import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import RadioButton from '../../common/RadioButton/RadioButton';
import SearchBox from '../../common/SearchBox/SearchBox';
import './NewsControlPanel.scss';



export class NewsControlPanel extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }



  render(){
    return(
      <div className='control-panel-wrapper'>
        <Container>
          <Row>
            <Col xs={12} lg={6} className='filter-content'  >
              <RadioButton
                    name='newsItem'
                    changed={ this.props.radioChangeHandler }
                    id="1"
                    isSelected={this.props.allSelect}
                    label="الكل"
                    value="Card"
                />
                <RadioButton
                    name='newsItem'
                    changed={ this.props.radioChangeHandler }
                    id="2"
                    isSelected={this.props.newsSelect}
                    label="الأخبار"
                    value="News"
                />
                <RadioButton
                    name='newsItem'
                    changed={ this.props.radioChangeHandler }
                    id="3"
                    isSelected={this.props.articleSelect}
                    label="المقالات"
                    value="Article"
                />
            </Col>
            <Col xs={12} lg={6} className='search-content' >
              <SearchBox searchBoxOnchange={this.props.searchBoxOnchange}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
