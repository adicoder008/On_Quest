import React from "react";

const BadgesSection: React.FC = () => {
  return (
    <div className="bg-[rgba(248,249,250,1)] border w-full mt-3 pt-4 pb-6 px-6 rounded-lg border-[rgba(197,196,199,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-black text-base font-medium self-stretch my-auto">
          Earned Badges
        </h2>
        <button className="text-[#8B8A8F] text-sm font-normal self-stretch my-auto">
          View All
        </button>
      </div>
      <div className="flex w-full gap-[20px_25px] text-sm text-[rgba(64,43,9,1)] font-semibold text-center leading-[17px] flex-wrap mt-4 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/dba2d54303dcd74d3cbdc612135f1b2b1b3d853f?placeholderIfAbsent=true"
          alt="Badge 1"
          className="aspect-[0.83] object-contain w-[100px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/d4a7c5796c0e3a5e23944f0ca08bb3fb943f9a92?placeholderIfAbsent=true"
          alt="Badge 2"
          className="aspect-[0.83] object-contain w-[100px] shrink-0"
        />
        <div className="justify-center items-stretch shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[#F8EBE2] flex min-h-[120px] flex-col w-[100px] px-3 py-2.5 rounded-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/6d9015d66a4492d3b77ce66461bc10f538b436ae?placeholderIfAbsent=true"
            alt="Road Tripper badge"
            className="aspect-[0.83] object-contain w-[100px] shrink-0"
          />
          <div>Road Tripper</div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/c42e91029e337a89111f1a2172612872a411bd76?placeholderIfAbsent=true"
          alt="Badge 4"
          className="aspect-[0.83] object-contain w-[100px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/0291fdd9e2265e87a5dccf5cc444f10f08808519?placeholderIfAbsent=true"
          alt="Badge 5"
          className="aspect-[0.83] object-contain w-[100px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/0fa4f8b0515603bac79cc13dbfa34b83a9b15eaf?placeholderIfAbsent=true"
          alt="Badge 6"
          className="aspect-[0.83] object-contain w-[100px] shrink-0"
        />
      </div>
    </div>
  );
};

export default BadgesSection;
