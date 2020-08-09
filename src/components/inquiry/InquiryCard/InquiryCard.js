import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Accordion } from 'semantic-ui-react'


import './InquiryCard.scss';



export class InquiryCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render(){
    const { activeIndex } = this.state
    const {Inquiry} = this.props;
    const theInquiries = Inquiry.map((inquiry, index) => {
      return(
        <div key={index}>
          <div className='inquiry-item'>
             <Accordion.Title
               active={activeIndex === {index}}
               index={index}
               onClick={this.handleClick}
             >
               {inquiry.question}
             </Accordion.Title>
             <Accordion.Content active={activeIndex === index}>
                {inquiry.answer}
             </Accordion.Content>
          </div>
        </div>
      )
    })
    return(
      <Row>
        <Col xs={12}>
          <Accordion fluid styled>
            {theInquiries}
          </Accordion>
        </Col>
      </Row>
    );
  }
}
