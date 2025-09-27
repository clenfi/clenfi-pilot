import React from "react";
import CountUp from './CountUp';

const ProofOfTrust = () => {
  const governanceRoles = [
    {
      role: "Founders/Core",
      count: 3,
      color: "bg-gradient-to-r from-green-100 via-pink-100 to-blue-100",
      textColor: "text-black",
      description: "Protocol founders with deep technical knowledge",
    },
    {
      role: "Risk Experts",
      count: 2,
      color: "bg-gradient-to-r from-blue-100 via-green-100 to-purple-100",
      textColor: "text-black",
      description: "Financial risk assessment specialists",
    },
    {
      role: "Technical Experts",
      count: 2,
      color: "bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100",
      textColor: "text-black",
      description: "Blockchain and smart contract auditors",
    },
    {
      role: "Community Leaders",
      count: 2,
      color: "bg-gradient-to-r from-orange-100 via-pink-100 to-green-100",
      textColor: "text-black",
      description: "DeFi community representatives",
    },
    {
      role: "Legal Advisor",
      count: 1,
      color: "bg-gradient-to-r from-pink-100 via-red-100 to-purple-100",
      textColor: "text-black",
      description: "Regulatory compliance specialist",
    },
    {
      role: "Financial Advisor",
      count: 1,
      color: "bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100",
      textColor: "text-black",
      description: "Traditional finance expert",
    },
  ];

  return (
    <section
      className="w-full py-10 sm:py-16 bg-transparent"
      id="proof-of-trust"
    >
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
                    13
                  </span>
                  <span>Proof Of Trust</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12 opacity-0 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                Revolutionary Credit System Built on Trust
              </h2>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                CLenFi's Proof of Trust mechanism combines individual credit
                scoring with decentralized governance, ensuring transparent and
                reliable financial services through expert oversight and
                community validation.
              </p>
            </div>

            {/* Governance Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div
                className="animate-on-scroll"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-8">
                  {/* Modern Multisig Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_80px_-10px_rgba(0,0,0,0.4)] transition-all duration-500">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

                    <div className="relative z-10">
                      {/* Modern header with icon */}
                      <div className="text-center mb-6 underline">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent underline">
                          7-of-11 Multisig Governance
                        </h3>
                      </div>

                      <p className="text-black/80 mb-8 text-lg leading-relaxed">
                        CLenFi's Proof of Trust is secured by a decentralized
                        governance council requiring 7 signatures from 11 expert
                        validators for all protocol decisions.
                      </p>

                      {/* Modern decision cards */}
                      <div className="grid gap-4">
                        <div className="group relative overflow-hidden bg-white/40 backdrop-blur-xl rounded-2xl p-5 border border-white/40 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg"></div>
                              <span className="font-semibold text-black text-lg">
                                Normal Decisions
                              </span>
                            </div>
                            <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-200 shadow-sm">
                              <CountUp from={0} to={7} direction="up" duration={1.5} />/11 Required
                            </span>
                          </div>
                        </div>

                        <div className="group relative overflow-hidden bg-white/40 backdrop-blur-xl rounded-2xl p-5 border border-white/40 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"></div>
                              <span className="font-semibold text-black text-lg">
                                Emergency Actions
                              </span>
                            </div>
                            <span className="bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold border border-yellow-200 shadow-sm">
                              <CountUp from={0} to={9} direction="up" duration={1.8} />/11 Required
                            </span>
                          </div>
                        </div>

                        <div className="group relative overflow-hidden bg-white/40 backdrop-blur-xl rounded-2xl p-5 border border-white/40 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-rose-500 shadow-lg"></div>
                              <span className="font-semibold text-black text-lg">
                                Critical Changes
                              </span>
                            </div>
                            <span className="bg-gradient-to-r from-red-50 to-rose-50 text-red-700 px-4 py-2 rounded-full text-sm font-bold border border-red-200 shadow-sm">
                              <CountUp from={0} to={11} direction="up" duration={2} />/11 Required
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Governance Visualization Side */}
              <div
                className="animate-on-scroll"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Modern Oversight Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_80px_-10px_rgba(0,0,0,0.35)] transition-all duration-500">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

                    <div className="relative z-10">
                      {/* Modern header with icon */}
                      <div className="text-center mb-6 underline">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent underline">
                          What They Oversee
                        </h4>
                      </div>

                      <div className="grid gap-3">
                        <div className="flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/40 transition-all duration-300 group">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-black/90 font-medium text-lg">
                            Credit scoring algorithm updates
                          </span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/40 transition-all duration-300 group">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-black/90 font-medium text-lg">
                            Risk parameter adjustments
                          </span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/40 transition-all duration-300 group">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-black/90 font-medium text-lg">
                            Protocol fee structure
                          </span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/40 transition-all duration-300 group">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-black/90 font-medium text-lg">
                            Smart contract upgrades
                          </span>
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
  );
};

export default ProofOfTrust;
