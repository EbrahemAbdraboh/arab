import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NewsCard.scss';


export class NewsCard extends React.Component{
  render(){
    const {Articles, prevent} = this.props;
    const theArticles = Articles.map((article, index) => {
      return(
        <Col xs={12} key={index}>
          <div className='course-item'>
            <Link to={process.env.PUBLIC_URL + "/articleSingle"} onClick={prevent}>
              <Card>
                <Row>
                  <Col xs={4} md={3}>
                    <div className='image-wrapper'>
                      <Card.Img variant="top" samesite="none" src={article.image} />
                    </div>
                  </Col>
                  <Col xs={8} md={9} >
                    <Card.Body>
                      <Card.Title>{article.name}</Card.Title>
                      <Card.Text>{article.desc}</Card.Text>
                      <Card.Footer>
                        <small className="text-muted">{article.date}</small>
                        <small className="text-muted">{article.type}</small>
                      </Card.Footer>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Link>
          </div>
        </Col>
      )
    })
    return(
      <div className='row'>
        {theArticles}
      </div>
    );
  }
}
