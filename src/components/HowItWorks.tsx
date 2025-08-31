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
  number,
  title,
  description,
  isActive,
  onClick,
}: StepCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl p-4 sm:p-5 lg:p-6 cursor-pointer transition-all duration-500 border",
        isActive
          ? "bg-white shadow-elegant border-green-200"
          : "bg-white/50 hover:bg-white/80 border-transparent"
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div
          className={cn(
            "flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0 transition-colors duration-300 text-sm sm:text-base",
            isActive ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"
          )}
        >
          {number}
        </div>
        <div>
          <h3
            className={cn(
              "text-base sm:text-lg font-semibold mb-1 sm:mb-2 transition-colors duration-300",
              isActive ? "text-green-600" : "text-gray-800"
            )}
          >
            {title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
      className="py-12 sm:py-16 lg:py-20 bg-white relative"
      id="how-it-works"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute -top-10 sm:-top-20 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-green-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gray-50 rounded-full opacity-70 blur-3xl -z-10"></div>

      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 opacity-0 fade-in-stagger">
          <h2 className="section-title mb-3 sm:mb-4">
            How CLenFi Makes Credit Simple
          </h2>
          <p className="section-subtitle mx-auto px-4 sm:px-6">
            Forget putting up 150% collateral to borrow 100%. CLenFi gives you
            credit based on trust, not locked assets. Pay on time, build your
            reputation, unlock better deals. Start small, grow big - all based
            on how reliable you are with money.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-3 sm:space-y-4 order-2 lg:order-1 opacity-0 fade-in-stagger px-4 sm:px-0">
            {stepsData.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-[400px] shadow-elegant order-1 lg:order-2 opacity-0 fade-in-stagger mx-4 sm:mx-0">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeStep === index
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                    <span className="text-green-400 font-medium mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 opacity-0 fade-in-stagger px-4 sm:px-0">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Understanding Clenfi{" "}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Watch how CLenFi revolutionizes DeFi credit with our trust-based
              lending system
            </p>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto group cursor-pointer">
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
                className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-90"
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
    </section>
  );
};

export default HowItWorks;
