
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBulb,
  IconExchange,
  IconCreditCard,
  IconSparkles,
  IconGauge,
} from "@tabler/icons-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-black" />,
      href: "#hero",
    },
    {
      title: "Why CLenFi",
      icon: <IconBulb className="h-full w-full text-black" />,
      href: "#why-clenfi",
    },
    {
      title: "Credit Scoring",
      icon: <IconGauge className="h-full w-full text-black" />,
      href: "#credit-scoring",
    },
    {
      title: "Cards",
      icon: <IconCreditCard className="h-full w-full text-black" />,
      href: "#nft-cards",
    },
    {
      title: "How It Works",
      icon: <IconExchange className="h-full w-full text-black" />,
      href: "#how-it-works",
    },
    {
      title: "Features",
      icon: <IconSparkles className="h-full w-full text-black" />,
      href: "#features",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-transparent backdrop-blur-0 border-0 shadow-none"
      )}
      style={{ height: '70px' }}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <a 
          href="#" 
          className="flex items-center space-x-2 py-1"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="CLenFi"
        >
          <img
            src="/CLENFI (7).png"
            alt="CLenFi Logo"
            className="h-28 sm:h-32 md:h-36 lg:h-40"
            style={{ maxHeight: '160px', width: 'auto' }}
          />
        </a>
        {/* FloatingDock replaces both desktop and mobile menus */}
        <div className="ml-4">
          <FloatingDock
            items={links}
            desktopClassName="bg-transparent border-0 shadow-none"
            mobileClassName="translate-y-2 bg-transparent"
          />
        </div>
      </div>
      {/* No separate mobile overlay menu; FloatingDock handles mobile */}
    </header>
  );
};

export default Navbar;
