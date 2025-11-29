const Hero = () => {
  <div className="bg-black text-white text-sm py-2 px-6">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <span>123 Main St, New York, NY 10001</span>
    <span>(917) 681-2295</span>
  </div>
</div>
  return (
    <section className="h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
        Wood Flooring NYC
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-xl">
        Premium Hardwood Flooring Installation, Refinishing, and Repairs for Homes & Businesses.
      </p>
      <button className="bg-amber-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-amber-700 transition-all duration-300">
        Get a Free Quote
      </button>
    </section>
  );
};

export default Hero;
