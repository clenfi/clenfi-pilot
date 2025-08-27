import React from "react";
import RotatingText from "./RotatingText";

const IntroSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-green-100 to-lime-50" id="introduction">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Main Title with Rotating Animation */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <span className="text-black">Your </span>
            <RotatingText
              texts={['Trust', 'Reputation', 'Credibility']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-green-400 text-white overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <span className="text-black"> is Your Credit</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
            Stop locking up 150% of what you want to borrow. CLenFi is the first crypto credit platform that works like a traditional credit card - 
            <strong> build trust, get credit, pay over time</strong>. No massive collateral requirements, just proof that you're reliable with money.
          </p>
        </div>

        {/* How CLenFi Works Differently */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">
            How CLenFi Works Differently
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Three core innovations that make crypto credit accessible to everyone
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Identity */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Secure Identity</h4>
              </div>
              <p className="text-gray-600 text-center">
                Prove who you are privately. Your personal information stays on your device.
              </p>
            </div>

            {/* Trust Score */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-2xl">750</div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Trust Score</h4>
              </div>
              <p className="text-gray-600 text-center">
                Build your credit score by paying on time. Better scores unlock higher limits.
              </p>
            </div>

            {/* Credit Lines */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Credit Lines</h4>
              </div>
              <p className="text-gray-600 text-center">
                Borrow based on trust, not collateral. Pay back over time like a credit card.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
              Why Traditional DeFi Gets It Wrong
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">❌</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Over-Collateralization Problem</h4>
                  <p className="text-gray-600">Need $1,500 locked up to borrow $1,000? That's capital inefficient and excludes most people from DeFi.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✅</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Trust-Based Credit</h4>
                  <p className="text-gray-600">Like traditional credit cards, prove you're reliable and get credit based on trust. Start small, grow your limits over time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Rewards for Good Behavior</h4>
                  <p className="text-gray-600">Pay on time, get rewards. Build a great payment history and unlock VIP benefits, lower rates, and exclusive opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <img 
                src="/card.jpg" 
                alt="CLenFi Credit Card" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">Building Credit History</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;