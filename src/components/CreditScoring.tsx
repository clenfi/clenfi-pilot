import React, { useRef, useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ScrollReveal from './ScrollReveal';

const CreditScoring = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimation, setHasAnimation] = useState<boolean>(false);

  useEffect(() => {
    // Enable DotLottieReact animation
    setHasAnimation(true);
  }, []);

  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="credit-scoring" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-green-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">5</span>
                  <span>Credit Scoring</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12 sm:mb-16 ">
              
               <p className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-12 leading-[0.9] text-black">
                 Smart Credit Scores That Work Everywhere
                </p>
            
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                Build your decentralized credit profile across multiple blockchains. Our AI-powered system analyzes your DeFi behavior to unlock better rates, higher borrowing limits, and exclusive opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Animation Side */}
              <div className="relative">
                <div className="relative bg-white/30 backdrop-blur-xl rounded-[24px] p-8 border border-white/40 shadow-xl">
              <div className="aspect-square max-w-md mx-auto">
                {hasAnimation ? (
                  <DotLottieReact
                    src="https://lottie.host/26263650-4d92-4681-9a11-024ca9558e36/NXKLs4KtpC.lottie"
                    loop
                    autoplay
                    className="w-full h-full"
                  />
                ) : (
                  // Animated fallback credit score display
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-lime-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Animated background circles */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-green-300/30 rounded-full animate-pulse"></div>
                      <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-lime-300/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-green-200/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>
                    
                    <div className="text-center relative z-10">
                      <div className="mb-6">
                        <div className="text-7xl font-bold text-green-600 mb-2 animate-pulse">850</div>
                        <div className="text-xl text-gray-700 font-medium">Credit Score</div>
                      </div>
                      
                      {/* Animated progress ring */}
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-gray-200"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="62.8"
                            className="text-green-500 transition-all duration-1000 ease-out animate-pulse"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-600">A+</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-3 h-3 bg-green-500 rounded-full animate-bounce" 
                            style={{animationDelay: `${i * 0.2}s`}}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
                  {/* Score Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {/* Rating Card */}
                    <div className="relative group overflow-hidden rounded-2xl p-6 backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-black">A+</div>
                        <div className="text-sm text-black/80 mt-1">Rating</div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400/20 rounded-full filter blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                    </div>

                    {/* LTV Card */}
                    <div className="relative group overflow-hidden rounded-2xl p-6 backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-black">85%</div>
                        <div className="text-sm text-black/80 mt-1">Max LTV</div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full filter blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                    </div>

                    {/* Rewards Card */}
                    <div className="relative group overflow-hidden rounded-2xl p-6 backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-black">2.5x</div>
                        <div className="text-sm text-black/80 mt-1">Rewards</div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-400/20 rounded-full filter blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">Payment History Tracking</h3>
                      <p className="text-black/80">
                        We track how well you pay back loans and manage your credit. Every on-time payment improves your score and unlocks better rates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">Smart Risk Evaluation</h3>
                      <p className="text-black/80">
                        Your credit score updates automatically based on how the crypto market is doing and how well you're managing your investments and payments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">Better Scores = Better Deals</h3>
                      <p className="text-black/80">
                        Higher credit scores get you amazing perks: lower fees, higher credit limits, protection during market crashes, and access to exclusive investment opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black  underline">Always Getting Better</h3>
                      <p className="text-black/80">
                        Your credit score improves with every payment you make on time. Stay consistent with payments and try different crypto activities to boost your rating.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-semibold">Start building your credit score today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoring;