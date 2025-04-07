import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  
  const navigation = [
    { name: 'about', href: '/' },
    { name: 'projects', href: '/projects' },
    { name: 'publications', href: '/publications' },
    { name: 'conferences', href: '/conferences' },
    { name: 'outreach', href: '/outreach' },
    { name: 'cv', href: '/cv' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <nav className=py-4 px-8 border-b border-gray-200>
      <Link href=/>
        <span className=text-xl mr-12 cursor-pointer>elizabeth donoway</span>
      </Link>
      <ul className=inline-flex space-x-6>
        {navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <span className={}>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
