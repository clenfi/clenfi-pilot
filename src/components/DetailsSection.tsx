
import React from "react";

const DetailsSection = () => {
  return (
    <section id="details" className="w-full py-10 sm:py-16 bg-transparent">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-violet-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">9</span>
                  <span>Rewards System</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                Borrow Smarter. Earn Rewards.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 italic">
                Every repayment makes you stronger.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              {/* Left Card - CT Points */}
              <div className="bg-white/30 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-xl border border-white/40">
                {/* Card Header with background image */}
                <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end rounded-t-[24px]" style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="absolute inset-0 bg-black/20 rounded-t-[24px]"></div>
                  <h2 className="text-2xl sm:text-3xl font-display text-white font-bold relative z-10">
                    CT Points
                  </h2>
                </div>

                {/* Card Content */}
                <div className="bg-white/40 backdrop-blur-sm p-4 sm:p-8 border-t border-white/30">
                  <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8 text-black">
                    Non-transferable rewards earned for every repayment.
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center mt-1 flex-shrink-0 border border-white/40">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40">
                          <span className="font-semibold text-base text-black">Instant Benefits:</span> <span className="text-black/80">Reduce interest instantly at repayment</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center mt-1 flex-shrink-0 border border-white/40">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40">
                          <span className="font-semibold text-base text-black">Brand Coupons:</span> <span className="text-black/80">Redeem coupons from top brands</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center mt-1 flex-shrink-0 border border-white/40">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40">
                          <span className="font-semibold text-base text-black">Earning Rate:</span> <span className="text-black/80">60 CT per $100 repayment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card - CLEN Token */}
              <div className="bg-white/30 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-xl border border-white/40 ">
                {/* Card Header with background image */}
                <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start rounded-t-[24px]" style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="absolute inset-0 bg-black/20 rounded-t-[24px]"></div>
                  
                  <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto relative z-10">
                    CLEN Token
                  </h2>
                </div>

                {/* Card Content */}
                <div className="bg-white/40 backdrop-blur-sm p-4 sm:p-8 border-t border-white/30">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center mt-1 flex-shrink-0 border border-white/40">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40">
                          <span className="font-semibold text-base text-black">CT Boost:</span> <span className="text-black/80">Stake to boost CT earnings (+5% to +30%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center mt-1 flex-shrink-0 border border-white/40">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40">
                          <span className="font-semibold text-base text-black">Fee Discount:</span> <span className="text-black/80">Pay protocol fees at up to 25% discount</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center mt-1 flex-shrink-0 border border-white/40">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40">
                          <span className="font-semibold text-base text-black">Premium Access:</span> <span className="text-black/80">Access premium rewards & gated perks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Example Box */}
            <div className="mt-8 flex justify-center">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/40 shadow-lg max-w-md mx-auto">
                <h4 className="text-lg font-semibold text-black mb-3 text-center">Quick Example</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black">Repay $100</span>
                    <span className="text-sm font-semibold text-green-600">→ Earn 60 CT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black">Stake CLEN</span>
                    <span className="text-sm font-semibold text-blue-600">→ Boost rewards +20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsSection;
