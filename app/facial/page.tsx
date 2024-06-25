"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Confirm = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (showVideo && videoRef.current) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    const video = videoRef.current;
                    if (video) {
                        video.srcObject = stream;
                        video.play();
                    }
                })
                .catch((err) => {
                    console.error("Error accessing the camera: ", err);
                });
        }
    }, [showVideo]);

    return (
        <div className="flex flex-col text-center m-10 items-center gap-5 shadow-xl p-5">
            <img src="/Logo2.png" className='size-10' alt="Logo"/>
            {!showVideo ? (
                <img 
                    src="/FACE.png" 
                    className='cursor-pointer'
                    onClick={() => setShowVideo(true)}
                    alt="Face"
                />
            ) : (
                <video ref={videoRef} className='w-60 h-60' />
            )}
            <Link href="/dashboard" className="bg-blue-500 text-white py-2 px-4 rounded-full w-60">
                Login
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
