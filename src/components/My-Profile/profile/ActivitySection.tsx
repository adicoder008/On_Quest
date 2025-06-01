import React, { useState } from "react";
import PostCard from "./PostCard";

const ActivitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "comments">("posts");

  return (
    <div className="bg-[rgba(248,249,250,1)] border flex w-full flex-col overflow-hidden items-stretch mt-3 pl-6 py-6 rounded-lg border-[rgba(197,196,199,1)] border-solid max-md:max-w-full max-md:pl-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch my-auto">
          <h2 className="text-black text-xl font-medium">Activity</h2>
          <div className="text-[#8B8A8F] text-sm font-normal">
            324 followers
          </div>
        </div>
        <div className="self-stretch flex items-center gap-3 my-auto">
          <button className="justify-center items-center shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[#F86F0A] self-stretch flex gap-1 text-base text-white font-medium whitespace-nowrap my-auto pl-4 pr-6 py-2.5 rounded-lg max-md:pr-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/ebeccea4ec2cba991f0f5901273cfaa42a5f6973?placeholderIfAbsent=true"
              alt="Follow icon"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <div className="self-stretch my-auto">Follow</div>
          </button>
          <div className="self-stretch flex items-center gap-1 justify-center w-11 my-auto">
            <button
              aria-label="Edit activity"
              className="items-center shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-[rgba(248,111,10,0.10)] self-stretch flex w-11 gap-2.5 h-11 my-auto p-2.5 rounded-[64px]"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/2abd9319f7448c9fc856ba1b4b2ab68128033b39?placeholderIfAbsent=true"
                alt="Edit icon"
                className="aspect-[1] object-contain w-6 self-stretch my-auto"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-sm font-medium whitespace-nowrap mt-4">
        <button
          onClick={() => setActiveTab("posts")}
          className={`self-stretch shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] ${
            activeTab === "posts"
              ? "bg-[#EA6100] text-white"
              : "bg-white text-black border border-[color:var(--Label-Tertiary,#C5C4C7)] border-solid"
          } gap-2.5 px-4 py-2 rounded-[32px]`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`self-stretch shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] ${
            activeTab === "comments"
              ? "bg-[#EA6100] text-white"
              : "bg-white text-black border border-[color:var(--Label-Tertiary,#C5C4C7)] border-solid"
          } gap-2.5 px-4 py-2 rounded-[48px]`}
        >
          Comments
        </button>
      </div>
      <div className="flex gap-4 flex-wrap mt-4 max-md:max-w-full">
        <PostCard
          avatar="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/f2c04753faeb06e92f8c18ca0b4f344bb630c7e7?placeholderIfAbsent=true"
          username="Osama Bin Laden"
          timeAgo="2 hours ago"
          location="Abottabad, Pakistan"
          content="Just experienced the most amazing sunrise at Mount Batur! The trek was challenging but totally worth it. Here are some shots from this morning. 🌄"
          likes="2.5k"
          comments="184"
        />
        <PostCard
          avatar="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/f2c04753faeb06e92f8c18ca0b4f344bb630c7e7?placeholderIfAbsent=true"
          username="Osama Bin Laden"
          timeAgo="2 hours ago"
          location="Abottabad, Pakistan"
          content="Just experienced the most amazing sunrise at Mount Batur! The trek was challenging but totally worth it. Here are some shots from this morning. 🌄"
          likes="2.5k"
          comments="184"
        />
        <PostCard
          avatar="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/9c9dc9d817b0dbf2cdd49499170b0a7edb923707?placeholderIfAbsent=true"
          username="Osama Bin Laden"
          timeAgo="2 hours ago"
          location="Abottabad, Pakistan"
          content="Just experienced the most amazing sunrise at Mount Batur! The trek was challenging but totally worth it. Here are some shots from this morning. 🌄"
          likes="2.5k"
          comments="184"
        />
      </div>
      <div className="border min-h-px w-full mt-4 border-[rgba(139,138,143,1)] border-solid max-md:max-w-full" />
      <button className="flex w-full items-center gap-2 text-xl text-[rgba(102,102,102,1)] font-medium justify-center flex-wrap mt-4 max-md:max-w-full">
        <div className="self-stretch my-auto">Show all posts </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/172471d03d328fc2bfef9a888c5363bf7bde0ba1?placeholderIfAbsent=true"
          alt="Show more icon"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
      </button>
    </div>
  );
};

export default ActivitySection;
