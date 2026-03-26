import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
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

    <ScrollReveal>
      <VideoSection />
    </ScrollReveal>

    <ParallaxSection speed={0.15}>
      <ServicesSection />
    </ParallaxSection>

    <ScrollReveal direction="left">
      <BlogSection />
    </ScrollReveal>

    <ScrollReveal direction="right" delay={0.1}>
      <ResourcesSection />
    </ScrollReveal>

    <ParallaxSection speed={0.2}>
      <EventsSection />
    </ParallaxSection>

    <ScrollReveal>
      <CatalogueSection />
    </ScrollReveal>

    <ParallaxSection speed={0.1}>
      <FormationsSection />
    </ParallaxSection>

    <ScrollReveal direction="up" delay={0.1}>
      <TestimonialsSection />
    </ScrollReveal>

    <ScrollReveal>
      <GallerySection />
    </ScrollReveal>

    <ScrollReveal direction="up">
      <ContactSection />
    </ScrollReveal>

    <Footer />
  </div>
);

export default Index;
