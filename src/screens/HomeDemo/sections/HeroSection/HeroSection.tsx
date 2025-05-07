import { Badge } from "../../../../components/ui/badge.tsx";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[601px]">
      <div className="relative w-full h-full">
        <div className="w-full h-full bg-[url(https://c.animaapp.com/MyRMXIDS/img/hero-4-1.png)] bg-cover bg-center">
          {/* Hero Title */}
          <div className="flex items-start justify-center absolute top-[98px] left-1/2 -translate-x-1/2 border-t-2 border-b-2 border-white shadow-[0px_4px_4px_#00000040]">
            <h1 className="relative w-fit mt-[-2.00px] font-['Inter',Helvetica] font-bold text-white text-[120px] tracking-[0] leading-[normal]">
              THE BLOG
            </h1>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-[75px] left-[69px] flex space-x-[10px]">
            <div className="rounded w-2 h-2 bg-white" />
            <div className="rounded w-2 h-2 bg-[#ffffff33]" />
            <div className="rounded w-2 h-2 bg-[#ffffff33]" />
            <div className="rounded w-2 h-2 bg-[#ffffff33]" />
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

        {/* Header Navigation */}
        <header className="absolute w-full h-20 top-0 left-0 bg-transparent">
          <nav className="relative w-full h-20 bg-[#00000033] flex items-center justify-between px-[69px]">
            {/* Navigation Links */}
            <div className="flex items-center h-7">
              <div className="flex flex-col items-start">
                <div className="font-['Poppins',Helvetica] font-bold text-white text-base tracking-[1.60px] leading-[normal]">
                  HOME
                </div>
                <img
                  className="w-[33px] h-0.5 mt-2"
                  alt="Line"
                  src="https://c.animaapp.com/MyRMXIDS/img/line-2.svg"
                />
              </div>

              <div className="ml-10 font-['Poppins',Helvetica] font-medium text-neutral-200 text-base tracking-[1.60px] leading-[normal]">
                ABOUT ME
              </div>

              <div className="ml-10 font-['Poppins',Helvetica] font-medium text-neutral-200 text-base tracking-[1.60px] leading-[normal]">
                ARTICLES
              </div>

              <div className="ml-10 font-['Poppins',Helvetica] font-medium text-neutral-200 text-base tracking-[1.60px] leading-[normal]">
                FEEDBACKS
              </div>
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 font-['Cinzel',Helvetica] font-bold text-[#f8f9fa] text-[40px] tracking-[0] leading-[normal]">
              BLUE
            </div>

            {/* Social Icons and SearchIcon */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-[38px] pr-4 border-r border-gray-400">
                <img
                  className="w-5 h-5"
                  alt="Facebook"
                  src="https://c.animaapp.com/MyRMXIDS/img/facebook@2x.png"
                />
                <img
                  className="w-5 h-5"
                  alt="Twitter"
                  src="https://c.animaapp.com/MyRMXIDS/img/twitter@2x.png"
                />
                <img
                  className="w-5 h-5"
                  alt="Youtube"
                  src="https://c.animaapp.com/MyRMXIDS/img/youtube@2x.png"
                />
                <div className="w-[17px] h-[17px] bg-[url(https://c.animaapp.com/MyRMXIDS/img/social-icons.svg)] bg-[100%_100%]" />
                <div className="w-4 h-4 bg-[url(https://c.animaapp.com/MyRMXIDS/img/instagram.svg)] bg-[100%_100%]" />
              </div>
              <div className="pl-4">
                <img
                  className="w-5 h-5"
                  alt="SearchIcon icon"
                  src="https://c.animaapp.com/MyRMXIDS/img/search-icon@2x.png"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </section>
  );
};
