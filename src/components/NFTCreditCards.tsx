import React from "react";
import Marquee from "react-fast-marquee";
import ScrollReveal from "./ScrollReveal";
// import Folder from "./Folder";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * ClenFi Wallet → cNFT & dNFT Hover Cards
 * - Cards stacked behind the wallet at rest, perfectly centered
 * - Wallet redesigned with smoother gradients and glow
 * - Wallet pulled further down and widened so both cards peek clearly
 */

const BRAND = {
  black: "#0A0A0A",
  white: "#FDFDFD",
  blue: "#00CFFF",
  gray: "#1A1A1A",
};

// Tunables
const CARD_W = 320;
const CARD_H = 200;
const TAB_H = 40;
const WALLET_W = CARD_W + 50; // wider wallet
const WALLET_H = 300; // taller wallet

type Label = "cNFT" | "dNFT";

const Card = ({
  label,
  description,
  zIndex = 10,
  offsetY = 0,
  active,
  primary = false,
  onTabEnter,
  onTabLeave,
}: {
  label: Label;
  description: string;
  zIndex?: number;
  offsetY?: number;
  active: boolean;
  primary?: boolean;
  onTabEnter: () => void;
  onTabLeave: () => void;
}) => {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{
        zIndex: active ? 1000 : zIndex,
        width: CARD_W,
        height: CARD_H,
        top: offsetY,
      }}
    >
      {/* Stationary TAB HITBOX */}
      <div
        onPointerEnter={onTabEnter}
        onPointerLeave={onTabLeave}
        className="absolute top-0 z-30 cursor-pointer rounded-md"
        style={{
          height: TAB_H,
          width: CARD_W,
        }}
        aria-label={`${label} tab`}
      />

      {/* Moving visual shell */}
      <motion.div
        initial={{ y: 0, scale: 1, opacity: 1 }}
        animate={{ y: active ? -170 : 0, scale: active ? 1.05 : 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="group relative w-full h-full select-none"
      >
        <div
          className="absolute inset-0 rounded-2xl border border-white/10 bg-[rgba(16,16,16,0.95)] backdrop-blur-md overflow-hidden"
          style={{
            boxShadow:
              primary
                ? "0 10px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08), 0 0 46px 3px rgba(0,207,255,0.28)"
                : "0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 text-[13px] tracking-wide"
            style={{
              height: TAB_H,
              background: `linear-gradient(180deg, rgba(0,207,255,0.55), rgba(0,207,255,0.15))`,
              color: BRAND.white,
              pointerEvents: "none",
            }}
          >
            <span className="font-medium">{label}</span>
            <span className="inline-block h-1 w-12 rounded-full opacity-80" style={{ background: BRAND.white }} />
          </div>

          {/* Body */}
          <div className="flex h-[calc(100%-40px)] flex-col gap-3 p-5">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/60">ClenFi</div>
            <div className="text-[15px] leading-relaxed text-white/80">{description}</div>
            <div className="mt-auto flex items-center justify-between text-xs text-white/60">
              <span>Valid • on chain</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND.blue }} />
                <span>Credit Stack</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WalletSVG = () => (
  <svg
    width={WALLET_W}
    height={WALLET_H}
    viewBox={`0 0 ${WALLET_W} ${WALLET_H}`}
    role="img"
    aria-label="wallet"
    className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] "
  >
    <defs>
      <linearGradient id="wgrad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0in%" stopColor="#1e1e1e" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
      {/* Wallet body */}
      <rect x="0" y="50" rx="26" ry="26" width={WALLET_W} height={WALLET_H - 100} fill="url(#wgrad)" stroke="rgba(255,255,255,0.1)" />
      {/* Button */}
      <rect x={WALLET_W - 90} y={WALLET_H / 2 - 30} width="60" height="60" rx="15" ry="15" fill="#151515" stroke="rgba(255,255,255,0.15)" />
      <circle cx={WALLET_W - 60} cy={WALLET_H / 2} r="12" fill={BRAND.blue} filter="url(#glow)" />
    </g>
  </svg>
);

function ClenfiWalletCards() {
  useEffect(() => {
    document.documentElement.style.setProperty("--clenfi-blue", BRAND.blue);
  }, []);

  const WALLET_TOP = 120; // pulled wallet further down
  const PEEK = TAB_H;

  const CNFT_DESC = "Credit NFT: Your digital credit card that gets better over time. Artwork, rewards, and benefits automatically improve as you build trust.";
  const DNFT_DESC = "Debt NFT: Manage your credit flexibly – transfer to others, set up auto-pay, or get creative with payments while staying protected.";

  const [active, setActive] = useState<Label | null>(null);
  const leaveTimer = useRef<number | null>(null);

  const armLeave = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setActive(null), 100);
  };

  const cancelLeave = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = null;
  };

  return (
    <div className="w-full flex items-center justify-center bg-transparent  ">
      <div className="relative mx-auto max-w-5xl px-2 sm:px-6  sm:py-8">
        <div className="relative mx-auto flex flex-col items-center justify-center" style={{ width: WALLET_W }}>
          <div className="pointer-events-auto relative flex items-center justify-center h-[250px] sm:h-[460px]">
            <Card
              label="dNFT"
              description={DNFT_DESC}
              zIndex={5}
              offsetY={WALLET_TOP - PEEK - 100} // raised more to peek
              primary={false}
              active={active === "dNFT"}
              onTabEnter={() => { cancelLeave(); setActive("dNFT"); }}
              onTabLeave={armLeave}
            />

            <Card
              label="cNFT"
              description={CNFT_DESC}
              zIndex={6}
              offsetY={WALLET_TOP - PEEK -60} // adjusted so it's also visible
              primary
              active={active === "cNFT"}
              onTabEnter={() => { cancelLeave(); setActive("cNFT"); }}
              onTabLeave={armLeave}
            />

            {/* Wallet sits above cards at rest, centered */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <WalletSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <div className="text-center  sm:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 leading-[0.9] text-black">
             
                Smart Credit Cards That Improve
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-normal ">
                Get a smart credit card that gets better as you do. Your digital
                card automatically upgrades when you pay on time, unlocking
                higher limits and better rates - just like building credit
                history in the real world.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 lg:mb-16">
              {/* Content Side */}
              <div
                className="opacity-0 animate-on-scroll"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-6">
                  {/* Secure Identity Verification Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] hover:bg-white/15 transition-all duration-300 group">
                    <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl group-hover:bg-blue-400/30 transition-all duration-500"></div>
                    <div className="relative p-6">
                      <h3 className="text-xl font-semibold mb-3 text-black ">
                        Secure Identity Verification
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Verify who you are using your government ID - safely and
                        privately. Your personal information never gets stored
                        anywhere, but we can still confirm you're a real person.
                      </p>
                    </div>
                  </div>

                  {/* Cards That Level Up Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] hover:bg-white/15 transition-all duration-300 group">
                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/30 transition-all duration-500"></div>
                    <div className="relative p-6">
                      <h3 className="text-xl font-semibold mb-3 text-black ">
                        Cards That Level Up
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Your digital credit card automatically gets better as
                        you prove you're reliable. Start with basic benefits and
                        unlock premium features, higher limits, and exclusive
                        perks as you build your reputation.
                      </p>
                    </div>
                  </div>

                  {/* Flexible Payment Options Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] hover:bg-white/15 transition-all duration-300 group">
                    <div className="pointer-events-none absolute top-1/2 -right-16 h-32 w-32 rounded-full bg-teal-400/20 blur-2xl group-hover:bg-teal-400/30 transition-all duration-500"></div>
                    <div className="relative p-6">
                      <h3 className="text-xl font-semibold mb-3 text-black ">
                        Flexible Payment Options
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Get creative with how you handle your credit. Transfer
                        payments to others, set up automatic payments, or even
                        trade your credit positions - all while staying
                        protected from sudden market crashes.
                      </p>
                    </div>
                  </div>

                  {/* Always Up-to-Date Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] hover:bg-white/15 transition-all duration-300 group">
                    <div className="pointer-events-none absolute -top-16 -left-16 h-32 w-32 rounded-full bg-sky-400/20 blur-2xl group-hover:bg-sky-400/30 transition-all duration-500"></div>
                    <div className="relative p-6">
                      <h3 className="text-xl font-semibold mb-3 text-black ">
                        Always Up-to-Date
                      </h3>
                      <p className="text-black/70 leading-relaxed">
                        Your credit card information updates automatically. See
                        your current balance, available credit, and payment
                        status in real-time - no waiting for monthly statements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ClenfiWalletCards Component on the right */}
              <div className="flex justify-center items-center h-full mt-4 lg:mt-0">
                <div className="scale-75 sm:scale-90 lg:scale-100">
                  <ClenfiWalletCards />
                </div>
              </div>
            </div>

            {/* Technical Benefits */}
            <div
              className="mt-8 lg:mt-16 opacity-0 animate-on-scroll"
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
