import React from "react";

const ExclusiveForDevs = () => {
  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="exclusive-for-devs">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">14</span>
                  <span>Exclusive For Devs</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight text-black mb-6">
                Build the Future of DeFi Credit
              </h2>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                Integrate CLenFi's revolutionary credit scoring API into your platform and move beyond overcollateralization to a trust-based lending ecosystem.
              </p>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 underline">Credit Scoring API</h3>
                  <p className="text-gray-600">
                    Access our advanced credit scoring algorithm through a simple API integration. Get real-time trust scores for users based on their on-chain financial behavior and payment history.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 underline">Undercollateralized Lending</h3>
                  <p className="text-gray-600">
                    Enable undercollateralized loans on your platform using our trust-based scoring system. Move away from traditional overcollateralization models and unlock true DeFi potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 underline">Multi-Chain Integration</h3>
                  <p className="text-gray-600">
                    Our API supports Ethereum, Arbitrum, and Base networks, providing comprehensive credit scoring across multiple blockchain ecosystems for maximum platform coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
               
                <div>
                  <h3 className="text-xl font-semibold mb-2 underline">Trust-Based Architecture</h3>
                  <p className="text-gray-600">
                    Build platforms that leverage user reputation and financial behavior rather than excessive collateral requirements, creating a more inclusive and efficient lending ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* API Showcase Side */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-black mb-2">CLenFi Credit API</h4>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-blue-600 mb-2">// Get user credit score</div>
                  <div className="text-green-600">
                    <span className="text-blue-600">const</span> creditData = <span className="text-yellow-600">await</span> clenfi.getScore(
                  </div>
                  <div className="text-green-600 ml-4">userAddress: <span className="text-orange-600">"0x..."</span></div>
                  <div className="text-green-600">);</div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-blue-600 mb-2">// Response</div>
                  <div className="text-black">&#123;</div>
                  <div className="text-black ml-4">score: <span className="text-green-600">850</span>,</div>
                  <div className="text-black ml-4">trust_level: <span className="text-orange-600">"excellent"</span>,</div>
                  <div className="text-black ml-4">max_loan: <span className="text-green-600">25000</span>,</div>
                  <div className="text-black ml-4">apr: <span className="text-green-600">12.5</span></div>
                  <div className="text-black">&#125;</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-1">RESTful API</div>
                  <div className="text-sm text-blue-600">Easy Integration • Real-time Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>

            
            {/* Important Disclaimers Section */}
            <div className="mt-16 animate-on-scroll" style={{ animationDelay: "0.8s" }}>
              <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Important Information & Disclaimers</h3>
                  <p className="text-black/70">Please read these important notices carefully before using CLenFi</p>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-red-200 hover:border-red-300 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                     
                      <h4 className="font-bold text-red-700">Risk Warning</h4>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed">
                      Credit involves risk of financial loss if you cannot repay borrowed amounts. Interest rates fluctuate based on market conditions and your creditworthiness. Only borrow what you can comfortably afford to repay within the agreed terms.
                    </p>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      
                      <h4 className="font-bold text-blue-700">Regulatory Notice</h4>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed">
                      CLenFi operates as a decentralized, community-governed protocol through transparent smart contracts. Token holders participate in governance decisions. This platform does not provide financial advice - consult qualified professionals before use.
                    </p>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-purple-200 hover:border-purple-300 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      
                      <h4 className="font-bold text-purple-700">Security & Audits</h4>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed">
                      Our smart contracts undergo rigorous security audits by leading blockchain security firms. However, DeFi protocols carry inherent risks. Please conduct your own research and understand the technology before participating.
                    </p>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-orange-200 hover:border-orange-300 transition-colors">
                    <div className="flex items-center gap-3 mb-4">

                      <h4 className="font-bold text-orange-700">Credit Responsibility</h4>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed">
                      All credit examples and multipliers shown are illustrative. Actual terms depend on individual creditworthiness. Users are solely responsible for their borrowing decisions, repayment obligations, and proper use of credit facilities.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30">
                  <p className="text-sm text-black/80 text-center font-medium">
                    By using CLenFi, you acknowledge that you understand these terms, the associated risks of DeFi credit, and that you are using the platform at your own discretion and responsibility.
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

export default ExclusiveForDevs;