
export default function Navbar() {
  return (
    <nav className="bg-amber-50 shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-amber-900">WoodCraft Flooring</h1>
      <ul className="flex space-x-6 text-amber-800 font-medium">
        <li><a href="#services" className="hover:text-amber-600">Services</a></li>
        <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
      </ul>
    </nav>
  );
}
