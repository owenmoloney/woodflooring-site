// src/components/Hero.tsx

const Hero = () => {
  return (
    <section className="relative bg-gray-100 min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Premium Wood Flooring in NYC
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          Installation, refinishing, and repair services for your home or business.
        </p>
        <a
          href="#contact"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
