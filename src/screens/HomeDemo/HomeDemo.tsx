import { AboutMeSection } from "./sections/AboutMeSection";
import { FeaturedPostsSection } from "./sections/FeaturedPostsSection";
import { HeroSection } from "./sections/HeroSection";
import { RelatedPostsSection } from "./sections/RelatedPostsSection";

export const HomeDemo = (): JSX.Element => {
  return (
    <div
      className="bg-[#E5E5E5] flex flex-col items-center w-full"
      data-model-id="48:1079"
    >
      <div className="w-full max-w-[1440px]">
        <HeroSection />
        <div className="py-[126px]" id="about-me-section">
          <AboutMeSection />
        </div>
        <div className="py-[126px]" id="related-posts-section">
          <RelatedPostsSection />
        </div>
        <div className="py-[126px]" id="featured-posts-section">
          <FeaturedPostsSection />
        </div>
      </div>
    </div>
  );
};
