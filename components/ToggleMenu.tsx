"use client"
import Sidebar from '../components/Sidebar';
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 bg-white text-black">
        <h1 className="text-lg font-bold"></h1>
        <button 
        onClick={toggleMenu} 
        aria-label="Toggle Menu" 
        className="self-start"
        >
        <FiMenu size={24} />
        </button>
        </div>
        {isOpen && (
          <div className="mobile-menu absolute top-0 left-0 w-full h-full bg-white z-50">
            <div className="p-4">
              <button
                onClick={toggleMenu}
                className="text-black text-lg mb-4"
                aria-label="Close Menu"
              >
                Close
              </button>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    );
  }

export default MobileMenu;