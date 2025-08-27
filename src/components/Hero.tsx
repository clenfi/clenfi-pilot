
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LottieAnimation from "./LottieAnimation";
import AnimatedText from "./AnimatedText";
import Aurora from "./Aurora";
import { CometCard } from "./ui/comet-card";

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
      className="overflow-hidden relative min-h-screen flex items-center" 
      id="hero" 
      style={{
        padding: isMobile ? '20px 12px' : '40px 20px'
      }}
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
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.5s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white mr-2">01</span>
              <span>Innovation</span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in font-bold text-black" 
              style={{ animationDelay: "1s" }}
            >
              CREDIT MADE EASY<br className="hidden sm:inline" />FOR WEB3
            </h1>
            
            <p 
              style={{ animationDelay: "1.5s" }} 
              className="mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-black font-normal text-base sm:text-lg text-left"
            >
              Get instant credit without putting up collateral. CLenFi builds your trust score based on how you handle money, then gives you better rates and higher limits as you prove yourself reliable. Think of it as building credit history, but for crypto.
            </p>
            
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? (
              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <DotLottieReact
                  src="https://lottie.host/26263650-4d92-4681-9a11-024ca9558e36/NXKLs4KtpC.lottie"
                  loop
                  autoplay
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
            ) : (
              <div className="max-w-sm mx-auto">
                <CometCard 
                  className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
                  rotateDepth={15}
                  translateDepth={15}
                >
                  <div className="relative p-2">
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
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
