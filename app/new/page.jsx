"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/nav";
import QuestionEntry from '@/components/dataEntry';

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
        <div>
          <Navbar />
        </div>
        <div>
        <QuestionEntry />
      </div>
    </div>
  );
};

export default New;