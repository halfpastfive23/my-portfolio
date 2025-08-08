import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
