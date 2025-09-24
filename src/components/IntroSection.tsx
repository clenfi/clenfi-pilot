import React from "react";
import RotatingText from "./RotatingText";
import Marquee from "react-fast-marquee";

const IntroSection = () => {
  const features = [
    {
      quote: "Prove who you are privately. Your personal information stays on your device.",
      name: "Secure Identity"
    },
    {
      quote: "Build your credit score by paying on time. Better scores unlock higher limits.",
      name: "Trust Score"
    },
    {
      quote: "Borrow based on trust, not collateral. Pay back over time like a credit card.",
      name: "Credit Lines"
    }
  ];

  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="introduction">
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
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">4</span>
                  <span>Introduction</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main Title with Rotating Animation */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black">
                <span className="text-black">Your </span>
                <RotatingText
                  texts={['Trust', 'Reputation', 'Credibility']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg inline-flex"
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
              
              <p className="text-xl text-black/70 max-w-4xl mx-auto mb-12">
                Stop locking up 150% of what you want to borrow. CLenFi is the first crypto credit platform that works like a traditional credit card - 
                <strong> build trust, get credit, pay over time</strong>. No massive collateral requirements, just proof that you're reliable with money.
              </p>
            </div>

            {/* How CLenFi Works Differently */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-black">
                How CLenFi Works Differently
              </h2>
              <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto">
                Three core innovations that make crypto credit accessible to everyone
              </p>
              
              <div className="w-full overflow-hidden py-4">
                <Marquee 
                  autoFill={true}
                  speed={30}
                  gradient={false}
                  pauseOnHover={true}
                  className="gap-6"
                >
                  {[...features, ...features].map((feature, index) => (
                    <div 
                      key={`${feature.name}-${index}`} 
                      className="w-[350px] max-w-full shrink-0 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 mx-3"
                    >
                      <h4 className="text-xl font-semibold text-black mb-3">{feature.name}</h4>
                      <p className="text-black/80 text-sm">{feature.quote}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Enhanced Benefits Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
                  Why Traditional DeFi Gets It Wrong
                </h3>
                
                <div className="space-y-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/60 to-red-100/40 rounded-2xl backdrop-blur-sm border border-red-200/50"></div>
                    <div className="relative p-6">
                      <h4 className="font-bold text-xl mb-3 text-black group-hover:text-red-800 transition-colors duration-300">Over-Collateralization Problem</h4>
                      <p className="text-black/85 text-base leading-relaxed">Need $1,500 locked up to borrow $1,000? That's capital inefficient and excludes most people from DeFi.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/60 to-emerald-100/40 rounded-2xl backdrop-blur-sm border border-green-200/50"></div>
                    <div className="relative p-6">
                      <h4 className="font-bold text-xl mb-3 text-black group-hover:text-green-800 transition-colors duration-300">Trust-Based Credit</h4>
                      <p className="text-black/85 text-base leading-relaxed">Like traditional credit cards, prove you're reliable and get credit based on trust. Start small, grow your limits over time.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/60 to-indigo-100/40 rounded-2xl backdrop-blur-sm border border-purple-200/50"></div>
                    <div className="relative p-6">
                      <h4 className="font-bold text-xl mb-3 text-black group-hover:text-purple-800 transition-colors duration-300">Rewards for Good Behavior</h4>
                      <p className="text-black/85 text-base leading-relaxed">Pay on time, get rewards. Build a great payment history and unlock VIP benefits, lower rates, and exclusive opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Illustration Side */}
              <div className="relative">
                <div className="relative bg-white/30 backdrop-blur-xl rounded-[24px] p-8 border border-white/40 shadow-xl">
                  <img 
                    src="/card.jpg" 
                    alt="CLenFi Credit Card" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-green-700">Building Credit History</span>
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

export default IntroSection;