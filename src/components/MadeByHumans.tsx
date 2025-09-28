import React from "react";
import Lanyard from "./Lanyard";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full py-10 sm:py-16 bg-transparent">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Liquid glass card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          {/* Soft gradient flares */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl"></div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-green-300/15 blur-3xl"></div>

          {/* Content padding */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Header with badge and line */}
            {/* <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-4 ">
                <div className="pulse-chip font-bold italic">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-200 mr-2">13</span>
                  <span>Made By Humans</span>
                </div>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
            </div> */}

            {/* Main content container with background image overlay */}
            <div className="relative rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden min-h-[250px] sm:min-h-[350px] border border-white/30 bg-white/20 backdrop-blur-xl">
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url('/Gemini_Generated_Image_woke52woke52woke.png')",
                }}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col justify-between">
                <div className="section-container opacity-0 animate-on-scroll">
                  <img
                    src="/CLENFI (7).png"
                    alt="CLenFi Logo"
                    className="h-[200px] contrast-150 drop-shadow-lg"
                  />
                  <span className="text-white text-xl font-medium"></span>
                </div>

                <div
                  className="section-container opacity-0 animate-on-scroll"
                  style={{
                    overflow: "hidden",
                    maxHeight: "500px",
                    marginTop: "40px",
                  }}
                >
                  <h2
                    style={{
                      marginBottom: "-30px",
                      padding: "0px 0px 100px",
                    }}
                    className="sm:text-5xl font-playfair text-white italic mt-0 mx-0 font-thin text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl drop-shadow-2xl"
                  >
                    Powered by Proof Of Trust
                  </h2>
                </div>

                {/* Glass morphism bottom bar */}
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MadeByHumans;
