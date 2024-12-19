import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import { Spinner, Alert, Container, Row, Breadcrumb } from 'react-bootstrap'; 
import NewsList from '../components/NewsList';

function Search() { 
  const { query } = useParams(); 
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  const apikey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    if (query) {
      setLoading(true); 
      setError('');
      axios
        .get(`https://newsdata.io/api/1/latest?apikey=${apikey}&q=${encodeURIComponent(query)}`)
        .then((response) => {
          if (response.data.results && response.data.results.length > 0) {
            setNews(response.data.results);
            setTotalResults(response.data.totalResults || 0);
          } else {
            setError('No news found for the provided query.');
          }
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 429) {
              setError('Too many requests. Please try again later.');
            } else if (err.response.status === 404) {
              setError('Bad request. Please try again later.');
            } else {
              setError('An error occurred while fetching news.');
            }
          } else if (err.request) {
            setError('Network error. Please check your connection and try again.')
          } else {
            setError(`Unexpected error: ${err.message}`);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <Container>
      <div>
        <Breadcrumb style={{ marginBottom: '40px' }}>
          <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
          <Breadcrumb.Item active style={{ fontWeight: 'bold', color: '#6c757d' }}>Search</Breadcrumb.Item>
        </Breadcrumb>
        <style jsx="true">{`
          .breadcrumb-item + .breadcrumb-item::before {
            content: " > ";
          }
          .text-decoration-none a {
            text-decoration: none !important;
            color: #6c757d !important;
          }
        `}</style>
      </div>
      <h1 className="my-4" style={{ position: 'relative', fontWeight: '700', fontSize: '1.5rem', color: '#757575' }}>
        {query}
        <div
          style={{
            content: "''",
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '7%',
            height: '5px',
            borderRadius: '3px',
            background: 'linear-gradient(to right, #8b0000 0%, #ff6347 100%)',
          }}
        />
      </h1>

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
        <>
          <div className="my-2" style={{ paddingLeft: '20px' }}>
            Total {totalResults} articles found.
          </div>
          <Row>
            <NewsList news={news}/>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Search;
