import React from "react";
import UserAvatar from "./UserAvatar";
import FollowButton from "./FollowButton";

interface TravelerCardProps {
  name: string;
  description: string;
  avatarSrc: string;
}

const TravelerCard: React.FC<TravelerCardProps> = ({
  name,
  description,
  avatarSrc,
}) => {
  return (
    <div className="flex w-full items-center  justify-between">
      <div className="self-stretch flex items-center gap-2 my-auto">
        <UserAvatar src={avatarSrc} size="sm" />
        <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
          <div className="text-[#333] text-sm font-medium">{name}</div>
          <div className="text-[#8B8A8F] text-xs font-normal">
            {description}
          </div>
        </div>
      </div>
      <FollowButton variant="primary" size="sm" />
    </div>
  );
};

export default TravelerCard;
