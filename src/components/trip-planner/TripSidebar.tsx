
import React, { useState, useEffect } from "react";
import { MapView } from "./MapView";
import { LocationList } from "./LocationList";
import { HotelDetail } from "./HotelDetail";
import { useItineraryPlaces, useNearbyHotels } from "../services/placesService";
import { Place } from "../services/placesService";

export const TripSidebar = () => {
  const { places, loading } = useItineraryPlaces();
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [view, setView] = useState<'map' | 'list'>('map');

  // Find the selected place when the ID changes
  useEffect(() => {
    if (selectedPlaceId && places.length > 0) {
      const place = places.find(p => p.id === selectedPlaceId) || null;
      setSelectedPlace(place);
    } else {
      setSelectedPlace(null);
    }
  }, [selectedPlaceId, places]);

  // Fetch nearby hotels when a place is selected
  const { hotels, loading: hotelsLoading } = useNearbyHotels(
    selectedPlace?.lat || 15.2993, 
    selectedPlace?.lng || 74.1240
  );

  const handleSelectPlace = (placeId: string) => {
    setSelectedPlaceId(placeId);
  };

  return (
    <div className="bg-[rgba(248,249,250,1)] w-full h-screen sticky top-0 flex flex-col">
      <div className="p-3 border-b flex justify-between items-center">
        <h3 className="text-lg font-bold">Trip Map</h3>
        <div className="flex space-x-1 rounded-lg bg-gray-200 p-1">
          <button 
            className={`px-3 py-1 text-sm rounded-md ${view === 'map' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setView('map')}
          >
            Map
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-md ${view === 'list' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p>Loading trip information...</p>
        </div>
      ) : (
        <>
          {view === 'map' ? (
            <div className="h-[40vh] md:h-[50vh]">
              <MapView places={places} />
            </div>
          ) : (
            <div className="h-[40vh] md:h-[50vh] overflow-y-auto">
              <LocationList
                places={places}
                selectedPlace={selectedPlaceId}
                onSelectPlace={handleSelectPlace}
              />
            </div>
          )}

          <div className="p-4 border-t bg-white flex-1 overflow-y-auto">
            <h3 className="font-bold text-lg mb-3">
              {selectedPlace 
                ? `Hotels near ${selectedPlace.name}` 
                : "Recommended Hotels"}
            </h3>
            
            {hotelsLoading ? (
              <p className="text-sm text-gray-500">Loading nearby hotels...</p>
            ) : (
              <div className="space-y-3">
                {hotels.map(hotel => (
                  <HotelDetail key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};