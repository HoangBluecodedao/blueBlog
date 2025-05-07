import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { useTypingAnimation } from "../../../../hooks/useTypingAnimation";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import featurePost1 from "../../../../assets/img/feature_post/feature_post_1.png";
import featurePost2 from "../../../../assets/img/feature_post/feature_post_2.png";
import featurePost3 from "../../../../assets/img/feature_post/feature_post_3.png";
import line5 from "../../../../assets/img/line-5.svg";

export const FeaturedPostsSection = (): JSX.Element => {
  const isVisible = useScrollAnimation('featured-posts-section', 0.2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldStartSecond, setShouldStartSecond] = useState(false);
  const [shouldStartThird, setShouldStartThird] = useState(false);

  // First post typing animations
  const { displayText: titleText1, isComplete: isTitle1Complete } = useTypingAnimation(
    "Cảm ơn vì đã...",
    2000,
    isVisible ? 0 : -1
  );
  
  const { displayText: headingText1, isComplete: isHeading1Complete } = useTypingAnimation(
    "Gặp Bạn Ở Thanh Xuân",
    3000,
    shouldStartSecond ? 0 : -1
  );
  
  const { displayText: quoteText1 } = useTypingAnimation(
    "Thanh xuân không phải là như thế sao?\nChỉ cần chúng ta từng cố gắng, thì vĩnh viễn không hối hận",
    2000,
    shouldStartThird ? 0 : -1
  );

  // Second post typing animations
  const { displayText: titleText2 } = useTypingAnimation(
    "Tất Cả Mọi Khoảnh Khắc Đều Đáng Giá",
    2000,
    isVisible && currentSlide === 1 ? 0 : -1
  );

  const { displayText: quoteText2 } = useTypingAnimation(
    "Viết cho chúng ta những người quen thành lạ,\nvẫn là mùa hạ nhưng không còn chúng ta",
    2000,
    isVisible && currentSlide === 1 ? 1000 : -1
  );

  // Third post typing animations
  const { displayText: titleText3 } = useTypingAnimation(
    "Năm ấy...",
    2000,
    isVisible && currentSlide === 2 ? 0 : -1
  );

  const { displayText: quoteText3 } = useTypingAnimation(
    "tôi đã vì một người nói thích màu xanh\nmà lỡ yêu luôn cả bầu trời...",
    2000,
    isVisible && currentSlide === 2 ? 1000 : -1
  );

  // Handle sequencing for first post
  useEffect(() => {
    if (isTitle1Complete) {
      setShouldStartSecond(true);
    }
  }, [isTitle1Complete]);

  useEffect(() => {
    if (isHeading1Complete) {
      setShouldStartThird(true);
    }
  }, [isHeading1Complete]);

  // Reset states when section becomes invisible
  useEffect(() => {
    if (!isVisible) {
      setShouldStartSecond(false);
      setShouldStartThird(false);
    }
  }, [isVisible]);

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 15000); // Change slide every 15 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const posts = [
    {
      image: featurePost1,
      content: (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="w-[530px] [font-family:'Lora',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal] min-h-[48px]">
            {titleText1}
          </h2>
          <h1 className="w-full mt-[10px] [font-family:'Meow_Script',Helvetica] font-normal text-white text-8xl text-center tracking-[0] leading-[normal] min-h-[120px]">
            {headingText1}
          </h1>
          <p className="w-[582px] mt-[37px] [font-family:'Lora',Helvetica] font-normal text-neutral-200 text-xl text-center tracking-[0] leading-5 min-h-[60px] whitespace-pre-line">
            {quoteText1}
          </p>
          <div className="relative mt-[20px] w-full flex justify-center">
            <img
              className="w-[260px] h-px object-cover"
              alt="Divider line"
              src={line5}
            />
          </div>
          <p className="mt-[20px] [font-family:'Lora',Helvetica] font-normal text-neutral-200 text-lg tracking-[0] leading-[normal]">
            05.05.2024
          </p>
        </div>
      ),
    },
    {
      image: featurePost2,
      content: (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Card className="bg-transparent border-none shadow-none w-[536px]">
            <CardContent className="p-0 flex flex-col items-center">
              <h1 className="w-[530px] font-['Mynerve'] font-normal text-white text-[64px] text-center leading-normal min-h-[80px]">
                {titleText2}
              </h1>
              <p className="w-[451px] mt-6 font-['Lora'] font-normal text-neutral-200 text-xl text-center leading-5 min-h-[60px] whitespace-pre-line">
                {quoteText2}
              </p>
              <div className="w-[253px] h-px mt-6 bg-white opacity-50" />
              <p className="mt-5 font-['Lora'] font-normal text-neutral-200 text-lg">
                05.05.2024
              </p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      image: featurePost3,
      content: (
        <div className="absolute w-[639px] h-[204px] top-[120px] left-[494px]">
          <div className="absolute h-[15px] top-[189px] left-[539px] font-['Lora'] font-normal text-neutral-200 text-xs tracking-[0] leading-[normal]">
            05.05.2024
          </div>
          <div className="absolute w-[172px] h-px top-[196px] left-[358px] bg-white opacity-50" />
          <p className="absolute w-[378px] top-[141px] left-[255px] font-['Lora'] font-medium text-neutral-200 text-xl text-center tracking-[0] leading-5 min-h-[60px] whitespace-pre-line">
            {quoteText3}
          </p>
          <div className="absolute top-0 left-0 font-['Meow_Script'] font-normal text-white text-[108px] text-center tracking-[0] leading-[normal] min-h-[120px]">
            {titleText3}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className={`relative w-full h-[601px] transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="relative h-full">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              className="absolute w-full h-[600px] top-px left-0 object-cover"
              alt={`Featured post ${index + 1}`}
              src={post.image}
            />
            <div className="absolute inset-0 bg-[#0000004c]" />
            {post.content}
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
          {posts.map((_, index) => (
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
