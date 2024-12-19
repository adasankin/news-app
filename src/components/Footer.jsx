import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'; 
import kiniLogo from '../assets/kini-logo.png';
import antaraLogo from '../assets/antara-logo.png';
import folhaLogo from '../assets/folha-logo.png';
import liputan6Logo from '../assets/liputan6-logo.png';
import tvoneLogo from '../assets/tvone-logo.png';
import nbcLogo from '../assets/nbc-logo.png';
import '../style/Footer.css';

function Footer() { 
  return (
    <footer>
      {/* Top Footer */}
      <div className="footer-top py-4">
        <Container>
          <Row>
            {/* Kini Logo and Social Media */}
            <Col md={3}>
              <Link to="/">
                <img src={kiniLogo} alt="Logo" className="mb-2" style={{ width: '170px', height: 'auto' }}/>
              </Link>
              <div className="social-icons d-flex mt-2">
                <Instagram size={20} className="me-2" />
                <Facebook size={20} className="me-2" />
                <Twitter size={20} className="me-2" />
                <Youtube size={20} />
              </div>
              <span className="footer-copyright">thekinitimes ©2024 | All Rights Reserved</span>
            </Col>
            {/* End Kini Logo and Social Media */}

            {/* Company Profile */}
            <Col md={3}>
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
            <Col md={3}>
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
            <Col md={3}>
              <h5>Categories</h5>
              <ul className="footer-links">
                <li><a href="/programming">Programming</a></li>
                <li><a href="/politics">Politics</a></li>
                <li><a href="/business">Business</a></li>
                <li><a href="/sports">Sports</a></li>
                <li><a href="/science">Science</a></li>
                <li><a href="/travel">Travel</a></li>
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
            <a href="https://www.antaranews.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={antaraLogo} alt="Antara News" className="footer-logo" />
            </a>
            <a href="https://www.folha.uol.com.br/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={folhaLogo} alt="Folha UOL" className="footer-logo" />
            </a>
            <a href="https://www.liputan6.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src={liputan6Logo} alt="Liputan 6" className="footer-logo" />
            </a>
            <a href="https://www.tvonenews.com/" target="_blank" rel="noopener noreferrer" className="footer-icon-link mx-2">
              <img src={tvoneLogo} alt="TV One" className="footer-logo" />
            </a>
            <a href="https://www.nbcnews.com/" target="_blank" rel="noopener noreferrer" className="footer-icon-link mx-2">
              <img src={nbcLogo} alt="NBC News" className="footer-logo" />
            </a>
          </div>
        </Container>
      </div>
      {/* End Bottom Footer */}
    </footer>
  );
}

export default Footer;
