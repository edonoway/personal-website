"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"], 
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  
  const navigation = [
    // { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'projects', href: '/projects' },
    { name: 'publications', href: '/publications' },
    { name: 'conferences', href: '/conferences' },
    { name: 'outreach', href: '/outreach' },
    { name: 'cv', href: '/cv' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <nav className={`py-4 px-8 border-b border-gray-200 ${lato.className}`}>
      <Link href="/" className="text-xl mr-12">
        elizabeth donoway
      </Link>
      <ul className="inline-flex space-x-6">
        {navigation.map((item) => (
          <li key={item.name}>
        <Link 
          href={item.href}
          className={`${pathname === item.href ? 'font-bold' : 'font-normal'} hover:text-gray-600`}
        >
          {item.name}
        </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
