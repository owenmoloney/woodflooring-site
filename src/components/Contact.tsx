
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-100">
      <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">Contact Us</h3>
      <form className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="border border-amber-300 rounded p-3" />
        <input type="email" placeholder="Email" className="border border-amber-300 rounded p-3" />
        <input type="text" placeholder="Phone" className="border border-amber-300 rounded p-3" />
        <textarea placeholder="Message" className="border border-amber-300 rounded p-3" rows={4}></textarea>
        <button type="submit" className="bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
