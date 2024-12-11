import React from 'react'; 
import { useSelector } from 'react-redux';
import NewsList from '../components/NewsList';
import { Container, Alert } from 'react-bootstrap';

function Saved() {
  const savedNews = useSelector((state) => state.savedNews);

  return (
    <Container>
      <h1 className="my-4">Saved News</h1>
      {savedNews.length > 0 ? (
        <NewsList news={savedNews} />
      ) : (
        <Alert variant="info" className="my-3">
          No saved news yet. Start saving your favorite news!
        </Alert>
      )}
    </Container>
  );
}

export default Saved;
