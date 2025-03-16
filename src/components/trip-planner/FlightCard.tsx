import React from "react";

interface FlightCardProps {
  airline: string;
  flightNumber: string;
  price: string;
  departureDate: string;
  departureTime: string;
  departureCity: string;
  duration: string;
  arrivalDate: string;
  arrivalTime: string;
  arrivalCity: string;
  logo: string;
}

export const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  flightNumber,
  price,
  departureDate,
  departureTime,
  departureCity,
  duration,
  arrivalDate,
  arrivalTime,
  arrivalCity,
  logo,
}) => {
  return (
    <div className="items-stretch border border-[color:var(--Label-Tertiary,#C5C4C7)] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-white flex min-w-60 flex-col justify-center w-[281px] px-4 py-3 rounded-lg border-solid">
      <div className="w-full">
        <div className="flex w-full gap-[40px_100px] justify-between">
          <div className="flex items-center gap-2 font-normal">
            <img
              src={logo}
              className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
              alt={airline}
            />
            <div className="self-stretch w-12 my-auto">
              <div className="text-black text-sm">{airline}</div>
              <div className="text-[#8B8A8F] text-xs">{flightNumber}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-black text-base font-medium">{price}</div>
            <div className="text-[#8B8A8F] text-xs font-normal">per adult</div>
          </div>
        </div>
        <div className="flex w-full font-normal justify-between mt-4">
          <div className="flex min-w-60 w-full items-center gap-8 justify-between flex-1 shrink basis-[0%]">
            <div className="self-stretch w-16 my-auto">
              <div className="text-[rgba(139,138,143,1)] text-[10px]">
                {departureDate}
              </div>
              <div className="text-black text-base font-medium">
                {departureTime}
              </div>
              <div className="text-[#8B8A8F] text-xs">{departureCity}</div>
            </div>
            <div className="self-stretch min-h-10 text-[10px] text-[rgba(139,138,143,1)] text-center w-[57px] my-auto">
              <div>{duration}</div>
              <div className="bg-[rgba(40,167,69,1)] flex min-h-0.5 w-full mt-1 rounded-lg" />
              <div className="mt-1">Non stop</div>
            </div>
            <div className="self-stretch flex flex-col w-16 my-auto">
              <div className="text-[rgba(139,138,143,1)] text-[10px]">
                {arrivalDate}
              </div>
              <div className="text-black text-base font-medium">
                {arrivalTime}
              </div>
              <div className="text-[#8B8A8F] text-xs">{arrivalCity}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};