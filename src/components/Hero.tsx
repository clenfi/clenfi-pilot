import React from "react";
import ScrollReveal from "./ScrollReveal";

// NEW HERO IMPLEMENTATION (based on provided reference)
const Hero = () => {
  return (
    <section id="hero" className="relative py-12 md:py-16">
      <div className="section-container">
        {/* Title */}
        <div className="text-center md:text-left max-w-none mx-auto">
          {/* <h1 className="text-[clamp(72px,22vw,280px)] md:text-[clamp(72px,18vw,240px)] leading-[0.85] font-extrabold text-black tracking-tight uppercase"> */}
             <h1 className="text-[clamp(56px,18vw,220px)] md:text-[clamp(56px,14vw,170px)] leading-[0.85] font-extrabold text-black tracking-tight uppercase">
            CREDIT
            <br />
            MADE
            <br /> EASY
            <br />
            FOR WEB3
          </h1>
          <blockquote className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto text-center italic">
            "Spend today, repay tomorrow, and build your on-chain credit profile."
          </blockquote>
        </div>

        {/* Showcase */}
        <div className="mt-10 md:mt-14">
          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-5 text-black font-extrabold uppercase">
            {/* SPEND + card */}
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="my-0 w-full text-right"
              textClassName="text-[clamp(48px,13vw,72px)] leading-[0.9] font-extrabold uppercase tracking-tight"
            >
              SPEND
            </ScrollReveal>
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-elegant relative">
              <iframe
                src="https://my.spline.design/creditcard-WpNvUwK0nuHJb2KvLTIezavz/"
                className="w-full h-full"
                frameBorder={0}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
              />
            </div>

            {/* EARN + APY card */}
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="my-0 w-full text-left"
              textClassName="text-[clamp(40px,12vw,64px)] leading-[0.9] font-extrabold uppercase tracking-tight"
            >
              EARN
            </ScrollReveal>
            <div className="h-[220px] rounded-2xl bg-black text-white overflow-hidden shadow-2xl border border-white/20 relative group hover:border-white/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20"></div>

              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white/60"></div>
                </div>
                <div className="text-xs font-medium text-white/60 tracking-widest">CREDIT SCORE</div>
                <div className="text-xs text-white/40 font-mono">★★★</div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-white mb-1">2,567</div>
                  <div className="w-10 h-0.5 bg-white/30 mx-auto mb-2"></div>
                  <div className="text-sm text-white/70 font-medium">Credit Points</div>
                </div>

                <div className="w-full max-w-[120px] mb-3">
                  <div className="flex justify-between text-xs text-white/50 mb-1">
                    <span>Level 3</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-white/80 to-white rounded-full w-[85%] shadow-lg"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-4 h-4 rounded border border-white/60 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold">+245 this week</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                <div className="text-xs text-white/40">Next: 433 pts</div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/30"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>

            {/* TRADE + swap card */}
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="my-0 w-full text-right"
              textClassName="text-[clamp(40px,12vw,64px)] leading-[0.9] font-extrabold uppercase tracking-tight"
            >
              BUILD
            </ScrollReveal>
            <div className="h-[220px] rounded-2xl bg-[#0b1220] text-white p-5 shadow-elegant border border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-sm">
                  USDC
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-sm">
                  ETH
                </span>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900/60 p-4 border border-white/5">
                <div className="text-sm text-slate-400">Swap preview</div>
                <div className="text-xl font-semibold">
                  1,000 USDC → 0.31 ETH
                </div>
              </div>
            </div>

            {/* BANK + banknote video */}
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="my-0 w-full text-left"
              textClassName="text-[clamp(40px,12vw,64px)] leading-[0.9] font-extrabold uppercase tracking-tight"
            >
              CREDIT
            </ScrollReveal>
            <div className="h-[220px] rounded-2xl overflow-hidden shadow-elegant border border-black/10">
              <video
                className="h-full w-full object-cover"
                src="/bankvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-2 gap-8 [grid-template-rows:520px_420px_420px_420px]">
            {/* Row 1: Left card (Spend), Right big word SPEND */}
            <div className="h-[520px] rounded-[24px] overflow-hidden shadow-elegant relative">
              <iframe
                src="https://my.spline.design/creditcard-WpNvUwK0nuHJb2KvLTIezavz/"
                className="w-full h-full"
                frameBorder={0}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
              />
            </div>
            <div className="h-[520px] flex items-center justify-start pl-2">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="my-0 leading-[0.85] font-extrabold uppercase text-black"
                textClassName="text-[clamp(200px,12vw,320px)] tracking-tight uppercase"
              >
                SPEND
              </ScrollReveal>
            </div>

            {/* Row 2: Left big word EARN, Right APY circle card */}
            <div className="h-[420px] flex items-center justify-start pl-2">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="my-0 leading-[0.85] font-extrabold uppercase text-black"
                textClassName="text-[clamp(160px,12vw,280px)] tracking-tight uppercase"
              >
                EARN
              </ScrollReveal>
            </div>
            <div className="h-[420px] rounded-[24px] bg-black text-white overflow-hidden shadow-2xl border border-white/20 relative group hover:border-white/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20"></div>

              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                  <div className="text-sm font-medium text-white/60 tracking-widest ml-2">CREDIT PROFILE</div>
                </div>
                <div className="text-xs text-white/40 font-mono">★★★★☆</div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-2">2,567</div>
                  <div className="w-16 h-0.5 bg-white/30 mx-auto mb-3"></div>
                  <div className="text-base text-white/70 font-medium mb-1">Credit Points</div>
                  <div className="text-sm text-white/50">Level 3 • Good Standing</div>
                </div>

                <div className="w-full max-w-[220px] space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Next Level</span>
                    <span className="text-sm text-white font-medium">433 points</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-white/90 to-white/70 rounded-full w-[85%] shadow-lg relative">
                      <div className="absolute right-0 top-0 w-1 h-full bg-white rounded-r-full"></div>
                    </div>
                  </div>
                  <div className="text-xs text-white/50 text-center">85% to Level 4</div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center mb-4">
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded border border-white/40 flex items-center justify-center mx-auto mb-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="text-lg font-bold text-white">+245</div>
                    <div className="text-xs text-white/60">This Week</div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded border border-white/40 flex items-center justify-center mx-auto mb-2">
                      <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                    </div>
                    <div className="text-lg font-bold text-white">1,024</div>
                    <div className="text-xs text-white/60">This Month</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                    <span>On-time: 98%</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                    <span>Utilization: 23%</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
                <div className="text-xs text-white/40">Credit Builder Active</div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>

            {/* Row 3: Left swap card, Right big word TRADE */}
            <div className="h-[420px] rounded-[24px] bg-[#000000] text-white p-6 shadow-elegant border border-white/10 flex items-center">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10">
                  USDC
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10">
                  ETH
                </span>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900/60 p-4 border border-white/5">
                <div className="text-sm text-slate-400">Swap preview</div>
                <div className="text-2xl font-semibold">
                  1,000 USDC → 0.31 ETH
                </div>
              </div>
            </div>
            <div className="h-[420px] flex items-center justify-start pl-2">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="my-0 leading-[0.85] font-extrabold uppercase text-black"
                textClassName="text-[clamp(160px,12vw,280px)] tracking-tight uppercase"
              >
                BUILD
              </ScrollReveal>
            </div>

            {/* Row 4: Left big word BANK, Right banknote video */}
            <div className="h-[420px] flex items-center justify-start pl-2">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="my-0 leading-[0.85] font-extrabold uppercase text-black"
                textClassName="text-[clamp(160px,12vw,280px)] tracking-tight uppercase"
              >
                LOAN
              </ScrollReveal>
            </div>
            <div className="h-[420px] rounded-[24px] overflow-hidden shadow-elegant border border-black/10">
              <video
                className="h-full w-full object-cover"
                src="/bankvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
