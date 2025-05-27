import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "../ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-sm flex w-full items-center justify-between px-4 py-1.5 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/7ba09782b451dbfbc5be2cd9243cebe4ac815288?placeholderIfAbsent=true"
          alt="Logo"
          className="h-8 object-contain"
        />
        <div className="flex items-center border border-[#8B8A8F] bg-white rounded-full px-3 py-1.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/99410d3970fe67ea532993d1c196093377128b25?placeholderIfAbsent=true"
            alt="Search icon"
            className="w-5 h-5 mr-2"
          />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-[#8B8A8F] w-40"
          />
          <button className="bg-[#EA6100] text-white text-sm px-4 py-1 rounded-full ml-2">
            Search
          </button>
        </div>
      </div>
      
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-6">
          <NavigationMenuItem className="flex flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/06d56ea533aecd9a2b8ddf71ea41700f8c6b6951?placeholderIfAbsent=true"
              alt="Home icon"
              className="w-5 h-5"
            />
            <span className="text-xs text-gray-600 mt-1">Home</span>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="flex flex-col items-center">
            <div className="w-5 h-5"></div>
            <span className="text-xs text-gray-600 mt-1">Groups</span>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="flex flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/f1c2c538ee76c0ea7bf7020c040724f2ac094442?placeholderIfAbsent=true"
              alt="Notifications icon"
              className="w-5 h-5"
            />
            <span className="text-xs text-gray-600 mt-1">Notifications</span>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="flex flex-col items-center">
            <div className="w-5 h-5"></div>
            <span className="text-xs text-gray-600 mt-1">Trip Planner</span>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="flex flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/60120c5b52eabefbdfcb273cc759ee8e7af48e75?placeholderIfAbsent=true"
              alt="Events icon"
              className="w-5 h-5"
            />
            <span className="text-xs text-gray-600 mt-1">Events</span>
          </NavigationMenuItem>
          
          <div className="border-l border-gray-300 h-10 mx-2"></div>
          
          <NavigationMenuItem>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/f2c04753faeb06e92f8c18ca0b4f344bb630c7e7?placeholderIfAbsent=true"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
