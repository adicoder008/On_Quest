import React, { useState } from "react";
import { TimeSection } from "./TimeSection";
import { PlaceCard } from "./PlaceCard";
import { Routines } from "./Routines";

interface RoutineItem {
  id: string;
  CheckIn: string;
}

interface PlaceItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

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

  const [activeRoutineId, setActiveRoutineId] = useState<string | null>(null);

const handleRoutineClick = (id: string) => {
  setActiveRoutineId((prev) => (prev === id ? null : id)); // Toggle active state
};

  // Routines state
  const [routines, setRoutines] = useState<RoutineItem[]>([
    { id: "1", 
      CheckIn: "Check-in to hostel/guesthouse (Anjuna, Baga, or Calangute)",
      image: "https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true", },
    { id: "2", 
      CheckIn: "Rent a scooter (~₹400/day)",
      image: "https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true",
     }
  ]);

  // Places state
  const [places, setPlaces] = useState<PlaceItem[]>([
    {
      id: "1",
      image: "https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true",
      title: "Arambol Beach",
      description: "Discover the magic of Arambol Beach – where golden sands, chill vibes, and epic sunsets await!"
    },
    {
      id: "2",
      image: "https://cdn.builder.io/api/v1/image/assets/3b64de0bd39c48b8b53f7c91e5d4e417/3040fb0f958bb432aa81dc2446917c4a03146d3a7f41bdb05993403f1411c581?placeholderIfAbsent=true",
      title: "Calangute Beach",
      description: "Experience the vibrant atmosphere of Calangute Beach – Goa's most popular shoreline!"
    }
  ]);

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  // Move routine up
  const handleMoveUpRoutine = (index: number) => {
    if (index > 0) {
      const newRoutines = [...routines];
      [newRoutines[index], newRoutines[index - 1]] = [newRoutines[index - 1], newRoutines[index]];
      setRoutines(newRoutines);
    }
  };

  // Move routine down
  const handleMoveDownRoutine = (index: number) => {
    if (index < routines.length - 1) {
      const newRoutines = [...routines];
      [newRoutines[index], newRoutines[index + 1]] = [newRoutines[index + 1], newRoutines[index]];
      setRoutines(newRoutines);
    }
  };

  // Delete routine
  const handleDeleteRoutine = (id: string) => {
    setRoutines(routines.filter((routine) => routine.id !== id));
  };

  // Move place up
  const handleMoveUpPlace = (index: number) => {
    if (index > 0) {
      const newPlaces = [...places];
      [newPlaces[index], newPlaces[index - 1]] = [newPlaces[index - 1], newPlaces[index]];
      setPlaces(newPlaces);
    }
  };

  // Move place down
  const handleMoveDownPlace = (index: number) => {
    if (index < places.length - 1) {
      const newPlaces = [...places];
      [newPlaces[index], newPlaces[index + 1]] = [newPlaces[index + 1], newPlaces[index]];
      setPlaces(newPlaces);
    }
  };

  // Delete place
  const handleDeletePlace = (id: string) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  const handleAddRoutine = (text: string) => {
    const newRoutine = { id: Date.now().toString(), CheckIn: text ,image: "default_image_url_here"};
    setRoutines([...routines, newRoutine]);
  };

  return (
    <section className="w-full overflow-hidden mt-8 pr-6 py-1 max-md:max-w-full max-md:px-5">
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
            {/* Mapping routines dynamically */}
            {routines.map((routine, index) => (
              <Routines
                key={routine.id}
                image={routine.image}
                CheckIn={routine.CheckIn}
                id={routine.id}
                onMoveUp={() => handleMoveUpRoutine(index)}
                onMoveDown={() => handleMoveDownRoutine(index)}
                onDelete={() => handleDeleteRoutine(routine.id)}
                isActive={activeRoutineId === routine.id} // Only the clicked one is active
                whenClicked={handleRoutineClick}
                onAdd={handleAddRoutine} // Pass function to add routine
              />
            ))}

            {/* Mapping places dynamically */}
            {places.map((place, index) => (
              <PlaceCard
                id={place.id}
                key={place.id}
                image={place.image}
                title={place.title}
                description={place.description}
                onMoveUp={() => handleMoveUpPlace(index)}
                onMoveDown={() => handleMoveDownPlace(index)}
                onDelete={() => handleDeletePlace(place.id)}
                isActive={activeRoutineId === place.id}
                whenClicked={handleRoutineClick}                
              />
            ))}
          </div>
        </TimeSection>
      </div>
    </section>
  );
};

