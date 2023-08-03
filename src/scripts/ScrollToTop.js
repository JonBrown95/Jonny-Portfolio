import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  
  return (
    <button
      className={`fixed bottom-5 right-5  text-[#00df9a] text-3xl w-12 h-12 rounded-full outline-none ${
        isVisible ? 'animate-bounce' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      &#8593;
    </button>
  );
};

export default ScrollToTopButton;
