"use client"
import Link from 'next/link';
import React from 'react';
import NavLink from '../ActiveClass/NavLink';
import { usePathname } from 'next/navigation';

const Navber = () => {
    const pathname=usePathname();
    if(pathname.startsWith('/dashbord')){
        return null;
    }
    return (
        <div className=' flex justify-between items-center  bg-violet-950 p-3 flex-wrap'>
            <h1 className='font-bold text-3xl'>Next.js</h1>
            <div className="flex gap-3">
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/login'}>Login</NavLink>
                <NavLink href={'/register'}>Register</NavLink>
                <NavLink href={'/about'}>About</NavLink>
                <NavLink href={'/about/tutorials'}>Tutorials</NavLink>
                <NavLink href={'/storis'}>Storis</NavLink>
               
            </div>
        </div>
    );
};

export default Navber;