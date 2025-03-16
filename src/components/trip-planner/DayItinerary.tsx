
import React, { useState } from "react";
import { TimeSection } from "./TimeSection";
import { HotelCard } from "./HotelCard";
import { PlaceCard } from "./PlaceCard";

interface DayItineraryProps {
  dayNumber: number;
  date: string;
  description: string;
}

export const DayItinerary: React.FC<DayItineraryProps> = ({
  dayNumber,
  date,
  description,
}) => {
  const [openSection, setOpenSection] = useState<string>("morning");

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="w-full overflow-hidden mt-8 px-6 py-1 max-md:max-w-full max-md:px-5">
      <h2 className="text-black text-2xl font-bold max-md:max-w-full">
        Day {dayNumber}:{" "}
        <span className="font-normal">
          {date} ({description})
        </span>
      </h2>

      <div className="w-full mt-4 max-md:max-w-full">
        <TimeSection
          title="Morning"
          icon="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/1fbdce7451ea9115cd8ed19b8552faff802601b0b3f49ec9bbc0e30a686e9a0b?placeholderIfAbsent=true"
          toggleIcon="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/7f07e118a72e5aa15917ae54ea7af35938eee6b092de817196d6a69f3f0c4ab2?placeholderIfAbsent=true"
          isOpen={openSection === "morning"}
          onToggle={() => handleToggle("morning")}
        >
          <div className="flex flex-col gap-3">
            <div className="bg-white shadow-[2px_4px_4px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch justify-center px-6 py-4 rounded-lg border-l-8 border-white">
              <div className="text-base text-black font-medium py-2">
                Rent a scooter (~₹400/day)
              </div>
            </div>

            <div className="shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] w-full">
              <div className="bg-white shadow-[2px_4px_4px_rgba(0,0,0,0.1)] flex w-full flex-col px-6 py-4 rounded-lg border-l-8 border-[rgba(250,132,31,1)]">
                <div className="text-base text-black font-medium py-2">
                  Check-in to hostel/guesthouse (Anjuna, Baga, or Calangute)
                </div>
                <div className="mt-1">
                  <div className="text-sm text-[rgba(139,138,143,1)]">
                    Suggested
                  </div>
                  <div className="overflow-x-auto flex gap-3 mt-2.5">
                    <HotelCard
                      name="Hotel Baga Bay"
                      location="Goa"
                      price="₹ 2,039"
                      rating="3.8/5"
                      ratingCount="40"
                      image="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/ded8dfbec0c83b36736eb7816d24317ba3499971c3b955ae179ae55d445677f2?placeholderIfAbsent=true"
                      overlay="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/ce1b110a62e3dc64506571379741db5f8aba30bb9ba86cc91e6be23b76e03b1b?placeholderIfAbsent=true"
                    />
                    {/* Add more hotel cards as needed */}
                  </div>
                  <div className="text-sm text-[rgba(53,138,233,1)] text-center mt-2.5">
                    See More
                  </div>
                </div>
              </div>
            </div>

            <PlaceCard
              image="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true"
              title="Arambol Beach"
              description="Discover the magic of Arambol Beach – where golden sands, chill vibes, and epic sunsets await!"
            />
          </div>
        </TimeSection>

        <TimeSection
          title="Afternoon"
          icon="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/8cd35b1e1cd91d36bd698c0f124d95956112a28c3dfa8b1db6919ebb9061be0c?placeholderIfAbsent=true"
          toggleIcon="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/fb7b68e83f6616cf802b0d306adf8d1e72b4992c0685c951cc8905e56b8613d8?placeholderIfAbsent=true"
          isOpen={openSection === "afternoon"}
          onToggle={() => handleToggle("afternoon")}
        >
          <div className="flex flex-col gap-3">
            <PlaceCard
              image="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true"
              title="Calangute Beach"
              description="Experience the vibrant atmosphere of Calangute Beach – Goa's most popular shoreline!"
            />
            <PlaceCard
              image="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true"
              title="Baga Beach"
              description="Enjoy water sports and beachside activities at the energetic Baga Beach"
            />
          </div>
        </TimeSection>

        <TimeSection
          title="Night"
          icon="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/df12da01b4042d55071f88bb4bb92985c6a6992244033a6c241a7c5c2b931875?placeholderIfAbsent=true"
          toggleIcon="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/9f8e48378c0f73444ad3d3375d2a5adce12fd34c36f5db71b322bb5d47ef6324?placeholderIfAbsent=true"
          isOpen={openSection === "night"}
          onToggle={() => handleToggle("night")}
        >
          <div className="flex flex-col gap-3">
            <PlaceCard
              image="https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true"
              title="Tito's Lane"
              description="Experience Goa's legendary nightlife at Tito's Lane – the heart of party central!"
            />
            <div className="bg-white shadow-[2px_4px_4px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch justify-center px-6 py-4 rounded-lg border-l-8 border-white">
              <div className="text-base text-black font-medium py-2">
                Dinner at a beachside shack (~₹500-800)
              </div>
            </div>
          </div>
        </TimeSection>
      </div>
    </section>
  );
};
