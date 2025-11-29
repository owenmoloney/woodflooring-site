// src/App.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Top black bar with address and phone */}
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <span>123 Main St, NYC</span>
          <span>(555) 123-4567</span>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <Hero />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
