import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
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
    <div className=w-full md:w-64 bg-white md:min-h-screen md:border-r border-gray-200>
      <div className=p-4 md:p-8>
        <Link href=/>
          <span className=text-xl cursor-pointer>elizabeth donoway</span>
        </Link>
        
        <nav className=mt-8 md:block hidden>
          <ul className=space-y-4>
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
      </div>
    </div>
  );
};
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
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
    <div className=w-full md:w-64 bg-white md:min-h-screen md:border-r border-gray-200>
      <div className=p-4 md:p-8>
        <Link href=/>
          <span className=text-xl cursor-pointer>elizabeth donoway</span>
        </Link>
        
        <nav className=mt-8 md:block hidden>
          <ul className=space-y-4>
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
      </div>
    </div>
  );
};
