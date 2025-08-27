import React from "react";
import CardSwap, { Card } from "./CardSwap";
import ScrollReveal from './ScrollReveal';

const NFTCreditCards = () => {
  const handleCardClick = (index: number) => {
    console.log(`Card ${index} clicked`);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-lime-50 relative" id="nft-cards">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-200/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">04</span>
            <span>NFT Credit System</span>
          </div>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={3}
            blurStrength={6}
            containerClassName="section-title mb-6"
            textClassName=""
          >
            Dynamic NFT Credit Cards
          </ScrollReveal>
          <p className="section-subtitle mx-auto max-w-3xl">
            Experience the future of DeFi lending with our revolutionary NFT-based credit system. Each card represents a unique financial instrument backed by blockchain technology, featuring dynamically upgradable NFTs that evolve with your credit profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy-First Identity</h3>
                  <p className="text-gray-600">
                    Our zero-knowledge identity verification system uses PAN card data to create a privacy-preserving digital identity. Your sensitive information stays encrypted while providing verifiable credentials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dynamically Upgradable NFTs</h3>
                  <p className="text-gray-600">
                    Credit NFTs (cNFTs) automatically upgrade as your credit score improves. From Starter to Elite tiers, your NFT artwork, metadata, and benefits evolve to match your growing reputation and unlock premium features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 21h10l2-12H5l2 12z"/>
                    <path d="M5 9V7a4 4 0 0 1 8 0v2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tradeable Debt Instruments</h3>
                  <p className="text-gray-600">
                    Debt NFTs (dNFTs) represent transferable debt positions, enabling advanced DeFi strategies. Trade debt, hedge positions, or create sophisticated financial instruments while maintaining liquidation protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-gray-600">
                    All NFT metadata updates automatically based on on-chain events. Your credit cards reflect live collateral ratios, debt positions, and market conditions in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CardSwap Animation */}
          <div className="relative opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <CardSwap
              width={400}
              height={280}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={true}
              onCardClick={handleCardClick}
              skewAmount={4}
              easing="elastic"
            >
              <Card customClass="identity-card">
                <div className="card-content">
                  <div className="card-badge">Verified</div>
                  <div className="card-icon">ID</div>
                  <h3 className="card-title">Identity Verification NFT</h3>
                  <p className="card-description">
                    Zero-knowledge proof based identity verification using PAN card data. 
                    Secure, private, and instantly verifiable on-chain identity.
                  </p>
                </div>
              </Card>
              
              <Card customClass="credit-card">
                <div className="card-content">
                  <div className="card-badge">Upgradable</div>
                  <div className="card-icon">cNFT</div>
                  <h3 className="card-title">Credit NFT (cNFT)</h3>
                  <p className="card-description">
                    Dynamically upgradable NFT that evolves with your credit score. 
                    Artwork, tier status, and benefits automatically upgrade as you build trust.
                  </p>
                </div>
              </Card>
              
              <Card customClass="debt-card">
                <div className="card-content">
                  <div className="card-badge">Tradeable</div>
                  <div className="card-icon">dNFT</div>
                  <h3 className="card-title">Debt NFT (dNFT)</h3>
                  <p className="card-description">
                    Transferable debt instrument allowing debt trading, hedging, 
                    and sophisticated DeFi strategies with built-in liquidation protection.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Technical Benefits */}
        <div className="mt-16 opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold text-center mb-8">NFT Credit System Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Composability</h4>
              <p className="text-gray-600 text-sm">
                NFT credit cards work seamlessly across all DeFi protocols, creating unlimited financial opportunities and integrations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Transferability</h4>
              <p className="text-gray-600 text-sm">
                Trade, transfer, or use your credit positions as collateral in other protocols. True ownership of your financial instruments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Automation</h4>
              <p className="text-gray-600 text-sm">
                Smart contracts handle all updates automatically. Your NFTs evolve with market conditions without manual intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCreditCards;