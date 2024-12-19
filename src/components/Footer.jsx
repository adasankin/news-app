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
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/editorial">Editorial</Link></li>
                <li><Link href="/media-guidelines">Cyber Media Guidelines</Link></li>
                <li><Link href="/disclaimer">Disclaimer</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </Col>
            {/* End Company Profile */}

            {/* Information */}
            <Col md={3}>
              <h5>Information</h5>
              <ul className="footer-links">
                <li><Link href="/top-news">Top News</Link></li>
                <li><Link href="/latest">Latest</Link></li>
                <li><Link href="/hot-news">Hot News</Link></li>
                <li><Link href="/popular">Popular</Link></li>
              </ul>
            </Col>
            {/* End Information */}

            {/* Categories */}
            <Col md={3}>
              <h5>Categories</h5>
              <ul className="footer-links">
              <li><Link to="/programming">Programming</Link></li>
              <li><Link to="/politics">Politics</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/travel">Travel</Link></li>
              <li><Link to="/entertainment">Entertainment</Link></li>
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
