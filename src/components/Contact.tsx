const Contact = () => {
  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        Contact Us
      </h2>
      <form className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-4 rounded-lg h-40 focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
        />
        <button className="bg-amber-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-amber-700 transition-all duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
