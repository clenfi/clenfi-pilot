// import React, { useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import HumanoidSection from "@/components/HumanoidSection";
// import SpecsSection from "@/components/SpecsSection";
// import IntroSection from "@/components/IntroSection";
// import CreditScoring from "@/components/CreditScoring";
// import DetailsSection from "@/components/DetailsSection";
// import ImageShowcaseSection from "@/components/ImageShowcaseSection";
// import Features from "@/components/Features";
// import MadeByHumans from "@/components/MadeByHumans";
// import CreditScoringSystem from "@/components/CreditScoringSystem";
// import FoundersCards from "@/components/FoundersCards";
// import ProofOfTrust from "@/components/ProofOfTrust";
// import ExclusiveForDevs from "@/components/ExclusiveForDevs";
// import Footer from "@/components/Footer";

// const Index = () => {
//   // Initialize intersection observer to detect when elements enter viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fade-in");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll(".animate-on-scroll");
//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   useEffect(() => {
//     // This helps ensure smooth scrolling for the anchor links
//     const handleAnchorClick = (e: MouseEvent) => {
//       const anchor = e.target as HTMLAnchorElement;
//       if (!anchor.matches('a[href^="#"]')) return;

//       e.preventDefault();

//       const targetId = anchor.getAttribute('href')?.substring(1);
//       if (!targetId) return;

//       const targetElement = document.getElementById(targetId);
//       if (!targetElement) return;

//       // Increased offset to account for mobile nav
//       const offset = window.innerWidth < 768 ? 100 : 80;

//       window.scrollTo({
//         top: targetElement.offsetTop - offset,
//         behavior: 'smooth'
//       });
//     };

//     // Add event listener to document for better performance
//     document.addEventListener('click', handleAnchorClick);

//     // Cleanup function
//     return () => {
//       document.removeEventListener('click', handleAnchorClick);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen w-full overflow-x-hidden">
//       <Navbar />
//       <div className="w-full max-w-[100vw] overflow-hidden">
//         <main className="w-full max-w-full overflow-hidden">
//           <Hero />
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="space-y-4 sm:space-y-8">
//               <HumanoidSection />
//               <SpecsSection />
//               <IntroSection />
//               <CreditScoring />
//               <ImageShowcaseSection />
//               <DetailsSection />
//               <Features />
//               <CreditScoringSystem />
//               <FoundersCards />
//               <ProofOfTrust />
//               <ExclusiveForDevs />
//               <MadeByHumans />
//             </div>
//           </div>
//         </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
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
    const handleAnchorClick = (e) => {
      const anchor = e.target;
      if (!anchor.matches('a[href^="#"]')) return;

      e.preventDefault();

      const targetId = anchor.getAttribute("href")?.substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Increased offset to account for mobile nav
      const offset = window.innerWidth < 768 ? 100 : 80;

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    };

    // Add event listener to document for better performance
    document.addEventListener("click", handleAnchorClick);

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="w-full overflow-hidden">
        <main className="w-full overflow-hidden">
          <Hero />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="space-y-4 sm:space-y-8">
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
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
