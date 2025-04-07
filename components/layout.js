import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className=flex flex-col md:flex-row min-h-screen>
      <Sidebar />
      <div className=flex-1>
        <div className=hidden md:block>
          <Navbar />
        </div>
        <main className=p-4 md:p-8>{children}</main>
      </div>
    </div>
  );
};
