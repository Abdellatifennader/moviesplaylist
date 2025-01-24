"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const genre = usePathname().split('/')[2];
  return (
    <div>
      <Link
        className={` font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 rounded-lg'
            : ''
        }`}
        href={`/top/${param}`}
      >
         {title}
      </Link>
    </div>
  );
}