
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
                  <span>Token Details</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              {/* Left Card - The Details */}
              <div className="bg-white/30 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-xl border border-white/40">
                {/* Card Header with background image */}
                <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end rounded-t-[24px]" style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="absolute inset-0 bg-black/20 rounded-t-[24px]"></div>
                  <h2 className="text-2xl sm:text-3xl font-display text-white font-bold relative z-10">
                    Token Rewards
                  </h2>
                </div>
                
                {/* Card Content */}
                <div className="bg-white/40 h-[600px] backdrop-blur-sm p-4 sm:p-8 border-t border-white/30">
                  <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8 text-black">
                    Earn CLEN tokens and Credit Tokens (CT) through protocol participation and DeFi activities
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
                          <span className="font-semibold text-base text-black">CLEN APY:</span> <span className="text-black/80">Up to 45%</span>
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
                          <span className="font-semibold text-base text-black">CT Rewards:</span> <span className="text-black/80">Airdrops</span>
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
                          <span className="font-semibold text-base text-black">Staking Bonus:</span> <span className="text-black/80">2.5x Multiplier</span>
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
                          <span className="font-semibold text-base text-black">Governance:</span> <span className="text-black/80">CLEN Voting Power</span>
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
                          <span className="font-semibold text-base text-black">CT Supply:</span> <span className="text-black/80">1B Max Cap</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card - Contact Form */}
              <div className="bg-white/30 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-xl border border-white/40">
                {/* Card Header with background image */}
                <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start rounded-t-[24px]" style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="absolute inset-0 bg-black/20 rounded-t-[24px]"></div>
                  <div className="inline-block px-4 sm:px-6 py-2 border border-white/60 backdrop-blur-sm text-white rounded-full text-xs mb-4 relative z-10">
                    Token Rewards Program
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto relative z-10">
                    Earn CLEN & CT Tokens
                  </h2>
                </div>
                
                {/* Card Content - Reward System Details */}
                <div className="bg-white/40 backdrop-blur-sm p-4 sm:p-8 border-t border-white/30">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-3">CLEN Token Rewards</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-black">Governance Participation</p>
                            <p className="text-xs text-black/70">Earn CLEN tokens by voting on protocol proposals and parameter changes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-black">Staking Rewards</p>
                            <p className="text-xs text-black/70">Lock CLEN tokens to earn up to 45% APY plus protocol fee sharing</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-black">Liquidity Mining</p>
                            <p className="text-xs text-black/70">Provide liquidity to CLEN pools and earn additional token rewards</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/30 pt-4">
                      <h4 className="text-lg font-semibold text-black mb-3">Credit Token (CT) System</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-black">Daily Airdrops</p>
                            <p className="text-xs text-black/70">Receive CT tokens daily based on your credit score and protocol activity</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-black">Credit Building Rewards</p>
                            <p className="text-xs text-black/70">Earn bonus CT for improving your on-chain credit score through consistent DeFi behavior</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-black">Utility Benefits</p>
                            <p className="text-xs text-black/70">Use CT tokens for reduced fees, priority liquidation protection, and exclusive features</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40">
                      <h5 className="text-sm font-semibold text-black mb-2">Dual Token Benefits</h5>
                      <p className="text-xs text-black/70 leading-relaxed">
                        CLEN holders govern the protocol and earn staking rewards, while CT accumulates through credit-building activities. 
                        Together, they create a comprehensive reward system that scales with your DeFi participation and credit reputation.
                      </p>
                    </div>
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
