
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LottieAnimation from "./LottieAnimation";
import AnimatedText from "./AnimatedText";
import Aurora from "./Aurora";
import { CometCard } from "./ui/comet-card";
import SplitText from "./SplitText";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Set lottieData to null to disable Lottie animation and show heroimage2.jpg instead
    setLottieData(null);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8" 
      id="hero"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-20">
        <Aurora
          colorStops={["#22c55e", "#84cc16", "#15803d"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Original background as overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%', 
          backgroundSize: 'cover'
        }}
      ></div>
      
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-center min-h-[80vh] py-8 sm:py-12 lg:py-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-bold text-gray-900 overflow-hidden hero-title">
              <SplitText
                text="CREDIT MADE EASY"
                tag="div"
                className="block whitespace-nowrap min-w-fit"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 60, rotationX: -90 }}
                to={{ opacity: 1, y: 0, rotationX: 0 }}
                threshold={0.3}
                rootMargin="-50px"
                textAlign="left"
              />
              <SplitText
                text="FOR WEB3"
                tag="div"
                className="block whitespace-nowrap min-w-fit"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 60, rotationX: -90 }}
                to={{ opacity: 1, y: 0, rotationX: 0 }}
                threshold={0.3}
                rootMargin="-50px"
                textAlign="left"
              />
            </div>
            
            <p 
              style={{ animationDelay: "1.5s" }} 
              className="mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              Get instant credit without putting up collateral. CLenFi builds your trust score based on how you handle money, then gives you better rates and higher limits as you prove yourself reliable. Think of it as building credit history, but for crypto.
            </p>
            
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {lottieData ? (
              <div className="relative z-10 animate-fade-in w-full max-w-sm sm:max-w-md lg:max-w-lg" style={{ animationDelay: "0.9s" }}>
                <DotLottieReact
                  src="https://lottie.host/26263650-4d92-4681-9a11-024ca9558e36/NXKLs4KtpC.lottie"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <CometCard 
                  className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full"
                  rotateDepth={isMobile ? 0 : 15}
                  translateDepth={isMobile ? 0 : 15}
                >
                  <div className="relative p-2 sm:p-3 lg:p-4">
                    <div className="relative overflow-hidden rounded-xl border border-gray-300 bg-white shadow-inner">
                      <img
                        ref={imageRef}
                        src="/heroimage2.jpg" 
                        alt="CLenFi Crypto Credit Companion" 
                        className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                        style={{ display: 'block' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
                    </div>
                  </div>
                </CometCard>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-green-200/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
