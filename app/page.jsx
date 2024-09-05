"use client";

import Button from '@/components/btn';
import Navbar from '@/components/nav'

import { useState } from "react";
import { useRouter } from "next/navigation";

const home = () => {

  const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleClick = () => {
        router.push('/questions');
    };

  return (
    <div>

      <Navbar/>
      <main className="flex flex-col items-center justify-between p-24">
        <div className='flex flex-row item-center justify-between'>
          <label htmlFor="inputField" className="block text-lg font-semibold mb-2 ">
           Take test
          </label>
          <br/>
          <button onClick={handleClick} className='bg-slate-800 text-white-100 hover:text-gray-500 block text-lg font-semibold mb-2 '>Now!</button>
        </div>
        
      </main>
    </div>
    
  );
};

export default home;