import React, { useState } from "react";

const Rewards = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const ctTiers = [
    { tier: "Bronze", multiplier: "0.8x", scoreRange: "300-579", color: "from-amber-600 to-amber-800" },
    { tier: "Silver", multiplier: "1.0x", scoreRange: "580-669", color: "from-gray-400 to-gray-600" },
    { tier: "Gold", multiplier: "1.2x", scoreRange: "670-749", color: "from-yellow-400 to-yellow-600" },
    { tier: "Platinum", multiplier: "1.5x", scoreRange: "750-849", color: "from-purple-500 to-purple-700" },
    { tier: "Diamond", multiplier: "1.8x", scoreRange: "850-900", color: "from-blue-400 to-blue-600" }
  ];

  const clenUtilities = [
    {
      title: "Staking Boost",
      description: "Stake CLEN to boost CT earnings by up to 30%",
      details: "Lock periods: 1-12 months for +5% to +30% CT multiplier",
      icon: "📈"
    },
    {
      title: "Fee Discounts", 
      description: "Pay protocol fees in CLEN for up to 25% discount",
      details: "Save on transaction fees with hard caps per user & epoch",
      icon: "💰"
    },
    {
      title: "Premium Access",
      description: "Access exclusive coupon auctions and partner perks",
      details: "Gated NFT coupons and premium merchant partnerships",
      icon: "🎯"
    },
    {
      title: "Governance Polls",
      description: "Participate in non-binding community sentiment votes",
      details: "CLEN-weighted Snapshot polls reviewed by Proof of Trust",
      icon: "🗳️"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-white to-lime-50 relative" id="rewards">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-200/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">🎁</span>
            <span>Token Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Dual-Token Rewards System
          </h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Earn CT Points for responsible repayment behavior and unlock CLEN token utilities for enhanced benefits, fee discounts, and premium access.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'overview' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('ct-points')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'ct-points' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              CT Points
            </button>
            <button
              onClick={() => setActiveTab('clen-token')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'clen-token' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              CLEN Token
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Repay On-Time</h4>
                    <p className="text-gray-600">Make timely repayments to earn CT Points based on interest paid and your credit tier multiplier.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stake CLEN</h4>
                    <p className="text-gray-600">Stake CLEN tokens to boost your CT earnings by up to 30% and unlock fee discounts.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Use Rewards</h4>
                    <p className="text-gray-600">Apply CT Points to reduce interest payments or redeem exclusive coupon NFTs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-elegant">
              <h4 className="text-xl font-bold mb-6 text-center">Reward Statistics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">0.5 CT</div>
                  <div className="text-sm text-green-700">Per $1 Interest</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">Up to 30%</div>
                  <div className="text-sm text-blue-700">CLEN Staking Boost</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-purple-700">Max Fee Discount</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">1B</div>
                  <div className="text-sm text-orange-700">CLEN Max Supply</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CT Points Tab */}
        {activeTab === 'ct-points' && (
          <div className="animate-on-scroll">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">CT Points - Credit Tokens</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">Non-transferable points earned through responsible repayment behavior. Use CT Points to reduce interest payments or redeem exclusive coupon NFTs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {ctTiers.map((tier, index) => (
                <div key={index} className={`bg-gradient-to-br ${tier.color} rounded-2xl p-6 text-white text-center`}>
                  <div className="text-lg font-bold mb-2">{tier.tier}</div>
                  <div className="text-2xl font-bold mb-1">{tier.multiplier}</div>
                  <div className="text-sm opacity-90">Multiplier</div>
                  <div className="text-xs mt-2 opacity-75">Score: {tier.scoreRange}</div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4">Earning Formula</h4>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-700">CT_earned = min(UserCap, EpochCap,</div>
                  <div className="text-gray-700 ml-4">interestPaid × baseEarnRate × TierMult ×</div>
                  <div className="text-gray-700 ml-4">ScoreFactor × (1 + Bonuses))</div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div>• Base Rate: 0.50 CT per $1 interest</div>
                  <div>• Early Payment Bonus: +10%</div>
                  <div>• Streak Bonus: +10/20/30%</div>
                  <div>• CLEN Staking Boost: +0-30%</div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4">Usage & Benefits</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600">💰</span>
                    </div>
                    <div>
                      <div className="font-medium">Interest Reduction</div>
                      <div className="text-sm text-gray-600">Apply CT Points directly to reduce your interest payments</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600">🎟️</span>
                    </div>
                    <div>
                      <div className="font-medium">Coupon NFTs</div>
                      <div className="text-sm text-gray-600">Redeem CT Points for exclusive merchant coupons and discounts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CLEN Token Tab */}
        {activeTab === 'clen-token' && (
          <div className="animate-on-scroll">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">CLEN Token Utilities</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">Transferable utility token with 1B maximum supply. Stake CLEN to boost rewards, get fee discounts, and access premium features.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {clenUtilities.map((utility, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{utility.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{utility.title}</h4>
                      <p className="text-gray-600 mb-3">{utility.description}</p>
                      <div className="text-sm text-gray-500">{utility.details}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-lime-500 rounded-3xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Token Economics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">1,000,000,000</div>
                  <div className="opacity-90">Maximum Supply</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">20-30%</div>
                  <div className="opacity-90">Rewards Pool</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5-10%</div>
                  <div className="opacity-90">Liquidity Pool Seed</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Governance & Control</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              All reward parameters are controlled by the Proof of Trust (PoT) 7-of-11 multisig governance. CLEN polls provide community sentiment but are non-binding.
            </p>
            <div className="text-sm text-gray-500">
              Rewards are sustainably funded by protocol fees with hard caps and epoch budgets to prevent over-issuance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;