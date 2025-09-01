import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LottieAnimation from "./LottieAnimation";
import AnimatedText from "./AnimatedText";
import Aurora from "./Aurora";
import { CometCard } from "./ui/comet-card";
import { ContainerScroll, Card as ScrollCard } from "./ui/container-scroll";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<object | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 2.5
      }deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
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
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Content to be placed inside the scroll card
  const scrollContent = (
    <div className="relative w-full h-full">
      <img
        src="/heroimage2.jpg"
        alt="CLenFi Crypto Credit Companion"
        className="w-full h-full object-fit"
      />
    </div>
  );

  // Title component for the scroll container
  const titleComponent = (
    <div className="text-center max-w-4xl mx-auto">
      <div className="pulse-chip mb-3 sm:mb-6">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-black mr-2">
          01
        </span>
        <span className="text-black">Innovation</span>
      </div>
      <h1 className="text-6xl mb-32 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold text-black">
        CREDIT MADE EASY
        <br />
        FOR WEB3
      </h1>
    </div>
  );
  
  // Description text to be placed outside the card
  const descriptionText = (
    <p className="-mt-24 sm:-mt-6 leading-relaxed text-black/80 font-normal text-xl sm:text-2xl max-w-3xl text-center">
      Get instant credit without putting up collateral. CLenFi builds
      your trust score based on how you handle money, then gives you
      better rates and higher limits as you prove yourself reliable.
      Think of it as building credit history, but for crypto.
    </p>
  );

  return (
    <section
      className="overflow-hidden relative min-h-screen flex items-center"
      id="hero"
      style={{
        padding: isMobile ? "20px 12px" : "40px 20px",
      }}
    >
      {/* Aurora Background - Positioned higher with reduced height */}
      <div className="absolute inset-x-0 top-[-20%] h-[80%] -z-20">
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
          backgroundPosition: "center 30%",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>

      <div className="w-full flex flex-col items-center" ref={containerRef}>
        <ContainerScroll titleComponent={titleComponent}>
          {scrollContent}
        </ContainerScroll>
        {descriptionText}
      </div>

      {/* <div
        className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10 parallax"
        data-speed="0.05"
      ></div> */}
    </section>
  );
};

export default Hero;
