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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-lime-50 relative" id="credit-scoring" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-200/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">03</span>
            <span>Credit Scoring</span>
          </div>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={3}
            blurStrength={6}
            containerClassName="section-title mb-6"
            textClassName=""
          >
            Revolutionary On-Chain Credit Scoring System
          </ScrollReveal>
          <p className="section-subtitle mx-auto max-w-3xl">
            Build your decentralized credit profile across multiple blockchains. Our AI-powered system analyzes your DeFi behavior to unlock better rates, higher borrowing limits, and exclusive opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animation Side */}
          <div className="relative opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-white rounded-3xl p-8 shadow-elegant">
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
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">A+</div>
                  <div className="text-sm text-green-700">Rating</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-blue-700">Max LTV</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">2.5x</div>
                  <div className="text-sm text-purple-700">Rewards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Payment History Tracking</h3>
                  <p className="text-gray-600">
                    We track how well you pay back loans and manage your credit. Every on-time payment improves your score and unlocks better rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Risk Assessment</h3>
                  <p className="text-gray-600">
                    Real-time risk evaluation adjusts your credit score based on market conditions, portfolio composition, and collateral health across all positions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reputation-Based Benefits</h3>
                  <p className="text-gray-600">
                    Higher credit scores unlock premium benefits: reduced fees, increased borrowing limits, priority liquidation protection, and exclusive yield opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    Your credit score evolves with every transaction. Consistent lending, timely repayments, and diversified DeFi participation boost your rating over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Score Tiers */}
        <div className="mt-16 opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Credit Score Tiers & Benefits</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your credit score determines your borrowing power and exclusive benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Starter Tier */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold">STARTER</div>
              </div>
              <div className="text-center pt-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">C</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">300-579</h4>
                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-gray-700">60%</div>
                    <div className="text-sm text-gray-500">Max Credit</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-gray-700">18%</div>
                    <div className="text-sm text-gray-500">APR Rate</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>✓ Basic credit features</p>
                  <p>✓ Standard support</p>
                </div>
              </div>
            </div>

            {/* Good Tier */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-6 border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">GOOD</div>
              </div>
              <div className="text-center pt-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">B</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">580-669</h4>
                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-yellow-600">70%</div>
                    <div className="text-sm text-gray-500">Max Credit</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-yellow-600">15%</div>
                    <div className="text-sm text-gray-500">APR Rate</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>✓ Lower fees</p>
                  <p>✓ Priority support</p>
                </div>
              </div>
            </div>

            {/* Excellent Tier */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 hover:border-green-400 transition-all duration-300 relative transform hover:scale-105 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">EXCELLENT</div>
              </div>
              <div className="text-center pt-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">A</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">670-799</h4>
                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">80%</div>
                    <div className="text-sm text-gray-500">Max Credit</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">12%</div>
                    <div className="text-sm text-gray-500">APR Rate</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>✓ Premium rates</p>
                  <p>✓ Advanced features</p>
                </div>
              </div>
            </div>

            {/* Elite Tier */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 relative transform hover:scale-105 shadow-xl">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">ELITE</div>
              </div>
              <div className="text-center pt-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">A+</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">800+</h4>
                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-sm text-gray-500">Max Credit</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">9%</div>
                    <div className="text-sm text-gray-500">APR Rate</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>✓ Exclusive rates</p>
                  <p>✓ VIP service</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-semibold">Start building your credit score today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoring;