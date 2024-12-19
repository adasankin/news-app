import React from 'react'; 
import { useSelector } from 'react-redux';
import { Container, Alert, Breadcrumb } from 'react-bootstrap';
import { getSavedNews } from '../store/selectors';
import NewsList from '../components/NewsList';

function Saved() {
  const savedNews = useSelector(getSavedNews);

  return (
    <Container>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
          <Breadcrumb.Item active style={{ fontWeight: 'bold', color: '#6c757d' }}>Saved</Breadcrumb.Item>
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
      <h1 className="my-4" style={{ position: 'relative', display: 'inline-block', fontWeight: '700', fontSize: '1.5rem', color: '#757575' }}>
        SAVED
        <div
          style={{
            content: "''",
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '100%',
            height: '5px',
            borderRadius: '3px',
            background: 'linear-gradient(to right, #8b0000 0%, #ff6347 100%)',
          }}
        />
      </h1>
      {savedNews.length > 0 ? (
        <div className="saved-card">
          <NewsList news={savedNews} />
        </div>
      ) : (
        <Alert variant="info" className="my-3">
          No saved news yet. Start saving your favorite news!
        </Alert>
      )}
    </Container>
  );
}

export default Saved;
