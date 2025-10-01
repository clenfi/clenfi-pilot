import React from "react";
import RotatingText from "./RotatingText";
import Marquee from "react-fast-marquee";

const IntroSection = () => {
  const features = [
    {
      quote: "PAN Card verified with zero-knowledge privacy.",
      name: "ZK Identity",
    },
    {
      quote: "Smart algorithms analyze your on-chain history.",
      name: "AI Wallet Analysis",
    },
    {
      quote:
        " High scores = as little as 5% collateral. Low scores = up to 80%.",
      name: "Dynamic Collateral",
    },
    {
      quote:
        "TrustScore is governed transparently by ClenFi’s Proof-of-Trust system.",
      name: "Governance Control",
    },
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
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">
                    4
                  </span>
                  <span>Introduction</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Apple Liquid Glass Hero Card */}
            <div className="mb-12 sm:mb-16 animate-on-scroll">
              <div className="relative overflow-hidden bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-3xl rounded-[32px] p-8 sm:p-12 md:p-16 border border-white/20 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_100px_-15px_rgba(0,0,0,0.3)] transition-all duration-700">
                {/* Subtle animated gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none animate-pulse opacity-70"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center">
                  {/* Main heading with enhanced styling */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9]">
                    <span className="text-black">Your </span>
                    <div className="relative inline-block">
                      <RotatingText
                        texts={["Trust", "Reputation", "Credibility"]}
                        mainClassName="px-3 sm:px-4 md:px-5 bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white overflow-hidden py-2 sm:py-2 md:py-3 justify-center rounded-2xl inline-flex shadow-2xl border border-gray-700/50"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={3000}
                      />
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
                    </div>
                    <span className="text-black"> is Your Credit</span>
                  </h2>

                  {/* Enhanced description */}
                  <div className="relative">
                    <p className="text-xl sm:text-2xl text-black/80 max-w-5xl mx-auto leading-relaxed">
                      Stop locking up 150% of what you want to borrow. CLenFi is
                      the first crypto credit platform that works like a
                      traditional credit card -
                      <span className="font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                        {" "}
                        build trust, get credit, pay over time
                      </span>
                      . No massive collateral requirements, just proof that
                      you're reliable with money.
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Apple-style subtle shine effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Apple Liquid Glass TrustScore Display */}
            <div className="mb-16 animate-on-scroll">
              <div className="relative overflow-hidden bg-gradient-to-br from-white/12 via-white/8 to-white/4 backdrop-blur-3xl rounded-[40px] p-10  md:p-16 border border-white/15 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.35)] transition-all duration-700 ">
                {/* Floating gradient orbs for depth */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-emerald-400/6 to-green-400/6 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-br from-amber-400/6 to-orange-400/6 rounded-full blur-3xl"></div>

                {/* Subtle animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3 pointer-events-none animate-pulse opacity-60"></div>

                <div className="relative z-10">
                  {/* Header section */}
                  <div className="text-center mb-12">
                    {/* Apple-style indicator */}

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                      TrustScore: Credit Built on Trust
                    </h2>

                    <p className="text-xl sm:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
                      Your creditworthiness is powered by TrustScore (0–900) .
                    </p>
                  </div>

                  {/* Apple-style feature grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
                    {features.map((feature, index) => (
                      <div
                        key={feature.name}
                        className="group relative overflow-hidden bg-white/15 backdrop-blur-2xl rounded-[28px] p-6 sm:p-8 border border-white/20 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_80px_-10px_rgba(0,0,0,0.25)] transition-all duration-600 hover:scale-[1.01] hover:bg-white/20 w-full "
                        style={{ animationDelay: `${index * 0.15}s` }}
                      >
                        {/* Individual card gradient overlay */}
                        <div
                          className={`absolute inset-0 opacity-40 pointer-events-none ${
                            index === 0
                              ? "bg-gradient-to-br from-emerald-500/8 via-transparent to-green-500/8"
                              : index === 1
                              ? "bg-gradient-to-br from-blue-500/8 via-transparent to-indigo-500/8"
                              : index === 2
                              ? "bg-gradient-to-br from-purple-500/8 via-transparent to-pink-500/8"
                              : "bg-gradient-to-br from-orange-500/8 via-transparent to-amber-500/8"
                          }`}
                        ></div>

                        {/* Apple-style shine effect */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                        <div className="relative z-10 ">
                          {/* Feature header */}
                          <div className="mb-6">
                            <h4
                              className={`text-xl font-bold leading-tight text-center  `}
                            >
                              {feature.name}
                            </h4>
                          </div>

                          {/* Feature description */}
                          <p className="text-black/75 leading-relaxed text-lg">
                            {feature.quote}
                          </p>

                          {/* Apple-style subtle accent line */}
                          
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Dial Microcopy */}
                  <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center gap-8">
                        <div className="text-center">
                          <div className="text-green-600 font-bold text-lg">
                            Low Risk (750+)
                          </div>
                          <div className="text-black/70 text-sm">
                            → 5% collateral
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-600 font-bold text-lg">
                            High Risk (&lt;400)
                          </div>
                          <div className="text-black/70 text-sm">
                            → 80% collateral
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Apple-style bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/60 to-red-100/40 rounded-2xl backdrop-blur-sm "></div>
                    <div className="relative p-6">
                      <h4 className="font-bold text-xl mb-3 text-black group-hover:text-red-800 transition-colors duration-300">
                        Over-Collateralization Problem
                      </h4>
                      <p className="text-black/85 text-base leading-relaxed">
                        Need $1,500 locked up to borrow $1,000? That's capital
                        inefficient and excludes most people from DeFi.
                      </p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/60 to-emerald-100/40 rounded-2xl backdrop-blur-sm border border-green-200/50"></div>
                    <div className="relative p-6">
                      <h4 className="font-bold text-xl mb-3 text-black group-hover:text-green-800 transition-colors duration-300">
                        Trust-Based Credit
                      </h4>
                      <p className="text-black/85 text-base leading-relaxed">
                        Like traditional credit cards, prove you're reliable and
                        get credit based on trust. Start small, grow your limits
                        over time.
                      </p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/60 to-indigo-100/40 rounded-2xl backdrop-blur-sm border border-purple-200/50"></div>
                    <div className="relative p-6">
                      <h4 className="font-bold text-xl mb-3 text-black group-hover:text-purple-800 transition-colors duration-300">
                        Rewards for Good Behavior
                      </h4>
                      <p className="text-black/85 text-base leading-relaxed">
                        Pay on time, get rewards. Build a great payment history
                        and unlock VIP benefits, lower rates, and exclusive
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration Side */}
              <div className="relative">
                <div className="relative bg-white/30 backdrop-blur-xl rounded-[24px] p-8 border border-white/40 shadow-xl">
                  <img
                    src="/Gemini_Generated_Image_lstae3lstae3lsta.png"
                    alt="CLenFi Credit Card"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-green-700">
                        Building Credit History
                      </span>
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
