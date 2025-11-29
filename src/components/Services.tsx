// src/components/Services.tsx

const services = [
  { title: "Installation", description: "Expert installation for hardwood & laminate floors." },
  { title: "Refinishing", description: "Bring your old floors back to life with professional refinishing." },
  { title: "Repair", description: "Fix scratches, dents, and damaged sections with precision." },
];

const Services = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {services.map((service) => (
          <div key={service.title} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
