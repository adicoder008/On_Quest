import React from "react";

export const TripHeader = () => {
  return (
    <div className="flex items-center font-normal justify-between flex-wrap mt-[23px] max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <h1 className="text-black text-[40px] max-md:max-w-full">
          <span className="font-bold text-[#F86F0A]">Goa</span> trip
        </h1>
        <p className="gap-2 text-base text-black mt-4 max-md:max-w-full">
          Here's a well-planned{" "}
          <span className="font-medium">Delhi to Goa solo trip</span> itinerary{" "}
          <span className="font-medium">(March 15–18)</span> under a budget of{" "}
          <span className="font-medium">
            ₹2500 per night (excluding flight costs)
          </span>
          .
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/b60768a4b0e42b2ce08a8622f08bb09efc534991cc751ca26e2f75c6c752ef31?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        alt="Share"
      />
    </div>
  );
};
