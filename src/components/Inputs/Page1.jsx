import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const Page1 = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD3ZFwUynLIrpQ0P4Uvmwohv-E15WJHCuo", // Replace with your Google API key
    libraries,
  });

  const handleFromPlaceChanged = () => {
    const place = fromRef.current.getPlace();
    setFrom(place.formatted_address);
    localStorage.setItem('from', selectedPlace);
  };

  const handleToPlaceChanged = () => {
    const place = toRef.current.getPlace();
    setTo(place.formatted_address);
    localStorage.setItem('to', selectedPlace);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="flex justify-between gap-20 w-[80vw]">
      {/* LEFT INPUT */}
      <div className="w-1/2 flex flex-col gap-4">
        <div className="font-arsenal font-[600] italic text-2xl">From</div>
        <div className="text-[0.9rem]">We'll recommend the best transportation options for you</div>

        {/* Input with icon */}
        <div className="relative w-full">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="search"
            className="w-full pl-10 border-2 p-2 rounded-md outline-none"
            placeholder="Enter starting city or town"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onBlur={() => localStorage.setItem('from', from)}
            ref={fromRef}
            onFocus={() => {
              const autocomplete = new window.google.maps.places.Autocomplete(fromRef.current, { types: ["(cities)"] });
              autocomplete.addListener("place_changed", handleFromPlaceChanged);
            }}
          />
        </div>
      </div>

      {/* RIGHT INPUT */}
      <div className="w-1/2 flex flex-col gap-4">
        <div className="font-arsenal font-[600] italic text-2xl">Where do you want to go?</div>
        <div className="text-[0.9rem]">Get personalized recommendations to plan your itinerary.</div>

        {/* Input with icon */}
        <div className="relative w-full">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="search"
            className="w-full pl-10 border-2 p-2 rounded-md outline-none"
            placeholder="Enter destination city or town"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onBlur={() => localStorage.setItem('to', to)}
            ref={toRef}
            onFocus={() => {
              const autocomplete = new window.google.maps.places.Autocomplete(toRef.current, { types: ["(cities)"] });
              autocomplete.addListener("place_changed", handleToPlaceChanged);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;