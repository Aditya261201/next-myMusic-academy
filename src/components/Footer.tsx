import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-gray-500 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8'>
                <div>
                    <h3 className='text-white opacity-70 hover:opacity-100'>About Us</h3>
                    <p>Music school is a premier institution dedicated to teaching the art and science of music.</p>
                </div>
                <div>
                    <h3 className='text-white opacity-70 hover:opacity-100'>Quick Links</h3>
                    <ul>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/"}>About Us</Link></li>
                        <li><Link href={"/"}>Courses</Link></li>
                        <li><Link href={"/"}>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-white opacity-70 hover:opacity-100'>Follow Us</h3>
                    <ul>
                        <li><Link href={"/"}>Facebook</Link></li>
                        <li><Link href={"/"}>Twitter</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-white opacity-70 hover:opacity-100'>Contact Us</h3>
                    <ul>
                        <li>Delhi India , 110059</li>
                        <li>musicacad@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-gray-500 pt-6'><p>ⓒ2024 Music Schoool. All rights reserved.</p></div>
        </footer>
    )
}

export default Footer
