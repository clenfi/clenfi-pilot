
import React from "react";
import ScrollReveal from "./ScrollReveal";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">3</span>
              <span>Innovation</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={5}
            blurStrength={8}
            containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12"
            textClassName="text-black block font-display"
          >
            Forget putting up 150% collateral to borrow 100%. CLenFi gives you credit based on trust, not locked assets. Pay on time, build your reputation, unlock better deals. Start small, grow big - all based on how reliable you are with money.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
