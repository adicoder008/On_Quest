import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-[rgba(248,249,250,1)] border w-full mt-3 pt-4 pb-6 px-8 rounded-lg border-[rgba(197,196,199,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-4 justify-center flex-wrap max-md:max-w-full">
        <h2 className="self-stretch min-w-60 text-base text-black font-medium whitespace-nowrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          About
        </h2>
        <div className="self-stretch flex items-center gap-1 justify-center w-6 my-auto">
          <button
            aria-label="Edit about"
            className="items-center shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] self-stretch flex w-6 gap-2.5 my-auto rounded-[64px]"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/a1ce11334f6fd749987ad8ba6dfb1703626fd758?placeholderIfAbsent=true"
              alt="Edit icon"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
            />
          </button>
        </div>
      </div>
      <p className="text-[#8B8A8F] text-sm font-normal leading-[21px] mt-4 max-md:max-w-full">
        From bustling city streets to untouched wilderness, I am a traveler,
        backpacker, and storyteller who believes every journey holds a story
        waiting to be told. With a backpack on my shoulders and a camera in my
        hands, I explore the world to document its hidden wonders, cultures, and
        untamed beauty.
      </p>
    </div>
  );
};

export default AboutSection;
