import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div className=' flex justify-between items-center  bg-violet-950 p-3'>
            <h1 className='font-bold text-3xl'>Next.js</h1>
            <div className="flex gap-3">
                <Link href={'/'}>Home</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/about/tutorials'}>Tutorials</Link>
               
            </div>
        </div>
    );
};

export default Navber;