import React from 'react';  
import NewsCard from './NewsCard';
import { Row, Col } from 'react-bootstrap';

function NewsList({ news }) {
  if (!news || news.length === 0) {
    return (
      <div className="text-center my-5">
        <p className="text-muted">No news available at the moment.</p>
      </div>
    );
  }

  return (
    <Row className="g-3">
      {news.map((newsItem, index) => (
        <Col xs={12} key={index}>
          <NewsCard news={newsItem} column="left" />
        </Col>
      ))}
    </Row>
  );
}

export default NewsList;
