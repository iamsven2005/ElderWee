"use client";
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Confirm = () => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const router = useRouter();

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value) {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleConfirm = () => {
        alert("Entered OTP is " + otp.join(""));
        router.push('/password');
    };

    return (
        <div className="flex flex-col text-center m-10 items-center">
            <img src="/Logo2.png"className='size-10'/>
            <p>
                Code sent to your number
            </p>
            <p className="text-blue-700 cursor-pointer">
                Resend code
            </p>
            <div className="flex justify-center mt-4">
                {otp.map((data, index) => {
                    return (
                        <Input
                            className="m-1 border h-10 w-16 text-center form-control rounded"
                            type="number"
                            name="otp"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    );
                })}
    
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-60" onClick={handleConfirm}>
                    Login
            </button>
            <Link href={`/another`}>
                Try another way
            </Link>
            
        </div>
    );
}

export default Confirm;
