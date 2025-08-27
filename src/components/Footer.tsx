
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <div className="text-center">
          {/* Improved Disclaimer Section */}
          <div className="max-w-5xl mx-auto mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Risk Disclaimer</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Credit involves risk of loss if you can't repay. Interest rates change based on market conditions. Your credit score affects your rates and limits. Only borrow what you can afford to pay back.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Regulatory Notice</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  CLenFi is community-managed and operates automatically through secure code. Token holders help make important decisions. This is not financial advice. Please talk to professionals before using our service.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Security & Audits</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our code has been checked by top security experts to ensure it works safely. However, like any financial service, there are always some risks involved. Do your own research before using CLenFi.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-300 text-center">
              <p className="text-xs text-gray-500">
                By using CLenFi, you agree that you understand these terms and the risks of crypto credit.
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © 2024 CLenFi. All rights reserved. Making credit simple and accessible for everyone in crypto.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
