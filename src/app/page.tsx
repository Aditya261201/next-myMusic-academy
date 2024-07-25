import ChooseUs from "@/components/ChooseUs";
import ConnectInstructors from "@/components/ConnectInstructors";
import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className= "bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <ChooseUs />
      <Testimonials />
      <UpcomingWebinars />
      <ConnectInstructors />
    </main>
  );
}