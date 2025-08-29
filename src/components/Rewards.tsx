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
      title: "Reward Boost",
      description: "Hold CLenFi coins to earn up to 30% more points",
      details: "Keep coins locked for 1-12 months for +5% to +30% bonus",
      icon: "📈"
    },
    {
      title: "Fee Discounts", 
      description: "Pay fees with CLenFi coins to save up to 25%",
      details: "Use coins instead of cash to pay platform fees and save money",
      icon: "💰"
    },
    {
      title: "VIP Access",
      description: "Get exclusive deals and special partner offers",
      details: "Access to special discounts and premium merchant partnerships",
      icon: "🎯"
    },
    {
      title: "Community Voice",
      description: "Vote on important platform decisions",
      details: "Your opinion matters - help shape the future of CLenFi",
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
            <span>Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Get Rewarded for Good Credit
          </h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Earn reward points every time you pay on time. Use points to reduce interest costs or get exclusive discounts. Plus, collect CLenFi coins for even better benefits and premium features.
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
              Reward Points
            </button>
            <button
              onClick={() => setActiveTab('clen-token')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'clen-token' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              CLenFi Coins
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
                    <h4 className="font-semibold mb-2">Pay On Time</h4>
                    <p className="text-gray-600">Pay your credit card bill on time to earn reward points. Better credit scores earn more points per payment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hold CLenFi Coins</h4>
                    <p className="text-gray-600">Keep CLenFi coins in your account to earn up to 30% more reward points and get discounts on fees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Use Rewards</h4>
                    <p className="text-gray-600">Use your reward points to lower your interest charges or get exclusive discounts and perks.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-elegant">
              <h4 className="text-xl font-bold mb-6 text-center">Reward Statistics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">0.5 Points</div>
                  <div className="text-sm text-green-700">Per $1 Interest Paid</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">Up to 30%</div>
                  <div className="text-sm text-blue-700">Extra Points Bonus</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-purple-700">Max Fee Discount</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">1B</div>
                  <div className="text-sm text-orange-700">CLenFi Coins Total</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CT Points Tab */}
        {activeTab === 'ct-points' && (
          <div className="animate-on-scroll">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Reward Points</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">Points you earn by paying your bills on time - like credit card cashback, but better. Use points to lower your interest charges or get exclusive discounts.</p>
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
                <h4 className="text-lg font-semibold mb-4">How You Earn Points</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center text-gray-700 text-lg font-semibold mb-4">More Interest Paid = More Points Earned</div>
                  <div className="text-center text-gray-600">Plus bonuses for good behavior!</div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div>• Base Rate: 0.5 points per $1 interest paid</div>
                  <div>• Pay Early Bonus: +10% extra points</div>
                  <div>• On-time Streak: +10/20/30% for 3/6/12 months</div>
                  <div>• CLenFi Coins Bonus: +0-30% extra points</div>
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
                      <div className="font-medium">Lower Interest</div>
                      <div className="text-sm text-gray-600">Use points to directly reduce what you owe in interest</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600">🎟️</span>
                    </div>
                    <div>
                      <div className="font-medium">Exclusive Discounts</div>
                      <div className="text-sm text-gray-600">Trade points for special coupons and deals from partner stores</div>
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
              <h3 className="text-2xl font-bold mb-4">CLenFi Coins Benefits</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">CLenFi's special coins that you can buy, sell, or trade. Hold them to get bigger rewards, pay less fees, and unlock premium features.</p>
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
            <h3 className="text-xl font-bold mb-4">How Rewards Are Managed</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              All reward rules are managed by our expert council of 11 trusted members. Community votes help guide decisions, but experts have final say to keep things secure.
            </p>
            <div className="text-sm text-gray-500">
              Rewards come from platform fees and are carefully budgeted to ensure they're always sustainable and fair.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;