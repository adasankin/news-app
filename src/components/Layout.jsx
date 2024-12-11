import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';

const Layout = ({
  title,
  news,
  hotNews,
  latestNews,
  recommendations,
  popularNews,
  topNews,
  loading,
  error
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      setShowContent(true);
    }
  }, [loading, error]);

  return (
    <div>
      <Container fluid className="p-0">
        <h1 className="my-4 text-center">{title}</h1>
      </Container>

      <Container className="my-4">
        {error && (
          <Alert variant="danger" className="my-3">
            {error}
          </Alert>
        )}
        {loading && (
          <div className="text-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {showContent && !loading && !error && (
          <>
            <Carousel news={news} />
            <Row>
              {/* Body (Left Column)*/}
              <Col xs={12} md={9}>
                <div className="mb-4">
                  <h4>Hot News</h4>
                  <div>
                    {hotNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="left" />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4>Latest News</h4>
                  <div>
                    {latestNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="left" />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4>Recommendations</h4>
                  <div>
                    {recommendations.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="left" />
                    ))}
                  </div>
                </div>
              </Col>
              {/* End Body (Left Column)*/}

              {/* Side Bar (Right Column) */}
              <Col xs={12} md={3}>
                <div className="mb-4">
                  <h4>Popular</h4>
                  <div>
                    {popularNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="right" />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4>Top News</h4>
                  <div>
                    {topNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="right" />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
            {/* End Side Bar (Right Column) */}
          </>
        )}
      </Container>
    </div>
  );
};

export default Layout;
