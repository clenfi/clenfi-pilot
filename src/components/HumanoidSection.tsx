
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // Clean and minimal animation timing
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'all 0.6s ease-out',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress - smoother transitions
          if (progress >= 0.7) {
            setActiveCardIndex(2);
          } else if (progress >= 0.35) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-16 overflow-hidden bg-white" id="why-clenfi">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2 text-gray-900">
              How CLenFi Makes Credit Simple
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1" style={{ perspective: '1000px' }}>
            {/* First Card */}
            <div 
              className="absolute inset-0 overflow-hidden shadow-lg" 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '80px' : '120px'}) scale(${isFirstCardVisible ? '0.95' : '0.9'})`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-green-600/70 to-green-800/95"
                style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "multiply"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Identity</span>
                </div>
              </div>
              
              <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-center">
                <div className="container mx-auto max-w-6xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left lg:pr-8">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                        PAN-Based Zero-Knowledge Verification
                      </h3>
                      <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                        Revolutionary identity verification using ZK-proofs of PAN card data, enabling credit assessment without exposing personal information to third parties.
                      </p>
                    </div>
                    
                    {/* Identity Verification Illustration */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="w-full max-w-sm">
                        {/* Main Identity Card - Clean & Minimal */}
                        <div className="w-full h-40 sm:h-48 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4 sm:p-6 relative">
                          {/* Card Header */}
                          <div className="flex justify-between items-start mb-4 sm:mb-6">
                            <div className="flex-1">
                              <div className="text-white font-semibold text-base sm:text-lg">Identity Verified</div>
                              <div className="text-white/70 text-xs sm:text-sm">Zero-Knowledge Proof</div>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="flex items-center space-x-2 mt-auto">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-white/90 text-xs sm:text-sm">PAN Verified • Private</span>
                          </div>
                          
                          {/* Simple Check Badge */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Card */}
            <div 
              className="absolute inset-0 overflow-hidden shadow-lg" 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '40px' : '30px' : '120px'}) scale(${isSecondCardVisible ? '0.97' : '0.92'})`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-green-600/70 to-green-800/95"
                style={{
                  backgroundImage: "url('/background-section2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "multiply"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Credit Scoring</span>
                </div>
              </div>
              
              <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-center">
                <div className="container mx-auto max-w-6xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left lg:pr-8">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                        Reputation Building System
                      </h3>
                      <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                        On-chain credit scores that may improve with responsible usage. Build your reputation over time to potentially unlock better rates and higher limits.
                      </p>
                    </div>
                    
                    {/* Credit Score Illustration */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="w-full max-w-sm">
                        {/* Credit Score Dashboard - Clean & Minimal */}
                        <div className="w-full h-40 sm:h-48 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4 sm:p-6 relative">
                          {/* Main Content */}
                          <div className="flex items-center justify-between h-full">
                            {/* Credit Score Circle */}
                            <div className="relative flex-shrink-0">
                              <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                  {/* Background circle */}
                                  <circle cx="50" cy="50" r="35" stroke="rgb(255,255,255)" strokeOpacity="0.2" strokeWidth="4" fill="transparent" />
                                  {/* Progress circle */}
                                  <circle 
                                    cx="50" 
                                    cy="50" 
                                    r="35" 
                                    stroke="rgb(16, 185, 129)" 
                                    strokeWidth="4" 
                                    fill="transparent"
                                    strokeLinecap="round"
                                    strokeDasharray={`${(750-300)/(900-300) * 220}, 220`}
                                    className="transition-all duration-2000 ease-out"
                                  />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <div className="text-xl sm:text-2xl font-bold text-white">⭐</div>
                                  <div className="text-xs text-white/70">Building</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Benefits Panel */}
                            <div className="space-y-2 sm:space-y-3 flex-1 ml-4 sm:ml-6">
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10">
                                <div className="text-white font-semibold text-base sm:text-lg">Better Rates</div>
                                <div className="text-white/70 text-xs">Potential Benefit</div>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10">
                                <div className="text-white font-semibold text-base sm:text-lg">Higher Limits</div>
                                <div className="text-white/70 text-xs">Over Time</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third Card */}
            <div 
              className="absolute inset-0 overflow-hidden shadow-lg" 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '0px' : '-5px' : '120px'}) scale(${isThirdCardVisible ? '1' : '0.94'})`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-green-600/70 to-green-800/95"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "multiply"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Credit Lines</span>
                </div>
              </div>
              
              <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex items-center">
                <div className="container mx-auto max-w-6xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left lg:pr-8">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                        NFT-Based <span className="text-emerald-400">Credit Lines</span>
                      </h3>
                      <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                        Unique NFT-based credit lines eliminate over-collateralization. Borrow up to your credit limit with minimal collateral requirements.
                      </p>
                    </div>
                    
                    {/* Credit NFT Illustration */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="w-full max-w-sm">
                        {/* Credit Line Interface - Clean & Minimal */}
                        <div className="w-full h-40 sm:h-48 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4 sm:p-6 relative">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <div className="flex-1">
                              <div className="text-white font-semibold text-base sm:text-lg">Credit Line</div>
                              <div className="text-white/70 text-xs sm:text-sm">NFT-Based</div>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Credit Details */}
                          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div>
                              <div className="text-white/70 text-xs sm:text-sm mb-1">Potential Credit</div>
                              <div className="text-white text-lg sm:text-2xl font-bold">Dynamic</div>
                            </div>
                            <div>
                              <div className="text-white/70 text-xs sm:text-sm mb-1">Collateral</div>
                              <div className="text-emerald-400 text-lg sm:text-2xl font-bold">Minimal</div>
                            </div>
                          </div>
                          
                          {/* Status */}
                          <div className="flex items-center space-x-2 mt-auto">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-white/90 text-xs sm:text-sm">Ready to Use</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
