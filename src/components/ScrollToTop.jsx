import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import '../style/ScrollToTop.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <ChevronUp size={40} color="#007bff" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
