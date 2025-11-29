// src/App.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 font-sans">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Woodflooring NYC
          </span>
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
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
