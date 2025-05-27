import React from "react";
import { FlightCard } from "./FlightCard";

export const FlightDetails = () => {
  return (
    <div className="max-md:max-w-full overflow-x-auto">
      <div className="flex w-[732px] max-w-full flex-col overflow-hidden max-md:pl-5">
        <div className="font-normal max-md:max-w-full">
          <h2 className="text-black text-2xl">
            <span className="font-bold">Flight</span> Details (Delhi to Goa)
          </h2>
          <p className="self-stretch gap-2 text-base text-black mt-1.5 max-md:max-w-full">
            Here are some flight options from Delhi (DEL) to Goa (GOI) on March
            15, 2025
          </p>
        </div>

        <div className="overflow-x-auto flex gap-3 py-3 mt-3 ">
          <FlightCard
            airline="Indigo"
            flightNumber="6E 2603"
            price="₹ 6,735"
            departureDate="15 Mar"
            departureTime="19:40"
            departureCity="New Delhi"
            duration="2h 30m"
            arrivalDate="15 Mar"
            arrivalTime="22:10"
            arrivalCity="Goa"
            logo="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/7c261c3204bba32856c6cda2c69cf63dccf8a5847bab25cc4f3d4bbd43df58b7?placeholderIfAbsent=true"
          />
          <FlightCard
            airline="Air India"
            flightNumber="AI 883"
            price="₹ 7,250"
            departureDate="15 Mar"
            departureTime="10:15"
            departureCity="New Delhi"
            duration="2h 45m"
            arrivalDate="15 Mar"
            arrivalTime="13:00"
            arrivalCity="Goa"
            logo="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true"
          />
          <FlightCard
            airline="Vistara"
            flightNumber="UK 847"
            price="₹ 8,100"
            departureDate="15 Mar"
            departureTime="14:20"
            departureCity="New Delhi"
            duration="2h 35m"
            arrivalDate="15 Mar"
            arrivalTime="16:55"
            arrivalCity="Goa"
            logo="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/1fbdce7451ea9115cd8ed19b8552faff802601b0b3f49ec9bbc0e30a686e9a0b?placeholderIfAbsent=true"
          />
          <FlightCard
            airline="SpiceJet"
            flightNumber="SG 172"
            price="₹ 6,999"
            departureDate="15 Mar"
            departureTime="07:30"
            departureCity="New Delhi"
            duration="2h 40m"
            arrivalDate="15 Mar"
            arrivalTime="10:10"
            arrivalCity="Goa"
            logo="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/7f07e118a72e5aa15917ae54ea7af35938eee6b092de817196d6a69f3f0c4ab2?placeholderIfAbsent=true"
          />
        </div>
        <div className=" flex">
        <button className="text-[rgba(53,138,233,1)] text-sm font-normal text-center mt-3">
          See More
        </button>
        </div>
      </div>
    </div>
  );
};
