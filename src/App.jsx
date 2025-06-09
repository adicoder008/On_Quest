import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import First from "./components/Inputs/TripPlanner";
import Mid from "./components/Mid";
import Navbar from "./components/Navbar";
import PhoneSection from "./components/PhoneSection";
import Signup from "./components/Signup";
import Trip from "./pages/Trip";
import Feed from "./components/Feed/Index";
import MyProfile from "./components/My-Profile/Index";
import Quest from "./pages/Quest";
import PostQuest from "./components/QuestPopups/PostQuest";
import VisibleTo from "./components/QuestPopups/VisibleTo";
import AddLocation from "./components/QuestPopups/AddLocation";
import TagPeople from "./components/QuestPopups/TagPeople";
import AddTags from "./components/QuestPopups/AddTags";
import NavbarDevgambo from "./components/Navbar-d";
import ThreeStepSignup from "./components/SignUp_d";




const App = () => (
  
  <div>
    {/* <Navbar/>
    <Hero/>
    <Mid/>
    <HowItWorks/>
    <PhoneSection/>
    <FAQ/>
    <Signup/>
    <Footer/> 
    <Quest/> */}

    {/* <MyProfile/> */}

    {/* <Feed/> */}
  
    <ThreeStepSignup/>
    {/* QuestPopups---> */}
          {/* <PostQuest/> */}
          {/* <VisibleTo/> */}
          {/* <AddLocation/> */}
          {/* <TagPeople/> */}
          {/* <AddTags/> */}
  </div>
);

export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

