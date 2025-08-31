import React from "react";
import CardSwap, { Card } from "./CardSwap";
import ScrollReveal from './ScrollReveal';

const NFTCreditCards = () => {
  const handleCardClick = (index: number) => {
    console.log(`Card ${index} clicked`);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative" id="nft-cards">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={3}
            blurStrength={6}
            containerClassName="section-title mb-6"
            textClassName=""
          >
            Smart Credit Cards That Improve
          </ScrollReveal>
          <p className="section-subtitle mx-auto max-w-3xl">
            Get a smart credit card that gets better as you do. Your digital card automatically upgrades when you pay on time, unlocking higher limits and better rates - just like building credit history in the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure Identity Verification</h3>
                  <p className="text-gray-600">
                    Verify who you are using your government ID - safely and privately. Your personal information never gets stored anywhere, but we can still confirm you're a real person.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Cards That Level Up</h3>
                  <p className="text-gray-600">
                    Your digital credit card automatically gets better as you prove you're reliable. Start with basic benefits and unlock premium features, higher limits, and exclusive perks as you build your reputation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 21h10l2-12H5l2 12z"/>
                    <path d="M5 9V7a4 4 0 0 1 8 0v2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Flexible Payment Options</h3>
                  <p className="text-gray-600">
                    Get creative with how you handle your credit. Transfer payments to others, set up automatic payments, or even trade your credit positions - all while staying protected from sudden market crashes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Always Up-to-Date</h3>
                  <p className="text-gray-600">
                    Your credit card information updates automatically. See your current balance, available credit, and payment status in real-time - no waiting for monthly statements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CardSwap Animation */}
          <div className="relative opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <CardSwap
              width={280}
              height={200}
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
                  <h3 className="card-title">Identity Verification</h3>
                  <p className="card-description">
                    Prove you're a real person using your government ID. 
                    Secure, private, and instantly verified.
                  </p>
                </div>
              </Card>
              
              <Card customClass="credit-card">
                <div className="card-content">
                  <div className="card-badge">Upgradable</div>
                  <div className="card-icon">💳</div>
                  <h3 className="card-title">Credit NFT (cNFT)</h3>
                  <p className="card-description">
                    Your digital credit card that gets better over time. 
                    Artwork, rewards, and benefits automatically improve as you build trust.
                  </p>
                </div>
              </Card>
              
              <Card customClass="debt-card">
                <div className="card-content">
                  <div className="card-badge">Flexible</div>
                  <div className="card-icon">💰</div>
                  <h3 className="card-title">Debt NFT (dNFT)</h3>
                  <p className="card-description">
                    Manage your credit flexibly - transfer to others, set up auto-pay, 
                    or get creative with payments while staying protected.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Technical Benefits */}
        <div className="mt-16 opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Smart Credit Card Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg text-gray-900">Works Everywhere</h4>
              <p className="text-gray-600 text-sm">
                Use your credit card anywhere in crypto. It works with all major platforms and apps, giving you unlimited opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg text-gray-900">You Own It</h4>
              <p className="text-gray-600 text-sm">
                Trade, transfer, or use your credit in other apps. You truly own your credit card and can do whatever you want with it.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg text-gray-900">Hands-Free Updates</h4>
              <p className="text-gray-600 text-sm">
                Everything happens automatically. Your card updates, rewards get added, and benefits unlock without you having to do anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCreditCards;