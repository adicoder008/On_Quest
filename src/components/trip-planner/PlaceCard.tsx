import React from "react";

interface PlaceCardProps {
  image: string;
  title: string;
  description: string;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex w-[605px] max-w-full items-center gap-3 text-base">
      <div className="self-stretch flex min-w-60 w-[605px] gap-3 my-auto max-md:max-w-full">
        <div className="bg-[rgba(248,249,250,1)] shadow-[2px_4px_4px_rgba(0,0,0,0.25)] flex min-w-60 w-full gap-2 justify-center flex-wrap flex-1 shrink basis-[0%] px-6 py-4 rounded-lg border-l-8 border-[rgba(248,249,250,1)] max-md:max-w-full max-md:px-5">
          <div className="overflow-hidden text-white font-semibold w-[200px] rounded-lg">
            <div className="flex flex-col relative aspect-[1.504] w-[200px]">
              <img
                src={image}
                className="absolute h-full w-full object-cover inset-0"
                alt={title}
              />
              <div className="relative pt-[105px] pb-[9px] px-3.5 rounded-lg max-md:pr-5 max-md:pt-[100px]">
                {title}
              </div>
            </div>
          </div>
          <div className="flex min-w-60 flex-col items-stretch text-black font-medium leading-6 justify-center flex-1 shrink basis-[0%]">
            <div className="w-full">
              <div className="flex w-full items-center gap-4">
                <div className="self-stretch flex-1 shrink basis-[0%] min-w-60 w-full gap-2.5 my-auto py-2">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
