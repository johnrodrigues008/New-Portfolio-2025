import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      
      <Footer />
      
      <main className="flex flex-col lg:flex-row w-full flex-1 lg:justify-center lg:items-center lg:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <Hero />
        <Navbar />
      </main>

    </div>
  );
}
