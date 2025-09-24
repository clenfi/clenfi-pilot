import React, { useState } from "react";

const ProofOfTrust = () => {
  const [activeTab, setActiveTab] = useState("user");

  const governanceRoles = [
    {
      role: "Founders/Core",
      count: 3,
      color: "bg-green-500",
      description: "Protocol founders with deep technical knowledge",
    },
    {
      role: "Risk Experts",
      count: 2,
      color: "bg-blue-500",
      description: "Financial risk assessment specialists",
    },
    {
      role: "Technical Experts",
      count: 2,
      color: "bg-purple-500",
      description: "Blockchain and smart contract auditors",
    },
    {
      role: "Community Leaders",
      count: 2,
      color: "bg-orange-500",
      description: "DeFi community representatives",
    },
    {
      role: "Legal Advisor",
      count: 1,
      color: "bg-red-500",
      description: "Regulatory compliance specialist",
    },
    {
      role: "Financial Advisor",
      count: 1,
      color: "bg-indigo-500",
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight text-black mb-6">
                Revolutionary Credit System Built on Trust
              </h2>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                CLenFi's Proof of Trust mechanism combines individual credit
                scoring with decentralized governance, ensuring transparent and
                reliable financial services through expert oversight and
                community validation.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12 animate-on-scroll">
              <div className="bg-white/40 backdrop-blur-xl rounded-full p-2 border border-white/30 shadow-lg">
                <button
                  onClick={() => setActiveTab("user")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === "user"
                      ? "bg-green-500 text-white shadow-md"
                      : "text-black/70 hover:text-green-600"
                  }`}
                >
                  Your Trust Score
                </button>
                <button
                  onClick={() => setActiveTab("governance")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === "governance"
                      ? "bg-green-500 text-white shadow-md"
                      : "text-black/70 hover:text-green-600"
                  }`}
                >
                  Governance System
                </button>
              </div>
            </div>

            {/* Tabbed Content */}
            {activeTab === "user" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div
                  className="animate-on-scroll"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 underline">
                          Payment History Tracking
                        </h3>
                        <p className="text-gray-600">
                          Your payment history is the foundation of your trust
                          score. Every on-time payment strengthens your
                          reputation, while missed payments affect your
                          credibility in the network.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 underline">
                          Real-Time Trust Scoring
                        </h3>
                        <p className="text-gray-600">
                          Your trust score updates dynamically based on your
                          financial behavior across multiple blockchains. Good
                          behavior is rewarded with better rates and higher
                          credit limits.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 underline">
                          ZK-PAN Privacy Protection
                        </h3>
                        <p className="text-gray-600">
                          Using zero-knowledge proofs with ZK-PAN identity
                          verification, CLenFi validates your financial history
                          without exposing sensitive personal information. Your
                          privacy remains protected while building trust.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 underline">
                          Multi-Chain Network Benefits
                        </h3>
                        <p className="text-gray-600">
                          Your trust reputation works across Ethereum, Arbitrum,
                          and Base networks. As more users build trust in the
                          CLenFi ecosystem, everyone benefits from better rates,
                          increased liquidity, and more lending opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Illustration Side */}
                <div
                  className="animate-on-scroll"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br transparent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <div className="text-black text-center">
                          <div className="text-4xl font-bold mb-1">850</div>
                          <div className="text-sm opacity-90">Trust Score</div>
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold mb-4 text-black">
                        Your Trust Profile
                      </h4>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div
                          className="rounded-xl p-4"
                          style={{
                            background:
                              "linear-gradient(135deg, #f8e1ff 0%, #e1ffe7 100%)",
                          }}
                        >
                          <div
                            className="text-2xl font-bold"
                            style={{ color: "#38BDF8" }}
                          >
                            98%
                          </div>
                          <div className="text-sm" style={{ color: "#A3A3A3" }}>
                            Payment Rate
                          </div>
                        </div>
                        <div
                          className="rounded-xl p-4"
                          style={{
                            background:
                              "linear-gradient(135deg, #d1f7ff 0%, #ffe7d6 100%)",
                          }}
                        >
                          <div
                            className="text-2xl font-bold"
                            style={{ color: "#38BDF8" }}
                          >
                            12%
                          </div>
                          <div className="text-sm" style={{ color: "#A3A3A3" }}>
                            Your APR
                          </div>
                        </div>
                        <div
                          className="rounded-xl p-4"
                          style={{
                            background:
                              "linear-gradient(135deg, #ffe7d6 0%, #f8e1ff 100%)",
                          }}
                        >
                          <div
                            className="text-2xl font-bold"
                            style={{ color: "#38BDF8" }}
                          >
                            $25K
                          </div>
                          <div className="text-sm" style={{ color: "#A3A3A3" }}>
                            Credit Limit
                          </div>
                        </div>
                        <div
                          className="rounded-xl p-4"
                          style={{
                            background:
                              "linear-gradient(135deg, #e1ffe7 0%, #d1f7ff 100%)",
                          }}
                        >
                          <div
                            className="text-2xl font-bold"
                            style={{ color: "#38BDF8" }}
                          >
                            2.5x
                          </div>
                          <div className="text-sm" style={{ color: "#A3A3A3" }}>
                            CT Points
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center justify-center space-x-2 liquid-glass-pill px-6 py-2 rounded-full shadow-lg backdrop-blur-xl border border-white/30"
                        style={{
                          background:
                            "linear-gradient(120deg, #f8e1ff 0%, #d1f7ff 40%, #ffe7d6 80%, #e1ffe7 100%)",
                          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
                          border: "1.5px solid rgba(255,255,255,0.25)",
                        }}
                      >
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/40 backdrop-blur-md mr-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="9"
                              fill="white"
                              fillOpacity="0.7"
                            />
                            <path
                              d="M10 5a5 5 0 100 10A5 5 0 0010 5z"
                              fill="#B0B3F7"
                            />
                          </svg>
                        </span>
                        <span className="text-black font-semibold text-base drop-shadow">
                          Excellent Rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "governance" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div
                  className="animate-on-scroll"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="space-y-6">
                    <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl">
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        7-of-11 Multisig Governance
                      </h3>
                      <p className="text-black/70 mb-6">
                        CLenFi's Proof of Trust is secured by a decentralized
                        governance council requiring 7 signatures from 11 expert
                        validators for all protocol decisions.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30">
                          <span className="font-semibold text-black">
                            Normal Decisions
                          </span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            7/11 Required
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30">
                          <span className="font-semibold text-black">
                            Emergency Actions
                          </span>
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            9/11 Required
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30">
                          <span className="font-semibold text-black">
                            Critical Changes
                          </span>
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                            11/11 Required
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl">
                      <h4 className="text-lg font-semibold mb-3 text-black">
                        What They Oversee
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-black/80">
                            Credit scoring algorithm updates
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-black/80">
                            Risk parameter adjustments
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-black/80">
                            Protocol fee structure
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-black/80">
                            Smart contract upgrades
                          </span>
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
                  <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold mb-2 text-black">
                        Governance Council
                      </h4>
                      <p className="text-black/70">11 Expert Validators</p>
                    </div>

                    <div className="space-y-4">
                      {governanceRoles.map((role, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 ${role.color} rounded-full flex items-center justify-center`}
                            >
                              <span className="text-white font-bold">
                                {role.count}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-black">
                                {role.role}
                              </div>
                              <div className="text-sm text-black/70">
                                {role.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Trust Building Steps */}
            <div
              className="mt-16 animate-on-scroll"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-black">
                {activeTab === "user"
                  ? "Powered by Proof of Trust - How to Build Your Credit"
                  : "Governance Protection Framework"}
              </h3>

              {activeTab === "user" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        1
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2 text-black">
                      ZK-PAN Identity
                    </h4>
                    <p className="text-black/70 text-sm">
                      Complete secure identity verification with zero-knowledge
                      proofs using ZK-PAN technology
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        2
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2 text-black">
                      Start Building
                    </h4>
                    <p className="text-black/70 text-sm">
                      Begin with small credit limits and demonstrate reliable
                      payment behavior across multi-chain
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">
                        3
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2 text-black">
                      Earn CT Points
                    </h4>
                    <p className="text-black/70 text-sm">
                      Make consistent payments to earn non-transferable CT
                      Points and improve your 300-900 credit score
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-orange-600">
                        4
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2 text-black">
                      Access Benefits
                    </h4>
                    <p className="text-black/70 text-sm">
                      Unlock higher NFT credit lines, better rates, CLEN token
                      rewards, and Uniswap V3 liquidity features
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "governance" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.5-1.5a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-3 text-lg text-black">
                      Expert Validation
                    </h4>
                    <p className="text-black/70">
                      All protocol decisions are validated by industry experts
                      across risk management, technical, legal, and community
                      domains
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-3 text-lg text-black">
                      Transparent Decisions
                    </h4>
                    <p className="text-black/70">
                      Every governance decision is recorded on-chain with clear
                      thresholds: 7/11 normal, 9/11 emergency, 11/11 critical
                      changes
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-3 text-lg text-black">
                      Community Incentives
                    </h4>
                    <p className="text-black/70">
                      Governance council members receive fair compensation
                      ($2,000-$5,000/month) ensuring dedicated oversight of
                      protocol security
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfTrust;
