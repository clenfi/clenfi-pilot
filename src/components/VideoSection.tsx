import React, { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-green-50 relative" id="video-section">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">▶</span>
            <span>Learn About CLenFi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
            Discover the Future of <span className="text-green-500">DeFi Lending</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our comprehensive overview to understand how CLenFi revolutionizes decentralized lending with intelligent credit scoring and NFT-based financial instruments.
          </p>
        </div>

        <div className="max-w-5xl mx-auto opacity-0 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/heroimage2.jpg"
                preload="metadata"
              >
                <source src="/Clenfi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom play button overlay (optional) */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-all duration-300"
                  onClick={handlePlayPause}
                >
                  <div className="w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video metadata */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-1">5:30</div>
                <div className="text-sm text-green-700">Duration</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">HD</div>
                <div className="text-sm text-blue-700">Quality</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-1">2024</div>
                <div className="text-sm text-purple-700">Latest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key topics covered */}
        <div className="mt-16 opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What You'll Learn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Credit Scoring</h4>
              <p className="text-gray-600 text-sm">
                How our AI-powered system analyzes DeFi behavior to create dynamic credit profiles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10l2-12H5l2 12z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 9V7a4 4 0 018 0v2"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">NFT Credit Cards</h4>
              <p className="text-gray-600 text-sm">
                Discover how NFT-based credit instruments enable tradeable debt and dynamic lending.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Cross-Chain</h4>
              <p className="text-gray-600 text-sm">
                Learn how CLenFi works seamlessly with popular crypto wallets and platforms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Tokenomics</h4>
              <p className="text-gray-600 text-sm">
                Understand the CLEN token utility and governance mechanisms driving the protocol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;