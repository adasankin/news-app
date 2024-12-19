import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Alert, Container } from 'react-bootstrap';
import Layout from '../components/Layout';

function NewsPage({ title, query, language }) {
  const [newsData, setNewsData] = useState({
    allNews: [],
    hotNews: [],
    latestNews: [],
    recommendations: [],
    popularNews: [],
    topNews: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apikey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    setLoading(true);
    setError('');
    axios
      .get(`https://newsdata.io/api/1/news`, {
        params: { apikey, q: query, language: language },
      })
      .then((response) => {
        if (response.data.results && response.data.results.length > 0) {
          const data = response.data.results;

          // Category
          setNewsData({
            allNews: data,
            hotNews: data,
            latestNews: data,
            recommendations: data,
            popularNews: data,
            topNews: data,
          });
        } else {
          setError('No news found.');
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 429) {
            setError('Too many requests. Please try again later.');
          } else if (err.response.status === 404) {
            setError('Bad request. Please try again later.');
          } else {
            setError(`An error occurred while fetching news.`);
          }
        } else if (err.request) {
          setError('Network error. Please check your connection and try again.');
        } else {
          setError(`Unexpected error: ${err.message}`);
        }
      })
      .finally(() => setLoading(false));
  }, [apikey, query, language]);

  return (
    <Layout
      title={title}
      news={newsData.allNews}
      hotNews={newsData.hotNews}
      latestNews={newsData.latestNews}
      recommendations={newsData.recommendations}
      popularNews={newsData.popularNews}
      topNews={newsData.topNews}
      loading={loading}
      error={error}
    >
      <Container>
        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : error ? (
          <Alert variant="danger" className="my-3">
            {error}
          </Alert>
        ) : newsData.allNews.length === 0 ? (
          <Alert variant="info" className="my-3">
            No news available at the moment.
          </Alert>
        ) : (
          <div className="news-container">
            {newsData.allNews.map((news, index) => (
              <div key={index} className="news-item">
                <h5>{news.title}</h5>
                <p>{news.description}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default NewsPage;
