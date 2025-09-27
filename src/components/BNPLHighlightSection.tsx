import React from "react";

const BNPLHighlightSection = () => {
  return (
    <section className="w-full py-20 sm:py-24 bg-transparent" id="bnpl-highlight">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Modern minimalist container */}
        <div className="relative overflow-hidden rounded-[40px] sm:rounded-[50px] border border-white/30 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl shadow-[0_25px_70px_-10px_rgba(0,0,0,0.35)]">
          {/* Dynamic gradient background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>

          {/* Floating orbs */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-2xl animate-pulse"></div>
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Content wrapper */}
          <div className="relative p-12 sm:p-16 md:p-20">
            {/* Header section */}
            

            {/* Hero content */}
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9]">
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

              {/* Enhanced microcopy */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-2xl">
                  <p className="text-xl text-gray-800 font-medium italic leading-relaxed">
                    "Quick credit for daily use. Build trust with every repayment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BNPLHighlightSection;