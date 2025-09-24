import React from "react";
import ScrollReveal from "./ScrollReveal";

const SpecsSection = () => {
  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  bg-purple-200 mr-2">3</span>
                  <span>Innovation</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main content with text mask image - responsive text sizing */}
            <div className="max-w-5xl">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={5}
                blurStrength={8}
                containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-2 sm:mb-4"
                textClassName="text-black block font-display"
              >
                Forget putting up 150% collateral to borrow 100%. CLenFi gives you credit based on trust, not locked assets. Pay on time, build your reputation, unlock better deals. Start small, grow big - all based on how reliable you are with money.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
