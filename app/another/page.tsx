"use client";
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Confirm = () => {
    return (
        <div className="flex flex-col text-center m-10 items-center gap-5 shadow-xl p-5">
            <img src="/Logo2.png"className='size-10'/>
            
            <Link href="/signup"className="bg-blue-500 text-white py-2 px-4 rounded-full w-60">
                    Send 6-digit PIN
            </Link>
            <Link href="/facial"className="bg-blue-500 text-white py-2 px-4 rounded-full w-60">
                Use Facial Recognition
            </Link>
            <p className='m-5'>
                or
            </p>
            <p className='text-blue-500 text-xs'>
                Logout or Retry
            </p>
            
        </div>
    );
}

export default Confirm;
