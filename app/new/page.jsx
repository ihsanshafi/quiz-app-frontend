"use client";

import questionEntry from "@/components/dataEntry"
import Button from "@/components/btn";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const New = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

  return (
    <div>
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
                <Button onClick={handleClick}>Back</Button>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <questionEntry/>
            <div className="p-4">
      <label htmlFor="inputField" className="block text-lg font-semibold mb-2">
        Enter question:
      </label>
      <input
        type="text"
        id="inputField"
        className="p-2 border rounded w-full text-black"
        placeholder="Type something..."
      />
      
    </div>
            <Button>Add</Button>
        </main>
        
    </div>
  );
};

export default New;