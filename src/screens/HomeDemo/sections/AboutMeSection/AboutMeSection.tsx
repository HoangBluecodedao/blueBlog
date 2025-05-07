import { useState, useEffect } from 'react';
import { Button } from "../../../../components/ui/button.tsx";
import { Card, CardContent } from "../../../../components/ui/card.tsx";
import { useSwipeable } from 'react-swipeable';
import aboutMe1 from '../../../../assets/img/about_me/about_me_1.png';
import aboutMe2 from '../../../../assets/img/about_me/about_me_2.png';
import aboutMe3 from '../../../../assets/img/about_me/about_me_3.png';
import aboutMe4 from '../../../../assets/img/about_me/about_me_4.png';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

export const AboutMeSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [aboutMe1, aboutMe2, aboutMe3, aboutMe4];
  const isVisible = useScrollAnimation('about-me-section', 0.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500,
  });

  // About me content data
  const aboutMeDetails = [
    "Sinh năm 2006, cung song tử.",
    "Cột sống IT với một niềm đam mê bất tận với mọi thứ trên thế giới. Thích đi trekking, ngắm trăng và đọc sách... tất nhiên top list vẫn là tiền.",
    "Cựu học sinh chuyên Toán Lê Quý Đôn",
    "Hiện đang là sinh viên ngành kĩ thuật phầm mềm đại học FPT.",
  ];

  return (
    <section className={`relative w-full h-[766px] transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="flex h-full px-[120px] scale-[0.75] origin-center">
        {/* Left side with image */}
        <div className="relative w-[863px] h-full" {...swipeHandlers}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt={`About me slide ${index + 1}`}
                src={image}
              />
              <div className="absolute inset-0 [background:linear-gradient(0deg,rgba(0,0,0,0.6)_3%,rgba(0,0,0,0.4)_24%,rgba(102,102,102,0.1)_89%)]" />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center z-10"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center z-10"
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

          {/* Pagination dots */}
          <div className="absolute bottom-[49px] left-1/2 -translate-x-1/2 flex gap-[18px]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-[4px] transition-colors duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-[#ffffff33]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side with content */}
        <Card className="w-[533px] h-full border-none rounded-none">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="pt-[66px] px-[13px] flex flex-col h-full">
              <h2 className="font-['Lora',Helvetica] font-bold text-[#000000cc] text-[32px] tracking-[3.20px] leading-[25px]">
                ABOUT ME
              </h2>

              <div className="mt-24 ml-[11px]">
                <div className="w-[455px] flex flex-col">
                  <h1 className="font-['Merriweather',Helvetica] font-bold text-[#000000cc] text-[50px] leading-normal">
                    Hồ Tất Bảo Hoàng
                  </h1>
                  <h1 className="font-['Merriweather',Helvetica] font-normal text-[#000000cc] text-[50px] leading-normal mt-2">
                    Hoàng Blue&apos;s
                  </h1>
                </div>
              </div>

              <div className="mt-[47px] ml-1.5 w-[523px]">
                <div className="flex flex-col gap-4">
                  {aboutMeDetails.map((detail, index) => (
                    <p
                      key={index}
                      className="font-['Merriweather',Helvetica] font-normal text-[#000000cc] text-xl tracking-[0.40px] leading-normal"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-auto mb-[60px]">
                <Button className="h-[35px] px-2.5 py-0.5 bg-[#fdf1f9] rounded-2xl mix-blend-lighten hover:bg-[#fdf1f9]/90">
                  <span className="font-['Inter',Helvetica] font-medium text-black text-xl text-center tracking-[4.00px] leading-5">
                    READ MORE
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};