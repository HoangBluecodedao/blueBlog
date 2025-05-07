import { useState, useEffect, useRef } from 'react';
import { Badge } from "../../../../components/ui/badge";
import { useSwipeable } from 'react-swipeable';
import hero1 from '../../../../assets/img/hero/hero_1.jpeg';
import hero2 from '../../../../assets/img/hero/hero_2.jpg';
import hero3 from '../../../../assets/img/hero/hero_3.jpg';
import hero4 from '../../../../assets/img/hero/hero_4.jpeg';

export const HeroSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [hero1, hero2, hero3, hero4];
  const timerRef = useRef<number>();

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 15000); // Change slide every 15 seconds
    };

    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 15000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500,
  });

  return (
    <section className="relative w-full h-[601px]">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full h-20 bg-transparent z-[100]">
        <nav className="relative w-full h-20 bg-[#0000001a] backdrop-blur-[1px] flex items-center justify-between px-[69px]">
          {/* Navigation Links */}
          <div className="flex items-center h-7">
            <div className="flex flex-col items-start group cursor-pointer">
              <div className="font-['Poppins',Helvetica] font-bold text-white text-base tracking-[1.60px] leading-[normal] flex">
                <span className="transition-all duration-300 group-hover:translate-x-[-2px]">H</span>
                <span className="transition-all duration-300 group-hover:translate-x-[-1px]">O</span>
                <span className="transition-all duration-300 group-hover:translate-x-[0px]">M</span>
                <span className="transition-all duration-300 group-hover:translate-x-[1px]">E</span>
              </div>
              <img
                className="w-[33px] h-0.5 mt-2 transition-all duration-300 group-hover:w-full"
                alt="Line"
                src="https://c.animaapp.com/MyRMXIDS/img/line-2.svg"
              />
            </div>

            <div className="ml-10 flex flex-col items-start group cursor-pointer">
              <div className="font-['Poppins',Helvetica] font-medium text-neutral-200 text-base tracking-[1.60px] leading-[normal] group-hover:text-white transition-colors duration-300 flex">
                <span className="transition-all duration-300 group-hover:translate-x-[-2px]">A</span>
                <span className="transition-all duration-300 group-hover:translate-x-[-1px]">B</span>
                <span className="transition-all duration-300 group-hover:translate-x-[0px]">O</span>
                <span className="transition-all duration-300 group-hover:translate-x-[1px]">U</span>
                <span className="transition-all duration-300 group-hover:translate-x-[2px]">T</span>
                <span className="transition-all duration-300 group-hover:translate-x-[3px]"> </span>
                <span className="transition-all duration-300 group-hover:translate-x-[4px]">M</span>
                <span className="transition-all duration-300 group-hover:translate-x-[5px]">E</span>
              </div>
              <img
                className="w-0 h-0.5 mt-2 transition-all duration-300 group-hover:w-full"
                alt="Line"
                src="https://c.animaapp.com/MyRMXIDS/img/line-2.svg"
              />
            </div>

            <div className="ml-10 flex flex-col items-start group cursor-pointer">
              <div className="font-['Poppins',Helvetica] font-medium text-neutral-200 text-base tracking-[1.60px] leading-[normal] group-hover:text-white transition-colors duration-300 flex">
                <span className="transition-all duration-300 group-hover:translate-x-[-2px]">A</span>
                <span className="transition-all duration-300 group-hover:translate-x-[-1px]">R</span>
                <span className="transition-all duration-300 group-hover:translate-x-[0px]">T</span>
                <span className="transition-all duration-300 group-hover:translate-x-[1px]">I</span>
                <span className="transition-all duration-300 group-hover:translate-x-[2px]">C</span>
                <span className="transition-all duration-300 group-hover:translate-x-[3px]">L</span>
                <span className="transition-all duration-300 group-hover:translate-x-[4px]">E</span>
                <span className="transition-all duration-300 group-hover:translate-x-[5px]">S</span>
              </div>
              <img
                className="w-0 h-0.5 mt-2 transition-all duration-300 group-hover:w-full"
                alt="Line"
                src="https://c.animaapp.com/MyRMXIDS/img/line-2.svg"
              />
            </div>

            <div className="ml-10 flex flex-col items-start group cursor-pointer">
              <div className="font-['Poppins',Helvetica] font-medium text-neutral-200 text-base tracking-[1.60px] leading-[normal] group-hover:text-white transition-colors duration-300 flex">
                <span className="transition-all duration-300 group-hover:translate-x-[-2px]">F</span>
                <span className="transition-all duration-300 group-hover:translate-x-[-1px]">E</span>
                <span className="transition-all duration-300 group-hover:translate-x-[0px]">E</span>
                <span className="transition-all duration-300 group-hover:translate-x-[1px]">D</span>
                <span className="transition-all duration-300 group-hover:translate-x-[2px]">B</span>
                <span className="transition-all duration-300 group-hover:translate-x-[3px]">A</span>
                <span className="transition-all duration-300 group-hover:translate-x-[4px]">C</span>
                <span className="transition-all duration-300 group-hover:translate-x-[5px]">K</span>
                <span className="transition-all duration-300 group-hover:translate-x-[6px]">S</span>
              </div>
              <img
                className="w-0 h-0.5 mt-2 transition-all duration-300 group-hover:w-full"
                alt="Line"
                src="https://c.animaapp.com/MyRMXIDS/img/line-2.svg"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 font-['Cinzel',Helvetica] font-bold text-[#f8f9fa] text-[40px] tracking-[0] leading-[normal] group">
            <div className="flex items-center justify-center">
              <span className="transition-all duration-300 group-hover:translate-x-[-8px]">B</span>
              <span className="transition-all duration-300 group-hover:translate-x-[-4px]">L</span>
              <span className="transition-all duration-300 group-hover:translate-x-[0px]">U</span>
              <span className="transition-all duration-300 group-hover:translate-x-[4px]">E</span>
            </div>
          </div>

          {/* Social Icons and SearchIcon */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-[38px] pr-4 border-r border-gray-400">
              <img
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                alt="Facebook"
                src="https://c.animaapp.com/MyRMXIDS/img/facebook@2x.png"
              />
              <img
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                alt="Twitter"
                src="https://c.animaapp.com/MyRMXIDS/img/twitter@2x.png"
              />
              <img
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                alt="Youtube"
                src="https://c.animaapp.com/MyRMXIDS/img/youtube@2x.png"
              />
              <div className="w-[17px] h-[17px] bg-[url(https://c.animaapp.com/MyRMXIDS/img/social-icons.svg)] bg-[100%_100%] hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
              <div className="w-4 h-4 bg-[url(https://c.animaapp.com/MyRMXIDS/img/instagram.svg)] bg-[100%_100%] hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
            </div>
            <div className="pl-4">
              <img
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                alt="SearchIcon icon"
                src="https://c.animaapp.com/MyRMXIDS/img/search-icon@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>

      <div className="relative w-full h-full" {...swipeHandlers}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maxWidth: '100vw'
            }}
          >
            {/* Special overlay for hero2 */}
            {index === 1 && (
              <div className="absolute bottom-0 left-0 w-full max-w-[1440px] h-[601px] bg-black/20" />
            )}

            {/* Hero Title */}
            <div className="flex items-start justify-center absolute top-[98px] left-1/2 -translate-x-1/2 border-t-2 border-b-2 border-white">
              <h1 className="relative w-fit mt-[-2.00px] font-['Inter',Helvetica] font-bold text-white text-[120px] tracking-[0] leading-[normal]">
                THE BLOG
              </h1>
            </div>

            {/* Content Block */}
            <div className="absolute w-[536px] h-[179px] top-[312px] left-[69px]">
              <div className="absolute top-[139px] left-[125px] font-['Lora',Helvetica] font-normal text-neutral-200 text-xs text-center tracking-[0] leading-5">
                &quot;Bắt đầu từ những thu nắng vàng 2021, <br />
                kết thúc là hạ sang rực rỡ 2024&quot;
              </div>

              <img
                className="absolute w-[30px] h-px top-[150px] left-[87px] object-cover"
                alt="Line"
                src="https://c.animaapp.com/MyRMXIDS/img/line-4.svg"
              />

              <div className="h-[15px] top-[143px] left-[17px] text-xs absolute font-['Lora',Helvetica] font-normal text-neutral-200 tracking-[0] leading-[normal]">
                05.05.2024
              </div>

              <h2 className="absolute w-[530px] top-[35px] left-0 font-['Mali',Helvetica] font-bold text-white text-[27px] tracking-[0] leading-[normal]">
                Chuyên Toán 21-24 <br />
                Lê Quý Đôn
              </h2>

              <Badge className="absolute top-0 left-0 bg-[#ffffff26] text-white rounded-lg px-2.5 py-[5px]">
                <span className="font-['Roboto',Helvetica] font-bold text-[10px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                  MEMORY
                </span>
              </Badge>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination indicators */}
        <div className="absolute flex gap-[19px] top-[473px] left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[15px] h-[15px] rounded-[7.5px] transition-colors duration-300 ${
                index === currentSlide ? "bg-white" : "bg-[#ffffff33]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
