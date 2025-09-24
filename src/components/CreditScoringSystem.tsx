"use client";

import React from "react";

export default function CreditScoringSystem() {
  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="credit-scoring">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">11</span>
                  <span>Credit Assessment</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight text-black mb-6">
                Smart Credit Assessment
              </h2>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                CLenFi aims to create a reputation-based system that may reward responsible financial behavior over time
              </p>
            </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              {/* Credit Score Range - Main card */}
              <div className="col-span-1 lg:col-span-2 h-full bg-white/30 backdrop-blur-xl rounded-[24px] border border-white/40 shadow-xl min-h-[500px] lg:min-h-[300px] p-6 relative overflow-hidden">
                {/* Internal gradient flare for this card */}
                <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/30 blur-2xl"></div>
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-teal-400/30 blur-2xl"></div>
                
                <div className="max-w-sm relative z-10">
                  <div className="flex items-center mb-4">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                      Dynamic Credit Score
                    </h2>
                  </div>
                  <p className="mt-4 text-left text-base/6 text-black/80">
                   The protocol is designed to potentially assess reputation based on on-chain behavior and responsible usage patterns.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-black/80 bg-white/40 backdrop-blur-sm rounded-lg p-2 border border-white/30">
                      <span>Assessment:</span>
                      <span className="font-bold text-black">Dynamic</span>
                    </div>
                    <div className="flex justify-between text-black/80 bg-white/40 backdrop-blur-sm rounded-lg p-2 border border-white/30">
                      <span>Updates:</span>
                      <span className="font-bold text-black">As Needed</span>
                    </div>
                    <div className="flex justify-between text-black/80 bg-white/40 backdrop-blur-sm rounded-lg p-2 border border-white/30">
                      <span>Privacy:</span>
                      <span className="font-bold text-black">Protected</span>
                    </div>
                  </div>
                </div>
              </div>

          {/* Credit Tiers */}
          <div className="col-span-1 min-h-[300px] bg-white/30 backdrop-blur-xl rounded-[24px] border border-white/40 shadow-xl p-6 relative overflow-hidden">
            {/* Internal gradient flare for this card */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-400/30 blur-2xl"></div>
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-indigo-400/30 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
              </div>
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                Credit Tiers
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-black/80">
               The protocol aims to potentially offer different tiers that may provide varying benefits based on reputation.
              </p>
              <div className="mt-4 space-y-2 text-black/80 text-sm">
                  <div className="flex justify-between bg-white/40 backdrop-blur-sm rounded-lg p-2 border border-white/30">
                  <span>Starting Tier:</span>
                  <span className="font-bold text-black">Basic</span>
                </div>
                <div className="flex justify-between bg-white/40 backdrop-blur-sm rounded-lg p-2 border border-white/30">
                  <span>Growth Path:</span>
                  <span className="font-bold text-black">Merit-Based</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring Factors */}
          <div className="col-span-1 lg:col-span-3 bg-white/30 backdrop-blur-xl rounded-[24px] border border-white/40 shadow-xl p-6 relative overflow-hidden min-h-[400px] lg:min-h-[300px]">
            {/* Internal gradient flares for this card */}
            <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-violet-400/30 blur-2xl"></div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-purple-400/30 blur-2xl"></div>
            <div className="pointer-events-none absolute top-1/2 right-1/4 h-36 w-36 rounded-full bg-indigo-400/20 blur-2xl"></div>
            
            <div className="max-w-4xl relative z-10">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black mb-6">
                Assessment Considerations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-black font-semibold mb-1">Payment Behavior</div>
                  <div className="text-sm text-black/70">Consistency of repayments</div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-black font-semibold mb-1">Usage Patterns</div>
                  <div className="text-sm text-black/70">How credit is utilized</div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-black font-semibold mb-1">History Length</div>
                  <div className="text-sm text-black/70">Duration of responsible usage</div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-black font-semibold mb-1">DeFi Activity</div>
                  <div className="text-sm text-black/70">Engagement across protocols</div>
                </div>
              </div>
              
              <p className="mt-6 max-w-[50rem] text-left text-base/6 text-black/80">
                The protocol is designed to maintain privacy while potentially assessing reputation. Assessment methodology is subject to development and governance decisions.
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}