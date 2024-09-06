
"use client";

import Link from 'next/link';
import { useState } from 'react';
import Button from './newBtn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-00 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">Quizapp</Link>
        </div>
        
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="text-white md:flex md:space-x-6 space-y-2 md:space-y-0">
            
            <li>
              <Button/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
