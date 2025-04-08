"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Lato } from "next/font/google";

interface NavItem {
  name: string;
  href: string;
}

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"], 
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname();
  
  const navigation: NavItem[] = [
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
    <div className={`w-full md:w-64 bg-white md:min-h-screen md:border-r border-gray-200 ${lato.className}`}>
      <div className="p-4 md:p-8">
        <Link href="/" className="text-xl">
          elizabeth donoway
        </Link>
        
        <nav className="mt-8 md:block">
          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`block text-sm ${pathname === item.href ? 'font-bold' : 'font-normal'} hover:text-gray-600`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="mt-4 flex space-x-4">
                <Link href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOAOcb0a27dcGZjv5oS4kvjQ_rZWlRpOuX1jzmkwbefPu8z8wug8ja6QLMNLZj8uaYLdAfHXpe_alK85drvjRg&user=--aukLAAAAAJ" aria-label="Google Scholar">
                <Image src="/google-scholar.svg" alt="Google Scholar" width={24} height={24} className="opacity-30 hover:opacity-90" />
                </Link>
              <Link href="https://github.com/edonoway" aria-label="GitHub">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className="opacity-30 hover:opacity-90" />
              </Link>
              <Link href="https://www.linkedin.com/in/elizabethdonoway" aria-label="LinkedIn">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="opacity-30 hover:opacity-90" />
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
