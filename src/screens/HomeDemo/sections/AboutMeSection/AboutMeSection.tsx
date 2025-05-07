import { Button } from "../../../../components/ui/button.tsx";
import { Card, CardContent } from "../../../../components/ui/card.tsx";

export const AboutMeSection = (): JSX.Element => {
  // Pagination dots data
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  // About me content data
  const aboutMeDetails = [
    "Sinh năm 2006, cung song tử.",
    "Cột sống IT với một niềm đam mê bất tận với mọi thứ trên thế giới. Thích đi trekking, ngắm trăng và đọc sách... tất nhiên top list vẫn là tiền.",
    "Cựu học sinh chuyên Toán Lê Quý Đôn",
    "Hiện đang là sinh viên ngành kĩ thuật phầm mềm đại học FPT.",
  ];

  return (
    <section className="relative w-full h-[766px] bg-[#c4cbce]">
      <div className="flex h-full">
        {/* Left side with image */}
        <div className="relative w-[863px] h-full">
          <img
            className="w-full h-full object-cover"
            alt="Profile image"
            src="https://c.animaapp.com/MyRMXIDS/img/img-0197-min-1.png"
          />
          <div className="absolute inset-0 [background:linear-gradient(0deg,rgba(0,0,0,0.6)_3%,rgba(0,0,0,0.4)_24%,rgba(102,102,102,0.1)_89%)]" />

          {/* Pagination dots */}
          <div className="absolute bottom-[49px] left-1/2 -translate-x-1/2 flex gap-[18px]">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-[4px] ${dot.active ? "bg-white" : "bg-[#ffffff33]"}`}
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
