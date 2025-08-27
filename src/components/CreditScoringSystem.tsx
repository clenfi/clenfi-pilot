"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function CreditScoringSystem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="credit-scoring">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Credit Scoring
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            CLenFi tracks your payment history and financial behavior to build your personal credit score
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* Credit Score Range - Main card */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-emerald-600 to-teal-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Dynamic Credit Score
                </h2>
              </div>
              <p className="mt-4 text-left text-base/6 text-emerald-100">
                Your credit score ranges from 300-900, calculated using on-chain payment history, utilization rates, and DeFi activity patterns.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-emerald-100">
                  <span>Score Range:</span>
                  <span className="font-bold">300 - 900</span>
                </div>
                <div className="flex justify-between text-emerald-100">
                  <span>Update Frequency:</span>
                  <span className="font-bold">Real-time</span>
                </div>
                <div className="flex justify-between text-emerald-100">
                  <span>Blockchains:</span>
                  <span className="font-bold">15+ Networks</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 lg:-right-[15%] -bottom-10">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </WobbleCard>

          {/* Credit Tiers */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-blue-600 to-indigo-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Credit Tiers
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-blue-100">
              From Bronze to Diamond, each tier unlocks better rates and higher borrowing limits.
            </p>
            <div className="mt-4 space-y-2 text-blue-100 text-sm">
              <div className="flex justify-between">
                <span>Bronze (300-450):</span>
                <span>24% APR</span>
              </div>
              <div className="flex justify-between">
                <span>Diamond (751-900):</span>
                <span>9% APR</span>
              </div>
            </div>
          </WobbleCard>

          {/* Scoring Factors */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-violet-600 to-purple-800 min-h-[400px] lg:min-h-[300px]">
            <div className="max-w-4xl">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mb-6">
                Scoring Algorithm Components
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">35%</span>
                    </div>
                  </div>
                  <div className="text-white font-semibold mb-1">Payment History</div>
                  <div className="text-sm text-violet-200">On-time payments vs total payments</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">20%</span>
                    </div>
                  </div>
                  <div className="text-white font-semibold mb-1">Utilization Rate</div>
                  <div className="text-sm text-violet-200">Credit usage vs available limit</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">15%</span>
                    </div>
                  </div>
                  <div className="text-white font-semibold mb-1">Account Age</div>
                  <div className="text-sm text-violet-200">Length of credit history</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">10%</span>
                    </div>
                  </div>
                  <div className="text-white font-semibold mb-1">DeFi Diversity</div>
                  <div className="text-sm text-violet-200">Unique tokens and protocols used</div>
                </div>
              </div>
              
              <p className="mt-6 max-w-[50rem] text-left text-base/6 text-violet-200">
                Real-time scoring with automatic adjustments based on protocol stress levels and market conditions. Zero-knowledge proofs ensure privacy while maintaining accuracy.
              </p>
            </div>
            
            <div className="absolute -right-10 md:-right-[15%] lg:-right-[8%] -bottom-10">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}