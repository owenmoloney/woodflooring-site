import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} WoodCraft Flooring. All rights reserved.</p>
    </footer>
  );
}
