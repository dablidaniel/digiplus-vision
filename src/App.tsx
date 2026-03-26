import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Blog from "./pages/Blog.tsx";
import Resources from "./pages/Resources.tsx";
import Formations from "./pages/Formations.tsx";
import Events from "./pages/Events.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ressources" element={<Resources />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
