import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { Spinner, Alert, Container } from 'react-bootstrap';
import Layout from '../components/Layout';

function Indonesia() {
  const [allNews, setAllNews] = useState([]);
  const [hotNews, setHotNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apikey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    setLoading(true);
    setError('');
    axios
      .get(`https://newsdata.io/api/1/news?apikey=${apikey}&language=id`)
      .then((response) => {
        if (response.data.results && response.data.results.length > 0) {
          const data = response.data.results;
          setAllNews(data);

          // Category
          setHotNews(data);
          setLatestNews(data);
          setRecommendations(data);
          setPopularNews(data);
          setTopNews(data);
        } else {
          setError('No news found.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setError('Too many requests. Please try again later.');
        } else {
          setError('An error occurred while fetching news.');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout 
      title="Indonesia News"
      news={allNews}
      hotNews={hotNews}
      latestNews={latestNews}
      recommendations={recommendations}
      popularNews={popularNews}
      topNews={topNews}
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
        ) : allNews.length === 0 ? (
          <Alert variant="info" className="my-3">
            No news available at the moment.
          </Alert>
        ) : (
          <div></div>
        )}
      </Container>
    </Layout>
  );
}


export default Indonesia;
