import React from "react";

export const FeaturedPostsSection = (): JSX.Element => {
  // Data for pagination indicators
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section className="relative w-full h-[601px]">
      <div className="relative h-full">
        {/* Background image */}
        <img
          className="absolute w-full h-[600px] top-px left-0 object-cover"
          alt="Featured post background"
          src="https://c.animaapp.com/MyRMXIDS/img/hero-3-1.png"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0000004c]" />

        {/* Pagination indicators */}
        <div className="absolute flex gap-[19px] top-[473px] left-1/2 -translate-x-1/2">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-[15px] h-[15px] rounded-[7.5px] ${dot.active ? "bg-white" : "bg-[#ffffff33]"}`}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="absolute w-[865px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Title */}
          <h2 className="w-[530px] [font-family:'Lora',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]">
            Cảm ơn vì đã...
          </h2>

          {/* Main heading */}
          <h1 className="w-full mt-[10px] [font-family:'Meow_Script',Helvetica] font-normal text-white text-8xl text-center tracking-[0] leading-[normal]">
            Gặp Bạn Ở Thanh Xuân
          </h1>

          {/* Quote */}
          <p className="w-[582px] mt-[37px] [font-family:'Lora',Helvetica] font-normal text-neutral-200 text-xl text-center tracking-[0] leading-5">
            &quot;Thanh xuân không phải là như thế sao? <br />
            Chỉ cần chúng ta từng có gắng, thì vĩnh viễn không hối hận&quot;
          </p>

          {/* Divider */}
          <div className="relative mt-[20px] w-full flex justify-center">
            <img
              className="w-[260px] h-px object-cover"
              alt="Divider line"
              src="https://c.animaapp.com/MyRMXIDS/img/line-5.svg"
            />
          </div>

          {/* Date */}
          <p className="mt-[20px] [font-family:'Lora',Helvetica] font-normal text-neutral-200 text-lg tracking-[0] leading-[normal]">
            05.05.2024
          </p>
        </div>
      </div>
    </section>
  );
};
