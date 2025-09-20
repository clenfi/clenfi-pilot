import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

const HumanoidSection = () => {
  const features = [
    {
      title: "PAN-Based Zero-Knowledge Verification",
      description: "Revolutionary identity verification using ZK-proofs of PAN card data, enabling credit assessment without exposing personal information.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      badge: "Identity"
    },
    {
      title: "Decentralized Credit Scoring",
      description: "Transparent and fair credit scoring powered by blockchain technology, giving you full control over your financial data.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Scoring"
    },
    {
      title: "Secure & Private",
      description: "Your data remains yours. We use advanced encryption and zero-knowledge proofs to ensure your information stays private.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      badge: "Security"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="why-clenfi">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How CLenFi Makes Credit Simple
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A new approach to credit that puts you in control of your financial identity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="relative w-full h-full min-h-[24rem] flex items-center justify-center">
            <div className="relative w-full max-w-md h-[28rem] flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-black/[0.1] dark:border-white/[0.1] overflow-hidden">
              <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 dark:text-white text-black" />
              <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 dark:text-white text-black" />
              <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 dark:text-white text-black" />
              <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 dark:text-white text-black" />

              <div className="w-full h-[48rem] flex items-center justify-center mb-6">
                <EvervaultCard text="CLenFi" className="w-full h-full" />
              </div>

              <h2 className="dark:text-white text-black text-center text-base font-semibold  mx-auto ">
                Experience the future of decentralized credit with our secure and private platform
              </h2>
             
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HumanoidSection;
