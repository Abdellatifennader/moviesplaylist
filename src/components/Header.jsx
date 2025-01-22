import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ToggleButton";

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
          <Link href={'/favorites'}>Favorites</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/about'}>About</Link>
        </li>
      
      </ul>
      <div className='flex items-center gap-4'>
       <ModeToggle/>
                <Link href={'/'} className='flex gap-1 items-center'>
               MoviesPlaylist
        </Link>
      </div>
    </div>
  );
}