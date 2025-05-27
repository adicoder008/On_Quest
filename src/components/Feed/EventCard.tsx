import React from "react";

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({
  day,
  month,
  title,
  location,
}) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="rounded bg-[rgba(64,43,9,0.1)] self-stretch flex flex-col items-center text-black whitespace-nowrap justify-center w-[49px] h-[49px] my-auto px-3">
        <div className="text-base font-medium">{day}</div>
        <div className="text-sm font-normal">{month}</div>
      </div>
      <div className="self-stretch font-normal my-auto">
        <div className="text-black text-sm">{title}</div>
        <div className="text-[#8B8A8F] text-xs">{location}</div>
      </div>
    </div>
  );
};

export default EventCard;
