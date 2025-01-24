import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto '>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={'/sign-in'}>Sign in</Link>
        </SignedOut>
        <li className='hidden sm:block'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/moviesList'}>My List</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/about'}>About</Link>
        </li>
      
      </ul>
      <div className='flex items-center gap-4'>
     
                <Link href={'/'} className='flex gap-1 items-center'>
            <p className="font-bold "><span className=" sm:text-lg text-xl">Movies</span> <span className="text-cyan-800 text-2xl sm:text-xl">Watcher</span></p>
        </Link>
      </div>
    </div>
  );
}