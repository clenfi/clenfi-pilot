import React, { useRef, useEffect } from "react";

const ImageShowcaseSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / rect.height) * -15;
      const rotateY = (mouseX / rect.width) * 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">
                    11
                  </span>
                  <span>Showcase</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                Buy Now, Pay Later (BNPL)
              </h2>

              <div className="space-y-8 mb-16">
                <p className="text-2xl sm:text-3xl text-gray-700 font-light leading-relaxed">
                  Get micro-credit for everyday spending. Choose 7, 14, or 30-day repayment plans.
                </p>
                <p className="text-2xl sm:text-3xl text-gray-700 font-light leading-relaxed">
                  Repay on time, and your TrustScore improves faster.
                </p>
              </div>

             
            </div>

            <div
              ref={cardRef}
              className="relative mx-auto max-w-4xl animate-on-scroll transition-all duration-300 ease-out"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glass morphism 3D Card Container */}
              <div className="relative bg-white/30 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-xl border border-white/40">
                {/* Subtle gradient overlay for enhanced effect */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="w-full relative overflow-hidden">
                    <img
                      src="/Gemini_Generated_Image_lstae3lstae3lsta.png"
                      alt="CLenFi Credit Card showcasing the crypto credit companion"
                      className="w-full h-auto object-cover rounded-t-[24px]"
                      style={{
                        filter: "brightness(1.05) contrast(1.05) saturate(1.1)",
                      }}
                    />
                    {/* Image overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-t-[24px]"></div>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm p-4 sm:p-8 relative border-t border-white/30">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-50/20 to-transparent pointer-events-none"></div>

                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 text-black">
                        Next Generation Credit
                      </h3>
                      <p className="text-black/80 text-sm sm:text-base leading-relaxed">
                        Credit cards on Web3 made easy. Get uncollateralized
                        loans based on trust, just like traditional credit
                        cards, but powered by blockchain technology for instant
                        access and global reach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glass morphism shadow element */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black/5 rounded-full blur-xl -z-10"></div>
            </div>
            <div className="relative inline-block text-center flex justify justify-center mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-2xl">
                <p className="text-l text-gray-800 font-medium italic leading-relaxed text-center">
                  "Quick credit for daily use. Build trust with every
                  repayment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
