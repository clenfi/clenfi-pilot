import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconStar,
  IconInfoCircle,
  IconCreditCard,
  IconShield,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: scrollToTop,
    },
    {
      title: "Features", 
      icon: (
        <IconStar className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: "#features",
    },
    {
      title: "CLenFi",
      icon: (
        <div className="w-full h-full flex items-center justify-center relative">
          <img
            src="/CLENFI.svg"
            width={800}
            height={800}
            alt="CLenFi Logo"
            className="w-80 h-80 object-contain filter drop-shadow-lg scale-150"
          />
        </div>
      ),
      href: "#",
      onClick: scrollToTop,
    },
    {
      title: "Credit Cards",
      icon: (
        <IconCreditCard className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: "#nft-cards",
    },
    {
      title: "How it Works",
      icon: (
        <IconInfoCircle className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: "#how-it-works",
    },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        mobileClassName=""
        desktopClassName="shadow-2xl border border-neutral-200 dark:border-neutral-800"
        items={links}
      />
    </div>
  );
}