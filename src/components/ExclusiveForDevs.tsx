import React from "react";

const ExclusiveForDevs = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative" id="exclusive-for-devs">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white mr-2">👨‍💻</span>
            <span>Exclusive For Devs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Build the Future of DeFi Credit
          </h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Integrate CLenFi's revolutionary credit scoring API into your platform and move beyond overcollateralization to a trust-based lending ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Credit Scoring API</h3>
                  <p className="text-gray-600">
                    Access our advanced credit scoring algorithm through a simple API integration. Get real-time trust scores for users based on their on-chain financial behavior and payment history.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Undercollateralized Lending</h3>
                  <p className="text-gray-600">
                    Enable undercollateralized loans on your platform using our trust-based scoring system. Move away from traditional overcollateralization models and unlock true DeFi potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Chain Integration</h3>
                  <p className="text-gray-600">
                    Our API supports Ethereum, Arbitrum, and Base networks, providing comprehensive credit scoring across multiple blockchain ecosystems for maximum platform coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.5-1.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trust-Based Architecture</h3>
                  <p className="text-gray-600">
                    Build platforms that leverage user reputation and financial behavior rather than excessive collateral requirements, creating a more inclusive and efficient lending ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* API Showcase Side */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-gray-900 rounded-3xl p-8 shadow-elegant">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">CLenFi Credit API</h4>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-blue-300 mb-2">// Get user credit score</div>
                  <div className="text-green-300">
                    <span className="text-blue-300">const</span> creditData = <span className="text-yellow-300">await</span> clenfi.getScore(
                  </div>
                  <div className="text-green-300 ml-4">userAddress: <span className="text-orange-300">"0x..."</span></div>
                  <div className="text-green-300">);</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-blue-300 mb-2">// Response</div>
                  <div className="text-white">&#123;</div>
                  <div className="text-white ml-4">score: <span className="text-green-300">850</span>,</div>
                  <div className="text-white ml-4">trust_level: <span className="text-orange-300">"excellent"</span>,</div>
                  <div className="text-white ml-4">max_loan: <span className="text-green-300">25000</span>,</div>
                  <div className="text-white ml-4">apr: <span className="text-green-300">12.5</span></div>
                  <div className="text-white">&#125;</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-1">RESTful API</div>
                  <div className="text-sm text-blue-200">Easy Integration • Real-time Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Revolutionize Lending?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Join the next generation of DeFi platforms that prioritize trust over collateral. Access our API and build the future of decentralized finance.
            </p>
            
            <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-xl">OPPORTUNITY OPENS SOON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveForDevs;