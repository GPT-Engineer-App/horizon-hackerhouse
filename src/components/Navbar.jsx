import React from 'react';
import { Link } from 'react-router-dom';
import cyberpunkIcon from '../../public/images/cyberpunk-icon.png';

const Navbar = () => {
  return (
    <nav className="bg-black text-cyan-400 p-4 flex justify-between">
      <div className="text-2xl flex items-center">
        <img src={cyberpunkIcon} alt="Cyberpunk Icon" className="w-8 h-8 mr-2" />
        Kotani Labs
      </div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/internship">Internship</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;