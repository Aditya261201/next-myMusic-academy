"use client";
import React ,{useState,FormEvent} from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
const page = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    };

    return (
        <div className='flex flex-col items-center justify-start'>
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            <h1 className='text-center text-7xl font-bold py-12 pt-36'>Contact Us</h1>
            <p className='text-center text-gray-500 w-1/2'>We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4 z-10">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    rows={5}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default page
