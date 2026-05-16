"use client";

import Sticker from "@/components/molecules/Sticker";

const StickerContainer = () => {
  return (
    <>
      {/* Left sticker — floating beside the card on extra-large screens */}
      <div className="hidden xl:block absolute left-6 top-80 z-40">
        <Sticker
          src="/assets/sticker02.png"
          alt="Darth Vader"
          rotation={-14}
          size={208}
        />
      </div>

      {/* Right sticker — floating beside the card on extra-large screens */}
      <div className="hidden xl:block absolute right-6 top-52 z-40">
        <Sticker
          src="/assets/sticker01.png"
          alt="Octocat"
          rotation={10}
          size={208}
        />
      </div>
    </>
  );
};

export default StickerContainer;
