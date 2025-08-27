
import React, { useRef, useEffect } from "react";

const ImageShowcaseSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / rect.height) * -15;
      const rotateY = (mouseX / rect.width) * 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-gradient-to-br from-gray-50 to-green-50/30" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience DeFi Credit Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            CLenFi's revolutionary credit system transforms how you access liquidity 
            in decentralized finance without over-collateralization.
          </p>
        </div>
        
        <div 
          ref={cardRef}
          className="relative mx-auto max-w-4xl animate-on-scroll transition-all duration-300 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 25px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04),
              0 0 0 1px rgba(0, 0, 0, 0.05),
              20px 20px 60px rgba(34, 197, 94, 0.15),
              -15px -15px 40px rgba(255, 255, 255, 0.8)
            `
          }}
        >
          {/* 3D Card Container */}
          <div 
            className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white"
            style={{
              background: `
                linear-gradient(145deg, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(249, 250, 251, 1) 50%,
                  rgba(243, 244, 246, 1) 100%
                )
              `
            }}
          >
            {/* Subtle gradient overlay for enhanced 3D effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-full relative overflow-hidden">
                <img 
                  src="/card.jpg" 
                  alt="CLenFi Credit Card showcasing the crypto credit companion" 
                  className="w-full h-auto object-cover"
                  style={{
                    filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
                  }}
                />
                {/* Image overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
              </div>
              
              <div 
                className="bg-white p-4 sm:p-8 relative"
                style={{
                  background: `
                    linear-gradient(145deg, 
                      rgba(255, 255, 255, 1) 0%, 
                      rgba(249, 250, 251, 1) 100%
                    )
                  `,
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-50/30 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 text-gray-900">
                    Next Generation Credit
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Credit cards on Web3 made easy. Get uncollateralized loans based on trust, just like 
                    traditional credit cards, but powered by blockchain technology for instant access and global reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional 3D shadow elements */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black/10 rounded-full blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
