// src/App.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

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
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Woodflooring NYC</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-amber-600">
              Services
            </a>
            <a href="#contact" className="hover:text-amber-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="mt-16 border-t border-gray-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Woodflooring NYC. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
