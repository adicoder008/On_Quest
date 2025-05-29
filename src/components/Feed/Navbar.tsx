// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex w-full items-center gap-[40px_100px] whitespace-nowrap justify-between flex-wrap px-[70px] py-1.5 max-md:max-w-full max-md:px-5">
//       <div className="self-stretch flex min-w-60 items-center gap-4 text-base flex-wrap my-auto max-md:max-w-full">
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/40282d6e58c7d0178cb7db392810ced57f08d51e?placeholderIfAbsent=true"
//           alt="Logo"
//           className="aspect-[1.78] object-contain w-[114px] self-stretch shrink-0 my-auto"
//         />
//         <div className="justify-between items-center border border-[color:var(--Label-Secondary,#8B8A8F)] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] bg-white self-stretch flex min-w-60 min-h-11 gap-[40px_100px] w-[361px] my-auto pl-2.5 pr-1.5 py-[5px] rounded-[32px] border-solid">
//           <div className="self-stretch flex items-center gap-2.5 text-[#8B8A8F] font-normal my-auto">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/ccb412653736f4e88d1dabb8cb2a973f7378c7f5?placeholderIfAbsent=true"
//               alt="Search icon"
//               className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
//             />
//             <div className="self-stretch my-auto">Search</div>
//           </div>
//           <button
//             className="self-stretch bg-[rgba(234,97,0,1)] min-h-[34px] gap-2.5 text-white font-medium my-auto px-4 py-[5px] rounded-[32px]"
//             aria-label="Search"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       <div className="self-stretch flex min-w-60 items-center gap-6 text-sm text-[#666] font-normal flex-wrap my-auto max-md:max-w-full">
//         <div className="self-stretch flex min-w-60 gap-6 justify-center my-auto px-6 border-[rgba(102,102,102,1)] border-r max-md:max-w-full max-md:px-5">
//           <Link to="/" className="flex flex-col items-center w-20">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/06d56ea533aecd9a2b8ddf71ea41700f8c6b6951?placeholderIfAbsent=true"
//               alt="Home icon"
//               className="aspect-[1] object-contain w-6"
//             />
//             <div>Home</div>
//           </Link>
//           <Link to="/groups" className="flex flex-col items-center w-20">
//             <div className="flex min-h-6 w-6" />
//             <div>Groups</div>
//           </Link>
//           <Link to="/notifications" className="flex flex-col items-center w-20">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/f1c2c538ee76c0ea7bf7020c040724f2ac094442?placeholderIfAbsent=true"
//               alt="Notifications icon"
//               className="aspect-[1] object-contain w-6"
//             />
//             <div>Notifications</div>
//           </Link>
//           <Link to="/quests" className="flex flex-col items-center">
//             Quests
//           </Link>
//           <Link to="/events" className="flex flex-col items-center">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/3d6360b59cd4cc17c4fb0128da1e9f6dae6ce0ab?placeholderIfAbsent=true"
//               alt="Events icon"
//               className="aspect-[1] object-contain w-6"
//             />
//             <div>Events</div>
//           </Link>
//         </div>
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/b783a7681e9247dfa6d0b0f79c8d7bb8/f2c04753faeb06e92f8c18ca0b4f344bb630c7e7?placeholderIfAbsent=true"
//           alt="User profile"
//           className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[1080px]"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { Search, Home, Users, Bell, Calendar, Target } from "lucide-react";
import { Avatar } from "./Avatar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm flex w-full items-center justify-between py-2 px-4 border-b border-gray-200">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/2f7a9dff-4822-4918-99db-618f77634f73.png"
            alt="OnQuest Logo"
            className="h-8"
          />
        </Link>
        
        <div className="relative flex items-center">
          <div className="flex items-center border rounded-full bg-gray-50 overflow-hidden">
            <div className="flex items-center pl-3 pr-2">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent border-none focus:outline-none px-2 py-1.5 w-48"
              />
            </div>
            <button className="bg-orange-500 text-white px-4 py-1.5 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8 text-gray-600">
          <Link to="/" className="flex flex-col items-center gap-0.5 text-xs">
            <Home size={20} className="text-gray-600" />
            <span>Home</span>
          </Link>
          <Link to="/groups" className="flex flex-col items-center gap-0.5 text-xs">
            <Users size={20} className="text-gray-600" />
            <span>Groups</span>
          </Link>
          <Link to="/notifications" className="flex flex-col items-center gap-0.5 text-xs">
            <Bell size={20} className="text-gray-600" />
            <span>Notifications</span>
          </Link>
          <Link to="/quests" className="flex flex-col items-center gap-0.5 text-xs">
            <Target size={20} className="text-gray-600" />
            <span>Quests</span>
          </Link>
          <Link to="/events" className="flex flex-col items-center gap-0.5 text-xs">
            <Calendar size={20} className="text-gray-600" />
            <span>Events</span>
          </Link>
        </div>
        
        <div className="border-l border-gray-300 h-8 mx-2"></div>
        
        {/* <Link to="/profile">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
          </Avatar>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
