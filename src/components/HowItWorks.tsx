import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const StepCard = ({
  
  title,
  description,
  isActive,
  onClick,
}: StepCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-4 sm:p-5 lg:p-6 cursor-pointer transition-all duration-500 border backdrop-blur-xl shadow-lg",
        isActive
          ? "bg-white/60 border-white/50 shadow-xl"
          : "bg-white/40 hover:bg-white/50 border-white/30"
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
      
        <div>
          <h3
            className={cn(
              "text-base underline sm:text-lg font-semibold mb-1 sm:mb-2 transition-colors duration-300",
              isActive ? "text-black" : "text-black/80"
            )}
          >
            {title}
          </h3>
          <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stepsData = [
    {
      number: "01",
      title: "Prove Your Identity",
      description:
        "Complete a one-time identity check using secure, private verification. Your personal information never leaves your device or gets stored anywhere.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      title: "Get Your Credit Line",
      description:
        "Buy a Credit NFT to unlock your borrowing power. Start with basic limits that grow as you prove you're reliable with payments.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      title: "Spend Like Normal",
      description:
        "Use your credit to buy crypto, trade, or invest. No need to put up collateral first - just spend what you need when you need it.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "04",
      title: "Build Your Reputation",
      description:
        "Pay back on time to improve your trust score. Better scores unlock higher credit limits and lower interest rates over time.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    // Auto-cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stepsData.length]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsVideoPlaying(true);
      const handlePause = () => setIsVideoPlaying(false);
      const handleEnded = () => setIsVideoPlaying(false);

      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className="w-full py-10 sm:py-16 bg-transparent"
      id="how-it-works"
      ref={sectionRef}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full  mr-2">7</span>
                  <span>How It Works</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            
            {/* Video Section */}
            <div className="mt-16 opacity-0 fade-in-stagger">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 lg:text-[60px]  sm:text-[40px] md:text-[20px] font-extrabold">
                  Understanding Clenfi{" "}
                </h3>
                <p className="text-black/70 max-w-2xl mx-auto text-sm sm:text-base">
                  Watch how CLenFi revolutionizes DeFi credit with our trust-based
                  lending system
                </p>
              </div>

              <div className="relative bg-white/30 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-xl max-w-4xl mx-auto group cursor-pointer border border-white/40">
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  preload="metadata"
                  onClick={handleVideoClick}
                >
                  <source src="/Clenfi.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Thumbnail Overlay */}
                {!isVideoPlaying && (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-90 rounded-[24px]"
                    onClick={handleVideoClick}
                  >
                    {/* Play Button */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-2xl">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Minimalistic Text Overlay */}
                    <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
                      <div className="text-white">
                        <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                          CLenFi Demo
                        </h4>
                        <p className="text-white/80 text-xs sm:text-sm">
                          Trust-based DeFi Credit Platform
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
