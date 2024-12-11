import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap'; 
import NewsCard from '../components/NewsCard'; // Gunakan komponen NewsCard untuk hasil pencarian

function Search() { 
  const { query } = useParams(); 
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');

  const apikey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    if (query) {
      setLoading(true); 
      setError('');
      axios
        .get(`https://newsdata.io/api/1/latest?apikey=${apikey}&q=${encodeURIComponent(query)}`)
        .then((response) => {
          setNews(response.data.results);
        })
        .catch((error) => {
          if (error.response && error.response.status === 429) {
            setError('Too many requests. Please try again later.');
          } else {
            setError('An error occurred while fetching news.');
          }
        })
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <Container>
      <h3 className="my-4">Search Results for "{query}"</h3>
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
      ) : news.length === 0 ? (
        <Alert variant="info" className="my-3">
          No news found for "{query}".
        </Alert>
      ) : (
        <Row>
          {news.map((newsItem, index) => (
            <Col xs={12} key={index}>
              <NewsCard news={newsItem} column="left" />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Search;
