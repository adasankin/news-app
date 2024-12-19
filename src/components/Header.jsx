import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Search, BookMarked } from 'lucide-react';
import SearchBar from './SearchBar';
import kiniLogo from '../assets/kini-logo.png';
import '../style/Header.css';

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [query, setQuery] = useState('');

  const searchBarRef = useRef(null);
  const searchButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (searchBarVisible) {
        setSearchBarVisible(false);
      }
    };
  
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current && !searchBarRef.current.contains(event.target) &&
        searchButtonRef.current && !searchButtonRef.current.contains(event.target)
      ) {
        setSearchBarVisible(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarVisible]);

  const handleSearchChange = (newQuery) => setQuery(newQuery);

  const handleSearchSubmit = () => {
    setQuery('');
    setSearchBarVisible(false);
  };

  return (
    <>
      {isScrolled ? (
        // Scrolled Navbar
        <Navbar  bg="light" variant="light" expand="lg" className={`fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand as={Link} to="/">
                <img src={kiniLogo} alt="" width="90" height="30" className="d-inline-block align-top" />
              </Navbar.Brand>
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
                <Nav.Link as={Link} to="/indonesia" active={location.pathname === "/indonesia"}>Indonesia</Nav.Link>
                <Nav.Link as={Link} to="/programming" active={location.pathname === "/programming"}>Programming</Nav.Link>
                <Nav.Link as={Link} to="/politics" active={location.pathname === "/politics"}>Politics</Nav.Link>
                <Nav.Link as={Link} to="/business" active={location.pathname === "/business"}>Business</Nav.Link>
                <Nav.Link as={Link} to="/sports" active={location.pathname === "/sports"}>Sports</Nav.Link>
                <Nav.Link as={Link} to="/science" active={location.pathname === "/science"}>Science</Nav.Link>
                <Nav.Link as={Link} to="/travel" active={location.pathname === "/travel"}>Travel</Nav.Link>
                <Nav.Link as={Link} to="/entertainment" active={location.pathname === "/entertainment"}>Entertainment</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center">
                <button className="btn btn-link text-dark me-3 p-0" onClick={() => setSearchBarVisible(!searchBarVisible)} ref={searchButtonRef}>
                  <Search size={20} />
                </button>
                <Link to="/saved" className="text-dark">
                  <BookMarked size={20} />
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <>
          {/* Navbar Default */}
          {/* Navbar 1 */}
          <Navbar  bg="light" variant="light" expand="lg" className="navbar1">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Navbar.Brand as={Link} to="/">
                    <img src={kiniLogo} alt="" width="110" height="38" className="d-inline-block align-top" />
                  </Navbar.Brand>
                </Nav>
                <SearchBar query={query} onQueryChange={handleSearchChange} onSearchSubmit={handleSearchSubmit}/>
                <Nav className="ml-auto">
                  <Link to="/saved" className="text-dark">
                    <BookMarked size={20} />
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Navbar 2 */}
          <Navbar  bg="light" variant="light" expand="lg" className="navbar2">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-center w-100">
                  <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/indonesia" active={location.pathname === "/indonesia"}>Indonesia</Nav.Link>
                  <Nav.Link as={Link} to="/programming" active={location.pathname === "/programming"}>Programming</Nav.Link>
                  <Nav.Link as={Link} to="/politics" active={location.pathname === "/politics"}>Politics</Nav.Link>
                  <Nav.Link as={Link} to="/business" active={location.pathname === "/business"}>Business</Nav.Link>
                  <Nav.Link as={Link} to="/sports" active={location.pathname === "/sports"}>Sports</Nav.Link>
                  <Nav.Link as={Link} to="/science" active={location.pathname === "/science"}>Science</Nav.Link>
                  <Nav.Link as={Link} to="/travel" active={location.pathname === "/travel"}>Travel</Nav.Link>
                  <Nav.Link as={Link} to="/entertainment" active={location.pathname === "/entertainment"}>Entertainment</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
      {isScrolled && searchBarVisible && (
        <div className="search-bar-container fixed-top" ref={searchBarRef}>
          <Container>
            <SearchBar query={query} onQueryChange={handleSearchChange} onSearchSubmit={handleSearchSubmit}/>
          </Container>
        </div>
      )}

    </>
  );
}

export default Header;
