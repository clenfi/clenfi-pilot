import React, { useState } from "react";

const ProofOfTrust = () => {
  const [activeTab, setActiveTab] = useState('user');

  const governanceRoles = [
    { role: "Founders/Core", count: 3, color: "bg-green-500", description: "Protocol founders with deep technical knowledge" },
    { role: "Risk Experts", count: 2, color: "bg-blue-500", description: "Financial risk assessment specialists" },
    { role: "Technical Experts", count: 2, color: "bg-purple-500", description: "Blockchain and smart contract auditors" },
    { role: "Community Leaders", count: 2, color: "bg-orange-500", description: "DeFi community representatives" },
    { role: "Legal Advisor", count: 1, color: "bg-red-500", description: "Regulatory compliance specialist" },
    { role: "Financial Advisor", count: 1, color: "bg-indigo-500", description: "Traditional finance expert" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-lime-50 relative" id="proof-of-trust">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-200/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">🔐</span>
            <span>Proof Of Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Revolutionary Credit System Built on Trust
          </h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            CLenFi's Proof of Trust mechanism combines individual credit scoring with decentralized governance, ensuring transparent and reliable financial services through expert oversight and community validation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveTab('user')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'user' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Your Trust Score
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'governance' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Governance System
            </button>
          </div>
        </div>

        {/* Tabbed Content */}
        {activeTab === 'user' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Payment History Tracking</h3>
                    <p className="text-gray-600">
                      Your payment history is the foundation of your trust score. Every on-time payment strengthens your reputation, while missed payments affect your credibility in the network.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Trust Scoring</h3>
                    <p className="text-gray-600">
                      Your trust score updates dynamically based on your financial behavior across multiple blockchains. Good behavior is rewarded with better rates and higher credit limits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">ZK-PAN Privacy Protection</h3>
                    <p className="text-gray-600">
                      Using zero-knowledge proofs with ZK-PAN identity verification, CLenFi validates your financial history without exposing sensitive personal information. Your privacy remains protected while building trust.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Chain Network Benefits</h3>
                    <p className="text-gray-600">
                      Your trust reputation works across Ethereum, Arbitrum, and Base networks. As more users build trust in the CLenFi ecosystem, everyone benefits from better rates, increased liquidity, and more lending opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration Side */}
            <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="relative bg-white rounded-3xl p-8 shadow-elegant">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-1">850</div>
                      <div className="text-sm opacity-90">Trust Score</div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">Your Trust Profile</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-green-700">Payment Rate</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">12%</div>
                      <div className="text-sm text-blue-700">Your APR</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600">$25K</div>
                      <div className="text-sm text-purple-700">Credit Limit</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-600">2.5x</div>
                      <div className="text-sm text-orange-700">CT Points</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 bg-green-100 rounded-full px-4 py-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold text-sm">Excellent Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'governance' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">7-of-11 Multisig Governance</h3>
                  <p className="text-gray-600 mb-6">
                    CLenFi's Proof of Trust is secured by a decentralized governance council requiring 7 signatures from 11 expert validators for all protocol decisions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold">Normal Decisions</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">7/11 Required</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold">Emergency Actions</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">9/11 Required</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold">Critical Changes</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">11/11 Required</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-3">What They Oversee</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Credit scoring algorithm updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Risk parameter adjustments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Protocol fee structure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Smart contract upgrades</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance Visualization Side */}
            <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="relative bg-white rounded-3xl p-8 shadow-elegant">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">Governance Council</h4>
                  <p className="text-gray-600">11 Expert Validators</p>
                </div>
                
                <div className="space-y-4">
                  {governanceRoles.map((role, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${role.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-bold">{role.count}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{role.role}</div>
                          <div className="text-sm text-gray-600">{role.description}</div>
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
        <div className="mt-16 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold text-center mb-8">
            {activeTab === 'user' ? 'How to Build Your Proof of Trust' : 'Governance Protection Framework'}
          </h3>
          
          {activeTab === 'user' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">ZK-PAN Identity</h4>
                <p className="text-gray-600 text-sm">Complete secure identity verification with zero-knowledge proofs using ZK-PAN technology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">Start Building</h4>
                <p className="text-gray-600 text-sm">Begin with small credit limits and demonstrate reliable payment behavior across multi-chain</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Earn CT Points</h4>
                <p className="text-gray-600 text-sm">Make consistent payments to earn non-transferable CT Points and improve your 300-900 credit score</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">Access Benefits</h4>
                <p className="text-gray-600 text-sm">Unlock higher NFT credit lines, better rates, CLEN token rewards, and Uniswap V3 liquidity features</p>
              </div>
            </div>
          )}
          
          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.5-1.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-lg">Expert Validation</h4>
                <p className="text-gray-600">All protocol decisions are validated by industry experts across risk management, technical, legal, and community domains</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-lg">Transparent Decisions</h4>
                <p className="text-gray-600">Every governance decision is recorded on-chain with clear thresholds: 7/11 normal, 9/11 emergency, 11/11 critical changes</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-lg">Community Incentives</h4>
                <p className="text-gray-600">Governance council members receive fair compensation ($2,000-$5,000/month) ensuring dedicated oversight of protocol security</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProofOfTrust;