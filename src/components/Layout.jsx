import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';
import '../style/Layout.css'

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
            <div style={{ marginLeft: '-50px', marginRight: '-50px', }} className="carousel-container">
              <Carousel news={news} />
            </div>
            <Row className="gx-4" style={{ marginBottom: '100px' }}>
              {/* Body (Left Column)*/}
              <Col xs={12} md={8}>
                <div className="mb-4" style={{ marginTop: '3rem' }}>
                  <h4 className="news-section-title">HOT NEWS</h4>
                  <div>
                    {hotNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="left" />
                    ))}
                  </div>
                </div>
                <div className="mb-4" style={{ marginTop: '3rem' }}>
                  <h4 className="news-section-title">LATEST</h4>
                  <div>
                    {latestNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="left" />
                    ))}
                  </div>
                </div>
                <div className="mb-4" style={{ marginTop: '3rem' }}>
                  <h4 className="news-section-title">RECOMEMNDATIONS</h4>
                  <div>
                    {recommendations.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="left" />
                    ))}
                  </div>
                </div>
              </Col>
              {/* End Body (Left Column)*/}

              {/* Side Bar (Right Column) */}
              <Col xs={12} md={4}>
                <div className="mb-4" style={{ marginTop: '3rem' }}>
                  <h4 className="news-section-title">POPULAR</h4>
                  <div>
                    {popularNews.map((newsItem, index) => (
                      <NewsCard key={newsItem.id || index} news={newsItem} column="right" />
                    ))}
                  </div>
                </div>
                <div className="mb-4" style={{ marginTop: '10rem' }}>
                  <h4 className="news-section-title">TOP NEWS</h4>
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
