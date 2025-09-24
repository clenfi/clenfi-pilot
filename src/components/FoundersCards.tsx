import React from "react";
import { CometCard } from "./ui/comet-card";

interface Founder {
  name: string;
  role: string;
  creditScore: number;
  cardNumber: string;
  tier: "Diamond" | "Platinum" | "Gold" | "Silver";
  joinDate: string;
  bgGradient: string;
  textColor: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const founders: Founder[] = [
  {
    name: "Punit",
    role: "Marketing and Head",
    creditScore: 890,
    cardNumber: "4521 **** **** 1847",
    tier: "Diamond",
    joinDate: "01/25",
    bgGradient: "from-gray-900 via-gray-800 to-black",
    textColor: "text-white",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/punitjainfarhom/",
      twitter: "https://x.com/punit030593",
      github: "",
    },
  },
  {
    name: "Sai Jadhav",
    role: "Blockchain Developer",
    creditScore: 875,
    cardNumber: "4521 **** **** 2956",
    tier: "Diamond",
    joinDate: "01/25",
    bgGradient: "from-gray-900 via-gray-800 to-black",
    textColor: "text-white",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sai-jadhav369/",
      twitter: "https://x.com/Sai__Jadhav",
      github: "https://github.com/saijadhav369",
    },
  },
  {
    name: "Rahul Jadvani",
    role: "Blockchain Developer",
    creditScore: 862,
    cardNumber: "4521 **** **** 3074",
    tier: "Diamond",
    joinDate: "01/25",
    bgGradient: "from-gray-900 via-gray-800 to-black",
    textColor: "text-white",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rahul-jadvani/",
      twitter: "https://x.com/__Ray__47",
      github: "https://github.com/Rahul-Jadvani",
    },
  },
  {
    name: "Sachin Baluragi",
    role: "Fullstack Developer",
    creditScore: 895,
    cardNumber: "4521 **** **** 4183",
    tier: "Diamond",
    joinDate: "01/25",
    bgGradient: "from-gray-900 via-gray-800 to-black",
    textColor: "text-white",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sachinbaluragi",
      twitter: "https://x.com/sachinProDev",
      github: "https://github.com/sachin-pro-dev",
    },
  },
];

function CreditCard({ founder, delay }: { founder: Founder; delay: number }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: `${delay}s` }}
      >
        <CometCard className="w-full" rotateDepth={12} translateDepth={12}>
          <div
            className={`relative w-full h-52 rounded-2xl bg-gradient-to-br ${founder.bgGradient} p-6 shadow-2xl`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 rounded-2xl opacity-10">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full"></div>
              <div className="absolute top-8 right-8 w-8 h-8 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"></div>
            </div>

            {/* Card Header */}
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div>
                <div className="text-white/80 text-xs font-medium tracking-wider">
                  CLENFI
                </div>
                <div className="text-white text-lg font-bold">
                  {founder.tier}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-white/60 text-xs">
                  #{founder.creditScore}
                </div>
              </div>
            </div>

            {/* Card Number */}
            <div className="relative z-10 mb-4">
              <div className="text-white text-lg font-mono tracking-wider">
                {founder.cardNumber}
              </div>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 flex justify-between items-end">
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wide">
                  Cardholder
                </div>
                <div className="text-white text-sm font-semibold">
                  {founder.name}
                </div>
                <div className="text-white/70 text-xs">{founder.role}</div>
              </div>
              <div className="text-right">
                <div className="text-white/60 text-xs">Valid Thru</div>
                <div className="text-white text-sm font-mono">
                  {founder.joinDate}
                </div>
              </div>
            </div>

            {/* Chip */}
            <div className="absolute top-16 left-6 w-10 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md">
              <div className="w-full h-full bg-gradient-to-br from-yellow-200/50 to-transparent rounded-md flex items-center justify-center">
                <div className="w-6 h-4 border border-yellow-600/30 rounded-sm"></div>
              </div>
            </div>

            {/* NFC Symbol */}
            <div className="absolute top-16 right-12">
              <svg
                className="w-6 h-6 text-white/40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12V8H6v2zm0-4h12V4H6v2z" />
              </svg>
            </div>
          </div>
        </CometCard>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-4">
        {founder.socialLinks.linkedin && (
          <a
            href={founder.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {founder.socialLinks.twitter && (
          <a
            href={founder.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        )}
        {founder.socialLinks.github && (
          <a
            href={founder.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function FoundersCards() {
  return (
    <section className="w-full py-10 sm:py-16 bg-transparent" id="founders">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">
                    12
                  </span>
                  <span>Founders</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight text-black mb-6">
                Meet Our Founders
              </h2>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                The visionaries building the future of DeFi credit with their
                elite Diamond-tier reputation
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
        </div>
      </div>
    </section>
  );
}
