"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonials = () => {

    const musicTestimonials = [
        {
            "quote": "The instructors at this music academy are incredibly talented and patient. My skills have improved tremendously in just a few months!",
            "name": "Emily Johnson",
            "title": "Student"
        },
        {
            "quote": "The personalized attention and customized lesson plans make all the difference. This is the best place to learn music!",
            "name": "Michael Lee",
            "title": "Parent"
        },
        {
            "quote": "I've attended several music schools, but this academy stands out for its dedication to student success and professional approach.",
            "name": "Sarah Williams",
            "title": "Advanced Student"
        },
        {
            "quote": "The community here is amazing. Everyone is supportive and encouraging, making it a fantastic environment for learning.",
            "name": "David Smith",
            "title": "Beginner Student"
        },
        {
            "quote": "The variety of classes and the expertise of the teachers make this academy a top choice for anyone serious about music.",
            "name": "Olivia Brown",
            "title": "Professional Musician"
        },
        {
            "quote": "As a parent, I am thrilled with the progress my child has made. The academy's approach to teaching is both effective and enjoyable.",
            "name": "Sophia Martinez",
            "title": "Parent"
        },
        {
            "quote": "The performances and recitals organized by the academy provide great opportunities for students to showcase their talent.",
            "name": "James Wilson",
            "title": "Intermediate Student"
        },
        {
            "quote": "The supportive and knowledgeable instructors have helped me achieve my musical goals. I highly recommend this academy to anyone!",
            "name": "Isabella Davis",
            "title": "Student"
        }
    ];



    return (
        <div className="min-h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center flex-col">
            <h2 className="text-4xl font-bold p-4 pb-8 text-white opacity-70 text-center">Hear About our success !!!</h2>
            <InfiniteMovingCards
                items={musicTestimonials}
                direction="right"
                speed="slow"
            />
        </div>
    )
}

export default Testimonials
