"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchArea() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (

    <form
      className='flex justify-between px-5 max-w-6xl mx-auto'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md placeholder-gray-200 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-gray-200 '
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}