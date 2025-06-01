
import React from "react";
import Navbar from "./profile/Navbar";
import ProfileHeader from "./profile/ProfileHeader";
import AboutSection from "./profile/AboutSection";
import BadgesSection from "./profile/BadgesSection";
import ActivitySection from "./profile/ActivitySection";
import LeagueInfoWidget from "./profile/widgets/LeagueInfoWidget";
import ProgressWidget from "./profile/widgets/ProgressWidget";
import EventsWidget from "./profile/widgets/EventsWidget";
import TrendingTravelersWidget from "./profile/widgets/TrendingTravelersWidget";
// import { ScrollArea } from "../ui/scroll-area";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <Navbar />

      <div className="flex flex-1 px-12 gap-4 pt-4 max-w-[1440px] mx-auto w-full max-md:flex-col">
        {/* Left column with profile content */}
        <div className="flex-1">
          <ProfileHeader />
          <AboutSection />
          <div className="flex w-full items-stretch gap-4 flex-wrap mt-3 max-md:max-w-full">
            <LeagueInfoWidget />
            <ProgressWidget />
          </div>
          <BadgesSection />
          <ActivitySection />
        </div>

        {/* Right sidebar */}
        <aside className="w-80 flex-shrink-0 max-md:w-full max-md:order-first">
          <div className="sticky top-4">
            {/* <ScrollArea className="h-[calc(100vh-80px)]"> */}
              <div className="bg-white rounded-lg shadow-sm mb-4">
                <EventsWidget />
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <TrendingTravelersWidget />
              </div>
            {/* </ScrollArea> */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Index;