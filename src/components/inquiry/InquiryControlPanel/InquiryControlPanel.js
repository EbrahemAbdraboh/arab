import React from 'react'
import { Container } from 'react-bootstrap';
import SearchBox from '../../common/SearchBox/SearchBox';
import './InquiryControlPanel.scss';



export class InquiryControlPanel extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }



  render(){
    return(


        <div className='control-panel-wrapper'>
          <Container>
            <div className="search-content">
              <SearchBox searchBoxOnchange={this.props.searchBoxOnchange}/>
            </div>
          </Container>
        </div>

    )
  }
}
