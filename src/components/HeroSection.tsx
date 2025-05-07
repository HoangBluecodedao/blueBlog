import { useState, useEffect } from 'react';
import hero1 from '../assets/img/hero/hero_1.jpeg';
import hero2 from '../assets/img/hero/hero_2.jpeg';
import hero3 from '../assets/img/hero/hero_3.jpeg';
import hero4 from '../assets/img/hero/hero_4.jpeg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Blue Blog</h1>
                <p className="text-xl">Discover amazing stories and insights</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection; 