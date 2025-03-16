import { Toaster } from "./components/ui/toaster"; 
import { Toaster as SonnerToaster } from "./components/ui/sonner"; // Renamed for clarity
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trip from "./pages/Trip";

const queryClient = new QueryClient();

// Separate Providers for better organization
const Providers = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>{children}</TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <Providers>
    <Toaster />
    <SonnerToaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trip />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        
      </Routes>
    </BrowserRouter>
  </Providers>
);

export default App;
