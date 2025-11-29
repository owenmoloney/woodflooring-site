// src/components/Contact.tsx

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Get in Touch</h2>
      <form className="max-w-2xl mx-auto flex flex-col gap-6 px-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        ></textarea>
        <button
          type="submit"
          className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
