"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/nav";
import Tests from "@/components/testList";
import { Router } from "next/router";
const Load = () => {

  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div>
            <Tests />
      </div>
    </div>
  );
};

export default Load;