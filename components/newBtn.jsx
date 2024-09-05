'use client';

import { useRouter } from 'next/navigation'; // useRouter from next/navigation for app directory

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/new'); // Navigate to /new page
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-300"
    >
      New
    </button>
  );
};

export default Button;
