import React from "react";
import ScrollReveal from "./ScrollReveal";

// NEW HERO IMPLEMENTATION (based on provided reference)
const Hero = () => {
  return (
    <section id="hero" className="relative py-12 md:py-16">
      <div className="section-container">
        {/* Header with badge and line */}
        

        {/* Title */}
        <div className="text-center md:text-left max-w-none mx-auto">
          <h1 className="text-[clamp(56px,18vw,220px)] md:text-[clamp(56px,14vw,170px)] leading-[0.90] font-extrabold text-black tracking-tight uppercase">
              {/* <h1 className="text-[clamp(80px,22vw,280px)] md:text-[clamp(80px,18vw,240px)] leading-[0.85] font-extrabold text-black tracking-tight uppercase"></h1> */}
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
            <div className="h-[220px] rounded-2xl bg-[#0b1220] text-white p-5 overflow-hidden shadow-elegant border border-white/10 flex items-center justify-center">
              <div className="relative w-full max-w-[220px] aspect-square mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="grad-m"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000000" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#1f2937"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#grad-m)"
                    strokeWidth="4"
                    strokeDasharray="264"
                    strokeDashoffset="60"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold">$2,56ᴠ</div>
                  <div className="text-xs text-slate-400 mt-1">11.07% APY</div>
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
            <div className="h-[420px] rounded-[24px] bg-[#0b1220] text-white p-6 overflow-hidden shadow-elegant border border-white/10 flex items-center justify-center">
              <div className="relative w-full max-w-[260px] aspect-square mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#000000" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#1f2937"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#grad)"
                    strokeWidth="4"
                    strokeDasharray="264"
                    strokeDashoffset="60"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold">$2,56ᴠ</div>
                  <div className="text-xs text-slate-400 mt-1">11.07% APY</div>
                </div>
              </div>
            </div>

            {/* Row 3: Left swap card, Right big word TRADE */}
            <div className="h-[420px] rounded-[24px] bg-[#0b1220] text-white p-6 shadow-elegant border border-white/10 flex items-center">
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
                CREDIT
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
BNPL
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
