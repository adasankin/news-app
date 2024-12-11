import React, { useEffect, useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap'; 
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'; 
import axios from 'axios'; 
import logo from '../assets/kini-logo.png';
import '../style/Footer.css';

function Footer() { 
  const [sourceIcons, setSourceIcons] = useState([]);
  
  const apikey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    const fetchSourceIcons = async () => {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${apikey}&country=id`
      );

      const uniqueSources = [];
      const seen = new Set();

      response.data.results.forEach(item => {
        const icon = item.source_icon;
        const url = item.source_url || '#';
        const identifier = `${icon}_${url}`;
        if (!seen.has(identifier)) {
          seen.add(identifier);
          uniqueSources.push({ icon, url });
        }
      });

      setSourceIcons(uniqueSources.slice(0, 10));
    };

    fetchSourceIcons();
  }, []);

  return (
    <footer className="footer">
      {/* Top Footer */}
      <div className="footer-top py-4">
        <Container>
          <Row>
            {/* Kini Logo and Social Media */}
            <Col md={3} className="footer-section">
              <img
                src={logo}
                alt="Kini Logo"
                className="footer-logo mb-2"
              />
              <h5>#WorldNews</h5>
              <div className="social-icons d-flex mt-2">
                <Instagram size={20} className="me-2" />
                <Facebook size={20} className="me-2" />
                <Twitter size={20} className="me-2" />
                <Youtube size={20} />
              </div>
            </Col>
            {/* End Kini Logo and Social Media */}

            {/* Company Profile */}
            <Col md={3} className="footer-section">
              <h5>Company Profile</h5>
              <ul className="footer-links">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/editorial">Editorial</a></li>
                <li><a href="/media-guidelines">Cyber Media Guidelines</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </Col>
            {/* End Company Profile */}

            {/* Information */}
            <Col md={3} className="footer-section">
              <h5>Information</h5>
              <ul className="footer-links">
                <li><a href="/top-news">Top News</a></li>
                <li><a href="/latest">Latest</a></li>
                <li><a href="/hot-news">Hot News</a></li>
                <li><a href="/popular">Popular</a></li>
              </ul>
            </Col>
            {/* End Information */}

            {/* Categories */}
            <Col md={3} className="footer-section">
              <h5>Categories</h5>
              <ul className="footer-links">
                <li><a href="/politics">Politics</a></li>
                <li><a href="/economy">Economy</a></li>
                <li><a href="/programming">Programming</a></li>
                <li><a href="/sports">Sports</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/tourism">Tourism</a></li>
                <li><a href="/entertainment">Entertainment</a></li>
              </ul>
            </Col>
            {/* End Categories */}
          </Row>
        </Container>
      </div>
      {/* End Top Footer */}

      {/* Bottom Footer */}
      <div className="footer-bottom py-3">
        <Container className="text-center">
          <div className="d-flex justify-content-center flex-wrap">
            {sourceIcons.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link mx-2"
              >
                <img
                  src={source.icon}
                  alt={`Source Icon ${index + 1}`}
                  className="footer-api-logo"
                />
              </a>
            ))}
          </div>
        </Container>
      </div>
      {/* End Bottom Footer */}
    </footer>
  );
}

export default Footer;
