import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Indonesia from './pages/Indonesia';
import Programming from './pages/Programming';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="d-flex flex-column min-vh-100">
        <main className="container mt-4">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/search/:query" element={<Search />} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;