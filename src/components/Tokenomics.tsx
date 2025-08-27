"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Tokenomics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="tokenomics">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tokenomics
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            CLenFi's dual-token ecosystem rewards participation and builds sustainable growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* CLEN Token - Main card */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-green-600 to-green-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">CLEN</span>
                </div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  CLEN Utility Token
                </h2>
              </div>
              <p className="mt-4 text-left text-base/6 text-green-100">
                ERC-20 utility token with 1B max supply. Stake CLEN for up to 30% CT boost, get fee discounts up to 25%, and access exclusive partner perks.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-green-100">
                  <span>Max Supply:</span>
                  <span className="font-bold">1,000,000,000 CLEN</span>
                </div>
                <div className="flex justify-between text-green-100">
                  <span>Staking APY:</span>
                  <span className="font-bold">Up to 45%</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 lg:-right-[20%] -bottom-10">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </WobbleCard>

          {/* CT Points */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold">CT</span>
              </div>
            </div>
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Credit Tokens
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-blue-100">
              Non-transferable reward points earned through good payment behavior. Reduce interest up to 50% and access partner coupons.
            </p>
            <div className="mt-4 text-blue-100">
              <div className="text-sm">Earn Rate: <span className="font-bold">0.5 CT per $1 interest</span></div>
            </div>
          </WobbleCard>

          {/* Token Distribution */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-purple-600 to-indigo-800 min-h-[400px] lg:min-h-[300px]">
            <div className="max-w-4xl">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mb-6">
                CLEN Token Distribution
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-100">Liquidity Pool</span>
                    <span className="text-white font-bold">50-100M</span>
                  </div>
                  <div className="text-sm text-purple-200">Immediate DEX seeding</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-100">Rewards Pool</span>
                    <span className="text-white font-bold">200-300M</span>
                  </div>
                  <div className="text-sm text-purple-200">User incentives</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-100">Treasury Reserve</span>
                    <span className="text-white font-bold">450-550M</span>
                  </div>
                  <div className="text-sm text-purple-200">Future operations</div>
                </div>
              </div>
              
              <p className="mt-6 max-w-[40rem] text-left text-base/6 text-purple-200">
                Sustainable tokenomics with 30% of transaction fees funding rewards pool, automatic circuit breakers, and PoT-controlled emission rates.
              </p>
            </div>
            
            <div className="absolute -right-10 md:-right-[20%] lg:-right-[10%] -bottom-10">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}