
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-50 h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-5xl font-bold text-amber-900 mb-6">Premium Wood Flooring Services</h2>
      <p className="text-xl text-amber-800 mb-8 max-w-xl">
        From installation to refinishing, we craft beautiful wood floors with precision and care.
      </p>
      <a href="#contact" className="bg-amber-900 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-700 transition">
        Get a Free Quote
      </a>
    </section>
  );
}
