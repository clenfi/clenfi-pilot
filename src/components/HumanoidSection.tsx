import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import ScrollReveal from "./ScrollReveal";

const HumanoidSection = () => {
  const features = [
    {
      title: "Register",
      description: " Verify once with ZK-PAN, privately and securely.",
    },
    {
      title: "Credit NFT",
      description: "Receive a Credit NFT showing your borrowing power.",
    },
    {
      title: "Spend",
      description: " Use your credit line with stablecoins or BNPL.",
    },
    {
      title: "Repay & Earn",
      description: " Repay on time, grow your TrustScore, and earn rewards.",
    },
  ];

  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="why-clenfi">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-200 mr-2">
                    2
                  </span>
                  <span>How It Works</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12 sm:mb-16 ">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
                How CLenFi Makes Credit Simple
              </p>

              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                A new approach to credit that puts you in control of your
                financial identity
              </p>
            </div>

            {/* Content grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="relative group">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-white/2 rounded-[24px] backdrop-blur-2xl border-2 border-white/10 shadow-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-emerald-400/10 rounded-[24px] blur-sm"></div>

                    <div className="relative bg-white/10 backdrop-blur-2xl rounded-[24px] p-6 sm:p-8 border-2 border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-700 shadow-xl hover:shadow-2xl group-hover:scale-[1.03] group-hover:-translate-y-1 ">
                      <h3 className="text-xl sm:text-2xl font-bold text-black/90 mb-4 group-hover:text-black transition-colors duration-300 underline ">
                        {feature.title}
                      </h3>
                      <p className="text-black/80 text-base sm:text-lg lg:text-2xl  leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Subtle hover accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/0 via-purple-400/50 to-emerald-400/0 rounded-b-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative w-full h-full min-h-[24rem] flex items-center justify-center">
                <div className="relative w-full max-w-md h-[28rem] flex flex-col items-center justify-center p-6 sm:p-8 rounded-[24px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl overflow-hidden group hover:bg-white/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/3 rounded-[24px]"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-[24px] group-hover:from-white/10 group-hover:to-white/5 transition-all duration-700"></div>

                  <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black/60 drop-shadow-lg" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black/60 drop-shadow-lg" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black/60 drop-shadow-lg" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black/60 drop-shadow-lg" />

                  <div className="relative z-10 w-full h-[18rem] flex items-center justify-center mb-6">
                    <EvervaultCard text="CLenFi" className="w-full h-full" />
                  </div>

                  <h3 className="relative z-10 text-black text-center text-base font-semibold mx-auto leading-relaxed">
                    Experience the future of decentralized credit with our
                    secure and private platform
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
