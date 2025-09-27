import React from 'react';

const NextGenCredit = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-lime-50">
      <div className="container mx-auto max-w-7xl">
        <div className="relative">
          {/* 3D Shadow Card */}
          <div 
            className="relative bg-white rounded-2xl p-8 md:p-12 transform transition-all duration-300 hover:scale-[1.02]"
            style={{
              boxShadow: `
                0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04),
                0 0 0 1px rgba(0, 0, 0, 0.05),
                20px 20px 40px rgba(34, 197, 94, 0.15),
                -10px -10px 30px rgba(255, 255, 255, 0.5)
              `,
              backgroundImage: `
                linear-gradient(145deg, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(249, 250, 251, 1) 100%
                )
              `
            }}
          >
            {/* Subtle gradient overlay for 3D effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                Next Generation Credit
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Credit cards on Web3 made easy. Get uncollateralized loans based on trust, just like 
                traditional credit cards, but powered by blockchain technology for instant access and global reach.
              </p>
              
              {/* Additional 3D elements */}
              <div className="flex justify-center mt-12 space-x-8">
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Zero-Knowledge</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Instant Liquidity</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Smart Scoring</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime-200 rounded-full opacity-20 blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default NextGenCredit;