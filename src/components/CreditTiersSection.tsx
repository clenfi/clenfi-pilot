import React from "react";

const CreditTiersSection = () => {
  const tiers = [
    {
      name: "Bronze",
      limit: "$1,000",
      apr: "24%",
      boost: "0.8×",
      color: "from-amber-600 to-orange-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      textColor: "text-amber-800"
    },
    {
      name: "Silver",
      limit: "$2,500",
      apr: "18%",
      boost: "1.0×",
      color: "from-slate-400 to-slate-600",
      bgColor: "bg-gradient-to-br from-slate-50 to-gray-100",
      textColor: "text-slate-800"
    },
    {
      name: "Gold",
      limit: "$5,000",
      apr: "15%",
      boost: "1.2×",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100",
      textColor: "text-yellow-800"
    },
    {
      name: "Platinum",
      limit: "$10,000",
      apr: "12%",
      boost: "1.5×",
      color: "from-gray-300 to-gray-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-100",
      textColor: "text-gray-800"
    },
    {
      name: "Diamond",
      limit: "$25,000",
      apr: "9%",
      boost: "1.8×",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      textColor: "text-blue-800"
    }
  ];

  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="credit-tiers">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-200 mr-2">8</span>
                  <span>Credit Tiers</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                Choose Your Credit Tier
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                As your TrustScore grows, so does your credit power.
              </p>
            </div>

            {/* Tier Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {tiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`bg-white/30 backdrop-blur-xl rounded-[20px] overflow-hidden shadow-lg border border-white/40 hover:transform hover:scale-105 transition-all duration-300 ${
                    index === 2 ? 'lg:scale-110 border-yellow-400/60 shadow-yellow-200/50' : ''
                  }`}
                >
                  {/* Card Header */}
                  <div className={`h-24 sm:h-32 p-4 sm:p-6 bg-gradient-to-br ${tier.color} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white relative z-10">
                      {tier.name}
                    </h3>
                    
                  </div>

                  {/* Card Content */}
                  <div className="bg-white/40 backdrop-blur-sm p-4 sm:p-6 border-t border-white/30">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-black/70">Limit:</span>
                        <span className="font-semibold text-black">{tier.limit}</span>
                      </div>

                      <div className="flex justify-between items-center group relative">
                        <span className="text-sm text-black/70 cursor-help">
                          APR:
                          <span className="ml-1 text-xs bg-black/10 rounded-full w-4 h-4 inline-flex items-center justify-center">?</span>
                        </span>
                        <span className="font-semibold text-black">{tier.apr}</span>

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-0 w-48 p-2 bg-black text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                          Annualized interest rate applied to your borrowings.
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-black/70">CT Boost:</span>
                        <span className="font-semibold text-black">{tier.boost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-lg max-w-md mx-auto">
                <p className="text-sm text-black/80">
                  Start with Bronze tier and unlock higher limits as you build your TrustScore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditTiersSection;