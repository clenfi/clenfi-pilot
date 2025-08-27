import React from 'react';
import { CometCard } from './ui/comet-card';

interface Founder {
  name: string;
  role: string;
  creditScore: number;
  cardNumber: string;
  tier: 'Diamond' | 'Platinum' | 'Gold' | 'Silver';
  joinDate: string;
  bgGradient: string;
  textColor: string;
}

const founders: Founder[] = [
  {
    name: "Punit",
    role: "Marketing and Head",
    creditScore: 890,
    cardNumber: "4521 **** **** 1847",
    tier: "Diamond",
    joinDate: "01/24",
    bgGradient: "from-gray-900 via-gray-800 to-black",
    textColor: "text-white"
  },
  {
    name: "Sai Jadhav", 
    role: "Blockchain Developer and Smart Contract Auditor",
    creditScore: 875,
    cardNumber: "4521 **** **** 2956",
    tier: "Diamond",
    joinDate: "01/24",
    bgGradient: "from-purple-900 via-purple-800 to-indigo-900",
    textColor: "text-white"
  },
  {
    name: "Rahul Jadvani",
    role: "Blockchain Developer and Smart Contract Auditor", 
    creditScore: 862,
    cardNumber: "4521 **** **** 3074",
    tier: "Diamond",
    joinDate: "01/24",
    bgGradient: "from-blue-900 via-blue-800 to-cyan-900",
    textColor: "text-white"
  },
  {
    name: "Sachin Baluragi",
    role: "Frontend Developer",
    creditScore: 895,
    cardNumber: "4521 **** **** 4183",
    tier: "Diamond", 
    joinDate: "01/24",
    bgGradient: "from-emerald-900 via-green-800 to-teal-900",
    textColor: "text-white"
  }
];

function CreditCard({ founder, delay }: { founder: Founder; delay: number }) {
  return (
    <div 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <CometCard 
        className="w-full max-w-sm mx-auto"
        rotateDepth={12}
        translateDepth={12}
      >
        <div className={`relative w-80 h-52 rounded-2xl bg-gradient-to-br ${founder.bgGradient} p-6 shadow-2xl`}>
          {/* Background pattern */}
          <div className="absolute inset-0 rounded-2xl opacity-10">
            <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full"></div>
            <div className="absolute top-8 right-8 w-8 h-8 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"></div>
          </div>

          {/* Card Header */}
          <div className="relative z-10 flex justify-between items-start mb-8">
            <div>
              <div className="text-white/80 text-xs font-medium tracking-wider">CLENFI</div>
              <div className="text-white text-lg font-bold">{founder.tier}</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-white/60 text-xs">#{founder.creditScore}</div>
            </div>
          </div>

          {/* Card Number */}
          <div className="relative z-10 mb-4">
            <div className="text-white text-xl font-mono tracking-wider">
              {founder.cardNumber}
            </div>
          </div>

          {/* Card Footer */}
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <div className="text-white/60 text-xs uppercase tracking-wide">Cardholder</div>
              <div className="text-white text-sm font-semibold">{founder.name}</div>
              <div className="text-white/70 text-xs">{founder.role}</div>
            </div>
            <div className="text-right">
              <div className="text-white/60 text-xs">Valid Thru</div>
              <div className="text-white text-sm font-mono">{founder.joinDate}</div>
            </div>
          </div>

          {/* Chip */}
          <div className="absolute top-20 left-6 w-10 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md">
            <div className="w-full h-full bg-gradient-to-br from-yellow-200/50 to-transparent rounded-md flex items-center justify-center">
              <div className="w-6 h-4 border border-yellow-600/30 rounded-sm"></div>
            </div>
          </div>

          {/* NFC Symbol */}
          <div className="absolute top-20 right-12">
            <svg className="w-6 h-6 text-white/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12V8H6v2zm0-4h12V4H6v2z"/>
            </svg>
          </div>
        </div>
      </CometCard>
    </div>
  );
}

export default function FoundersCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The visionaries building the future of DeFi credit with their elite Diamond-tier reputation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <CreditCard 
              key={founder.name} 
              founder={founder} 
              delay={index * 0.2} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}