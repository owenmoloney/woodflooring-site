import React from "react";

const services = [
  { title: "Installation", desc: "High-quality hardwood & laminate installation." },
  { title: "Refinishing", desc: "Restore your floors to their original beauty." },
  { title: "Repair", desc: "Expert repair for scratches, dents, and water damage." },
  { title: "Luxury Vinyl Plank", desc: "Durable, stylish flooring solutions." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-amber-50">
      <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Services</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-amber-900 mb-2">{s.title}</h4>
            <p className="text-amber-800">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
