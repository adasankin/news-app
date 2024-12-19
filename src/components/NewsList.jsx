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
    <Row className="g-3" style={{ maxWidth: '1100px', margin: '0 auto', marginBottom: '100px' }}>
      {news.map((newsItem, index) => (
        <Col xs={12} key={index} style={{ marginBottom: '1rem', borderBottom: index !== news.length - 1 ? '1px solid #ddd' : 'none' }}>
          <NewsCard news={newsItem} column="left" />
        </Col>
      ))}
    </Row>
  );
}

export default NewsList;
