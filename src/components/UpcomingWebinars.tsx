"use client";
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";



const UpcomingWebinars = () => {


    const webinars = [
        {
            "title": "Mastering Piano Techniques",
            "description": "A comprehensive webinar on advanced piano techniques for intermediate to advanced players.",
            "link": "https://yourmusicacademy.com/webinars/mastering-piano-techniques"
        },
        {
            "title": "Vocal Training for Beginners",
            "description": "An introductory webinar focused on vocal techniques and exercises for beginners.",
            "link": "https://yourmusicacademy.com/webinars/vocal-training-for-beginners"
        },
        {
            "title": "Guitar Chords and Progressions",
            "description": "Learn the essential chords and progressions to enhance your guitar playing skills.",
            "link": "https://yourmusicacademy.com/webinars/guitar-chords-and-progressions"
        },
        {
            "title": "Music Theory 101",
            "description": "A foundational webinar on the basics of music theory, including scales, chords, and rhythms.",
            "link": "https://yourmusicacademy.com/webinars/music-theory-101"
        },
        {
            "title": "Jazz Improvisation",
            "description": "Explore the art of jazz improvisation with tips and techniques from professional musicians.",
            "link": "https://yourmusicacademy.com/webinars/jazz-improvisation"
        },
        {
            "title": "Songwriting Secrets",
            "description": "Discover the secrets to writing compelling and memorable songs in this engaging webinar.",
            "link": "https://yourmusicacademy.com/webinars/songwriting-secrets"
        }
    ]





    return (
        <div className='p-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <p className='text-center font-semibold text-purple-200'>FEATURED WEBINARS</p>
                <p className='mt-10 font-semibold text-purple-400 text-center text-4xl'>Enhance Your Musical Journey :)</p>
            </div>

            {/* cards  */}
            <div className='mt-10'>
                <HoverEffect items={webinars} />
            </div>

            <div className='mt-10 text-center'>
                <Link href={"/"} className='bg-white text-black p-2 rounded-md font-semibold'>View all webinars</Link>
            </div>
        </div>
    )
}

export default UpcomingWebinars
