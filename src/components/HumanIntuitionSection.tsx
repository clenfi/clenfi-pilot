
import React, { useRef } from "react";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="human-intuition" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Smart Credit Intelligence</span>
            </div>
            <h2 className="section-title mb-6">Beyond traditional lending to intelligent credit</h2>
            <p className="text-lg text-gray-700 mb-6">
              CLenFi goes beyond simple credit scoring to develop comprehensive financial understanding and
              adaptive risk assessment that evolves with your DeFi behavior. This enables personalized
              lending experiences that adapt to your financial journey and goals.
            </p>
            <ul className="space-y-4">
              {[
                "Learns from your DeFi history and refines credit assessment over time",
                "Anticipates market conditions and adjusts lending parameters automatically",
                "Adapts to changing market environments without manual intervention",
                "Makes intelligent decisions based on comprehensive on-chain data analysis"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image container div has been removed */}
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
