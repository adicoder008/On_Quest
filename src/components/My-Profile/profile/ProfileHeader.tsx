import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-[rgba(248,249,250,1)] border w-full overflow-hidden pb-[26px] rounded-lg border-[rgba(197,196,199,1)] border-solid max-md:max-w-full">
      <div className="flex flex-col relative min-h-[149px] w-full pt-[25px] pb-20 px-[70px] max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/dc866a18c1875c568a73ee825268f62151451697?placeholderIfAbsent=true"
          alt="Cover image"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex items-center gap-1 justify-center">
          <button
            aria-label="Edit cover"
            className="items-center shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[rgba(248,111,10,0.10)] self-stretch flex w-11 gap-2.5 h-11 my-auto p-2.5 rounded-[64px]"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/a1ce11334f6fd749987ad8ba6dfb1703626fd758?placeholderIfAbsent=true"
              alt="Edit icon"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
            />
          </button>
        </div>
      </div>
      <div className="z-10 -mt-10 px-[29px] max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/5a2a7a7ce8131f512e49834519610d7a24d14fcf?placeholderIfAbsent=true"
          alt="Profile picture"
          className="relative aspect-[1] object-contain w-24 rounded-[1080px]"
        />
        <div className="flex w-full flex-col items-stretch mt-2.5 max-md:max-w-full">
          <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
            <div className="flex min-w-60 gap-3 w-[326px]">
              <div className="min-w-60 w-[326px]">
                <div className="flex w-full items-stretch gap-2">
                  <h1 className="text-black text-xl font-medium my-auto">
                    Sarah Parker
                  </h1>
                  <div className="flex items-stretch gap-1 text-xs text-black font-normal whitespace-nowrap h-full">
                    <div className="self-stretch bg-[rgba(248,111,10,0.1)] gap-2.5 h-full px-2 py-0.5 rounded-[48px]">
                      Scout
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/0ca32467b995d395e7e386446ed15b35165a05d6?placeholderIfAbsent=true"
                      alt="Verified badge"
                      className="aspect-[1] object-contain w-6 shrink-0 my-auto"
                    />
                  </div>
                </div>
                <div className="text-[#8B8A8F] text-sm font-medium">
                  Travel Photographer | Bagpacker | Adventure Seeker
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 justify-center w-11">
              <button
                aria-label="Edit profile"
                className="items-center shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[rgba(248,111,10,0.10)] self-stretch flex w-11 gap-2.5 h-11 my-auto p-2.5 rounded-[64px]"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/a1ce11334f6fd749987ad8ba6dfb1703626fd758?placeholderIfAbsent=true"
                  alt="Edit icon"
                  className="aspect-[1] object-contain w-6 self-stretch my-auto"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-3 text-sm text-[#8B8A8F] font-medium mt-2">
            <div>
              <span className="text-[rgba(51,51,51,1)]">32</span>{" "}
              <span className="font-normal">posts</span>
            </div>
            <div>
              <span className="text-[rgba(51,51,51,1)]">372</span>{" "}
              <span className="font-normal">followers</span>
            </div>
            <div>
              <span className="text-[rgba(51,51,51,1)]">32</span>{" "}
              <span className="font-normal">followings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
