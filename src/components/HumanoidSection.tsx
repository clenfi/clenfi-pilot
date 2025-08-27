
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
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
          
          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
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
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              How CLenFi Makes Credit Simple
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
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
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl items-center">
                  <div className="max-w-lg mx-auto lg:mx-0 lg:ml-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                      PAN-Based Zero-Knowledge Verification
                    </h3>
                    <p className="text-white/80 text-lg">
                      Revolutionary identity verification using ZK-proofs of PAN card data, enabling credit assessment without exposing personal information to third parties.
                    </p>
                  </div>
                  
                  {/* Identity Verification Illustration */}
                  <div className="flex justify-center lg:justify-start items-center">
                    <div className="relative ml-0 lg:ml-12">
                      {/* Main Identity Card - Landscape */}
                      <div className="w-96 h-56 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-3xl border-2 border-green-400/30 shadow-2xl p-8 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                              <pattern id="identityGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                                <circle cx="4" cy="4" r="1" fill="rgb(34, 197, 94)" opacity="0.3"/>
                              </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#identityGrid)" />
                          </svg>
                        </div>
                        
                        {/* Card Header */}
                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <div>
                            <div className="text-white font-bold text-lg">Secure Identity</div>
                            <div className="text-green-300 text-sm">Privacy Protected</div>
                          </div>
                          <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Verification Status */}
                        <div className="flex items-center space-x-4 relative z-10">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-white/90 text-sm">PAN Verified</span>
                            </div>
                            <div className="text-green-300 text-xs">Zero-Knowledge Proof</div>
                          </div>
                          <div className="text-right">
                            <div className="text-white/90 text-sm font-semibold">ID: ****</div>
                            <div className="text-green-300 text-xs">Private</div>
                          </div>
                        </div>
                        
                        {/* Verification Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full border-4 border-green-400 flex items-center justify-center shadow-lg animate-bounce">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Privacy Protection Indicators */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-8 -left-4 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '0s'}}></div>
                        <div className="absolute top-16 -right-6 w-3 h-3 bg-green-300 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.7s'}}></div>
                        <div className="absolute bottom-12 -left-3 w-2 h-2 bg-green-500 rounded-full opacity-70 animate-ping" style={{animationDelay: '1.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
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
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl items-center">
                  <div className="max-w-lg mx-auto lg:mx-0 lg:ml-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                      Dynamic Credit Scoring (300-900)
                    </h3>
                    <p className="text-white/80 text-lg">
                      Traditional credit scoring system adapted for DeFi, providing personalized interest rates and credit limits based on verified financial behavior.
                    </p>
                  </div>
                  
                  {/* Credit Score Illustration */}
                  <div className="flex justify-center lg:justify-start items-center">
                    <div className="relative ml-0 lg:ml-12">
                      {/* Credit Score Dashboard - Landscape */}
                      <div className="w-96 h-56 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-3xl border-2 border-green-400/30 shadow-2xl p-8 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                              <pattern id="scoreGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <rect width="10" height="10" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="0.5" opacity="0.3"/>
                              </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#scoreGrid)" />
                          </svg>
                        </div>
                        
                        {/* Main Content */}
                        <div className="flex items-center justify-between h-full relative z-10">
                          {/* Credit Score Circle */}
                          <div className="relative">
                            <div className="w-32 h-32 relative">
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                {/* Background circle */}
                                <circle cx="50" cy="50" r="40" stroke="rgb(255,255,255)" strokeOpacity="0.2" strokeWidth="6" fill="transparent" />
                                {/* Progress circle */}
                                <circle 
                                  cx="50" 
                                  cy="50" 
                                  r="40" 
                                  stroke="rgb(34, 197, 94)" 
                                  strokeWidth="6" 
                                  fill="transparent"
                                  strokeLinecap="round"
                                  strokeDasharray={`${(750-300)/(900-300) * 251}, 251`}
                                  className="transition-all duration-2000 ease-out drop-shadow-lg"
                                />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="text-4xl font-bold text-white">750</div>
                                <div className="text-sm text-green-300 font-semibold">Excellent</div>
                              </div>
                            </div>
                            
                            {/* Score Range Indicator */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              <div className="w-4 h-2 bg-red-400 rounded-full opacity-40"></div>
                              <div className="w-4 h-2 bg-yellow-400 rounded-full opacity-40"></div>
                              <div className="w-4 h-2 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                            </div>
                          </div>
                          
                          {/* Benefits Panel */}
                          <div className="space-y-4">
                            <div className="bg-green-500/30 backdrop-blur-sm rounded-2xl p-4 border border-green-400/30">
                              <div className="text-white font-bold text-xl">12%</div>
                              <div className="text-green-300 text-sm">Premium APR</div>
                            </div>
                            <div className="bg-green-500/30 backdrop-blur-sm rounded-2xl p-4 border border-green-400/30">
                              <div className="text-white font-bold text-xl">$25K</div>
                              <div className="text-green-300 text-sm">Credit Limit</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress indicator */}
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-300 text-xs font-semibold">Building Credit</span>
                        </div>
                      </div>
                      
                      {/* Floating Achievement Badges */}
                      <div className="absolute -top-6 -left-6 bg-green-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-xs font-bold shadow-lg animate-bounce">
                        <div className="text-sm">+50</div>
                        <div>Points</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
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
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl items-center">
                  <div className="max-w-lg mx-auto lg:mx-0 lg:ml-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                      NFT-Based <span className="text-green-400">Credit Lines</span>
                    </h3>
                    <p className="text-white/80 text-lg">
                      Unique NFT-based credit lines eliminate over-collateralization. Borrow up to your credit limit with minimal collateral requirements.
                    </p>
                  </div>
                  
                  {/* Credit NFT Illustration */}
                  <div className="flex justify-center lg:justify-start items-center">
                    <div className="relative ml-0 lg:ml-12">
                      {/* Credit Line Interface - Landscape */}
                      <div className="w-96 h-56 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-3xl border-2 border-green-400/30 shadow-2xl p-8 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                              <pattern id="creditGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                                <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="0.5"/>
                                <circle cx="6" cy="6" r="1" fill="rgb(34, 197, 94)" opacity="0.3"/>
                              </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#creditGrid)" />
                          </svg>
                        </div>
                        
                        {/* Main Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-bold text-xl">CLenFi Credit</div>
                              <div className="text-green-300 text-sm">NFT-Based Credit Line</div>
                            </div>
                            <div className="w-16 h-12 bg-green-500/30 rounded-2xl flex items-center justify-center border border-green-400/30">
                              <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Credit Details */}
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <div className="text-white/80 text-sm">Available Credit</div>
                              <div className="text-white text-3xl font-bold">$10,000</div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-300 text-sm">Ready to Use</span>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="text-white/80 text-sm">Collateral Required</div>
                              <div className="text-green-400 text-3xl font-bold">$0</div>
                              <div className="text-green-300 text-sm">Trust-Based</div>
                            </div>
                          </div>
                          
                          {/* NFT ID */}
                          <div className="flex items-center justify-between">
                            <div className="text-green-300 text-sm">#NFT001 • Credit Line</div>
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Zero Collateral Badge */}
                      <div className="absolute -top-8 -right-8 bg-green-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-sm font-bold shadow-2xl animate-bounce border-4 border-green-400">
                        <div className="text-lg">0%</div>
                        <div className="text-xs">Collateral</div>
                      </div>
                      
                      {/* Instant Access Indicator */}
                      <div className="absolute -bottom-6 -left-6 bg-green-500/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-white border border-green-400/50 shadow-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                          <div>
                            <div className="text-sm font-semibold">Instant Access</div>
                            <div className="text-xs text-green-200">No Waiting</div>
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
