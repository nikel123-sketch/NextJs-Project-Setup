"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname == href;

  return (
    <div>
      <Link className={`${isActive? 'underline  font-bold text-amber-500':''}`} href={href}>{children}</Link>
    </div>
  );
};

export default NavLink;