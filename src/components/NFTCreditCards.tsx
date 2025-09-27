import React from "react";
import Marquee from "react-fast-marquee";
import ScrollReveal from "./ScrollReveal";
import Folder from "./Folder";

const NFTCreditCards = () => {
  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="nft-cards">
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
                    6
                  </span>
                  <span>NFT Cards</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12 sm:mb-16">
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={3}
                blurStrength={6}
                containerClassName="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-12 leading-[0.9] text-black"
                textClassName="text-black block font-black"
              >
                Smart Credit Cards That Improve
              </ScrollReveal>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                Get a smart credit card that gets better as you do. Your digital
                card automatically upgrades when you pay on time, unlocking
                higher limits and better rates - just like building credit
                history in the real world.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Content Side */}
              <div
                className="opacity-0 animate-on-scroll"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">
                        Secure Identity Verification
                      </h3>
                      <p className="text-black/80">
                        Verify who you are using your government ID - safely and
                        privately. Your personal information never gets stored
                        anywhere, but we can still confirm you're a real person.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">
                        Cards That Level Up
                      </h3>
                      <p className="text-black/80">
                        Your digital credit card automatically gets better as
                        you prove you're reliable. Start with basic benefits and
                        unlock premium features, higher limits, and exclusive
                        perks as you build your reputation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">
                        Flexible Payment Options
                      </h3>
                      <p className="text-black/80">
                        Get creative with how you handle your credit. Transfer
                        payments to others, set up automatic payments, or even
                        trade your credit positions - all while staying
                        protected from sudden market crashes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black underline">
                        Always Up-to-Date
                      </h3>
                      <p className="text-black/80">
                        Your credit card information updates automatically. See
                        your current balance, available credit, and payment
                        status in real-time - no waiting for monthly statements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Folder Component on the right */}
              <div className="flex justify-center items-center h-full mt-8 lg:mt-0">
                <div className="scale-75 sm:scale-90 lg:scale-100">
                  <Folder
                    size={3}
                    color="#AD98FFFF"
                    className="custom-folder"
                    items={[
                     
                      
                      <div key="debt" className="p-1">
                        <h4 className="text-[8px] font-semibold text-gray-800">Debt NFT</h4>
                        <p className="text-[6px] text-gray-600 leading-none">Manage your credit flexibly - transfer to others, set up auto-pay, or get creative with payments while staying protected.</p>
                      </div>, <div key="identity" className="p-1">
                        <h4 className="text-[8px] font-semibold text-gray-800">ID Verify</h4>
                        <p className="text-[6px] text-gray-600 leading-none">Prove you're a real person using your government ID. Secure, private, and instantly verified.</p>
                      </div>,<div key="credit" className="p-1">
                        <h4 className="text-[8px] font-semibold text-gray-800">Credit NFT</h4>
                        <p className="text-[6px] text-gray-600 leading-none">Your digital credit card that gets better over time. Artwork, rewards, and benefits automatically improve as you build trust.</p>
                      </div>,
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Technical Benefits */}
            <div
              className="mt-16 opacity-0 animate-on-scroll"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">
                Smart Credit Card Benefits
              </h3>
              <Marquee
                autoFill={true}
                speed={30}
                gradient={false}
                pauseOnHover={true}
                className="gap-6"
              >
                {[
                  {
                    name: "Works Everywhere",
                    quote:
                      "Use your credit card anywhere in crypto. It works with all major platforms and apps, giving you unlimited opportunities.",
                  },
                  {
                    name: "You Own It",
                    quote:
                      "Trade, transfer, or use your credit in other apps. You truly own your credit card and can do whatever you want with it.",
                  },
                  {
                    name: "Hands-Free Updates",
                    quote:
                      "Everything happens automatically. Your card updates, rewards get added, and benefits unlock without you having to do anything.",
                  },
                ].map((feature, index) => (
                  <div
                    key={`${feature.name}-${index}`}
                    className="w-[350px] max-w-full shrink-0 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 mx-3 shadow-lg"
                  >
                    <h4 className="text-xl font-semibold text-black mb-3">
                      {feature.name}
                    </h4>
                    <p className="text-black/80 text-sm">{feature.quote}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCreditCards;
