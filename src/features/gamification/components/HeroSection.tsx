import { useState } from "react";
import CreateRewardDialog from "./CreateRewardDialog";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex justify-center overflow-hidden w-[960px] h-[322px] mx-auto">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
          style={{
            backgroundImage: "url('/gamification-bg.svg')",
          }}
        />
        

        {/* Content */}
        <div className="relative w-[354px] mx-auto text-center py-[44px] z-10">
          <h2 className="text-[28px] font-semibold text-[#561056]">
            Gamify your Campaign
          </h2>

          <p className="text-gray-600 mt-3 w-[354px]">
            Enable gamification to start crafting your custom reward system.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="h-[40px] w-[310px] text-[16px] mt-6 px-6 rounded-[10px] bg-background-purple text-white font-regular shadow-md hover:opacity-90 transition"
          >
            Enable Gamification
          </button>
        </div>
      </div>

      <CreateRewardDialog open={open} onOpenChange={setOpen} />
    </>
  );
}