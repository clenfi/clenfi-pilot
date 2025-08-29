
import React, { useEffect } from "react";
import ResizableNavbarDemo from "@/components/resizable-navbar-demo";
import Hero from "@/components/Hero";
import HumanoidSection from "@/components/HumanoidSection";
import SpecsSection from "@/components/SpecsSection";
import IntroSection from "@/components/IntroSection";
import CreditScoring from "@/components/CreditScoring";
import NFTCreditCards from "@/components/NFTCreditCards";
import HowItWorks from "@/components/HowItWorks";
import DetailsSection from "@/components/DetailsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Features from "@/components/Features";
import MadeByHumans from "@/components/MadeByHumans";
import CreditScoringSystem from "@/components/CreditScoringSystem";
import FoundersCards from "@/components/FoundersCards";
import ProofOfTrust from "@/components/ProofOfTrust";
import ExclusiveForDevs from "@/components/ExclusiveForDevs";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
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
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for fixed navbar
        const offset = window.innerWidth < 768 ? 120 : 100;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <ResizableNavbarDemo />
      <main className="space-y-4 sm:space-y-8"> {/* Removed top padding */}
        <Hero />
        <HumanoidSection />
        <SpecsSection />
        <IntroSection />
        <CreditScoring />
        <NFTCreditCards />
        <HowItWorks />
        <ImageShowcaseSection />
        <DetailsSection />
        <Features />
        <CreditScoringSystem />
        <FoundersCards />
        <ProofOfTrust />
        <ExclusiveForDevs />
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
