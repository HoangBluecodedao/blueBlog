import { useState, useEffect } from 'react';

export const useScrollAnimation = (sectionId: string, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: threshold,
        // Add root margin to trigger animation slightly before the element comes into view
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, threshold]);

  return isVisible;
}; 