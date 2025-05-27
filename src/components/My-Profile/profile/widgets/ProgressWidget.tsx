import React from "react";

const ProgressWidget: React.FC = () => {
  return (
    <div className="bg-[rgba(248,249,250,1)] border flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] px-6 py-3 rounded-lg border-[rgba(197,196,199,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-h-14 flex-col items-center justify-center w-14 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/b95ac746c5387400c28c84b31827bd84a8ccebb5?placeholderIfAbsent=true"
            alt="Current level"
            className="aspect-[1] object-contain w-14"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-center w-[47px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/90a88395b2543759fa75d4583da77d0e8f08a583?placeholderIfAbsent=true"
            alt="Next level"
            className="aspect-[0.98] object-contain w-[47px]"
          />
        </div>
      </div>
      <div className="w-full mt-3 max-md:max-w-full">
        <div className="w-full rounded-[64px] max-md:max-w-full">
          <div className="bg-[rgba(217,217,217,1)] flex flex-col rounded-[64px] max-md:max-w-full max-md:pr-5">
            <div className="bg-[rgba(248,111,10,1)] flex w-[316px] shrink-0 max-w-full h-2 rounded-[64px]" />
          </div>
        </div>
        <div className="w-full text-sm text-[#8B8A8F] font-normal mt-1 max-md:max-w-full">
          50/100 QP to &quot;Explorer&quot;
        </div>
      </div>
    </div>
  );
};

export default ProgressWidget;
