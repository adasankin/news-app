import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveNews, removeNews } from '../store/actions';
import { getSavedNews } from '../store/selectors'
import { formatDistanceToNow } from 'date-fns';
import '../style/NewsCard.css';

function NewsCard({ news, column }) {
  const dispatch = useDispatch();
  const savedNews = useSelector(getSavedNews);

  const isSaved = Array.isArray(savedNews) && savedNews.some((item) => item.article_id === news.article_id);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeNews(news.article_id));
    } else {
      dispatch(saveNews(news));
    }
  };

  const aSide = column === 'left';

  const cardStyle = aSide
    ? { marginBottom: '1rem', width: '100%' }
    : { marginBottom: '1rem', width: '21rem' };

  const formattedDate = formatDistanceToNow(new Date(news.pubDate), { addSuffix: true }).replace('about', '');

  return (
    <Card
      className={`news-card ${isSaved ? 'border-success' : 'border-secondary'}`}
      style={cardStyle}
    >
      <Row className="news-card-img-container">
        {/* Image */}
        <Col xs={12} md={aSide ? 4 : 4}>
          <Card.Img
            variant="top"
            src={news.image_url || 'https://via.placeholder.com/150'}
            alt="News Thumbnail"
            className="news-card-img"
          />
        </Col>
        {/* End Image */}

        {/* Content */}
        <Col xs={12} md={aSide ? 8 : 8}>
          <Card.Body>
            <Card.Title className={aSide ? 'fs-5' : 'fs-6'}>
              {news.title || 'No Title Available'}
            </Card.Title>

            {aSide && (
              <>
                <Card.Subtitle className="mb-2 text-muted">
                <a href={news.source_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                  {news.source_name || ''}
                </a>
                <span className="text-muted"> | {formattedDate}</span>
                </Card.Subtitle>
                <Card.Text className="description">
                  {news.description || 'No description available for this news.'}
                </Card.Text>
                {news.link ? (
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="me-2">
                      Read More
                    </Button>
                  </a>
                ) : (
                  <Button variant="secondary" disabled className="me-2">
                    No Link
                  </Button>
                )}
                <Button variant={isSaved ? 'danger' : 'success'} onClick={handleSave}>
                  {isSaved ? 'Un-Save' : 'Save'}
                </Button>
              </>
            )}
          </Card.Body>
        </Col>
      </Row>
      {/* End Content */}
    </Card>
  );
}

export default NewsCard;
