import { Card, CardContent } from "../../../../components/ui/card.tsx";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const RelatedPostsSection = (): JSX.Element => {
  const isVisible = useScrollAnimation('related-posts-section', 0.2);

  // Data for the posts to enable mapping
  const posts = [
    {
      id: 1,
      title: "ELe - English Club Of Le",
      date: "22.02.2023",
      quote:
        '"The first experience always leaves a scar on the soul, it fades slowly and lingers in the mind"',
      image:
        "https://c.animaapp.com/MyRMXIDS/img/publication-instagram-coffee-shop-modern-photo--1@2x.png",
    },
    {
      id: 2,
      title: "MUN - Model United Nations",
      date: "31.07.2024",
      quote:
        '"The first experience always leaves a scar on the soul, it fades slowly and lingers in the mind"',
      image: "https://c.animaapp.com/MyRMXIDS/img/img-9268-min-1@2x.png",
    },
    {
      id: 3,
      title: "CHO EM Project",
      date: "22.01.2025",
      quote:
        '"The first experience always leaves a scar on the soul, it fades slowly and lingers in the mind"',
      image: "https://c.animaapp.com/MyRMXIDS/img/hf238343-min-1@2x.png",
    },
  ];

  return (
    <section id="related-posts-section" className={`w-full bg-[#e5e5e54c] px-4 transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-bold text-4xl text-[#495057] tracking-[3.60px] leading-[25px] mb-12 [font-family:'Lora',Helvetica]">
          Hot Posts
        </h2>

        <div className="flex justify-between">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="w-[calc(33.33%-20px)] h-[420px] border-0 rounded-none relative shadow-[0_0_20px_rgba(0,0,0,0.13),0_0_60px_rgba(0,0,0,0.06),0_0_100px_rgba(102,102,102,0.1)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
              <CardContent className="absolute bottom-0 left-0 p-0 z-10">
                <div className="p-7 pt-0">
                  <p className="[font-family:'Lora',Helvetica] font-normal text-neutral-200 text-xs leading-normal">
                    {post.date}
                  </p>
                  <h3 className="[font-family:'Lora',Helvetica] font-bold text-white text-lg leading-[25px] mt-4 mb-4 w-[270px]">
                    {post.title}
                  </h3>
                  <p className="[font-family:'Lora',Helvetica] font-normal text-neutral-200 text-xs leading-5 w-[340px]">
                    {post.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
