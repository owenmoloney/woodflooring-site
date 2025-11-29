// src/App.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
