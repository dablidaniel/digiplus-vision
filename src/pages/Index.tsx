import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import ServicesSection from "@/components/home/ServicesSection";
import BlogSection from "@/components/home/BlogSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import EventsSection from "@/components/home/EventsSection";
import CatalogueSection from "@/components/home/CatalogueSection";
import FormationsSection from "@/components/home/FormationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <VideoSection />
    <ServicesSection />
    <BlogSection />
    <ResourcesSection />
    <EventsSection />
    <CatalogueSection />
    <FormationsSection />
    <TestimonialsSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
