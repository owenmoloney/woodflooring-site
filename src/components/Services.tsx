const Services = () => {
  return (
    <section className="py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {[
          { title: "Installation", desc: "High-quality hardwood floor installation for residential & commercial spaces." },
          { title: "Refinishing", desc: "Restore your floors with sanding, staining, and sealing to look brand new." },
          { title: "Repairs", desc: "Fix scratches, dents, and water damage professionally." },
        ].map((service) => (
          <div key={service.title} className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
