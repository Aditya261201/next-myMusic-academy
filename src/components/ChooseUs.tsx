"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";


const ChooseUs = () => {

    const musicAcademyContent = [
        {
            title: "Music Marketing Data Bootcamp",
            description:
                "Unlock the power of music data! Our bootcamp dives deep into the role of data in digital music marketing. Whether you're an artist manager, marketer, or data analyst, this course equips you with practical skills.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    Music Marketing Data Bootcamp
                </div>
            ),
        },
        {
            title: "Real-time Insights",
            description:
                "Stay ahead of the beat! Our platform lets you track real-time changes—no more guessing which version is current. Say goodbye to version control chaos and embrace seamless updates.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    Music classes
                </div>
            ),
        },
        {
            title: "Harmonious Version Control",
            description:
                "Compose without interruptions! Our platform ensures you're always working on the freshest version of your project. No manual updates needed—just smooth collaboration.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                    Version control
                </div>
            ),
        },
        {
            title: "Never Miss a Beat",
            description:
                "Stay in the groove! Our platform keeps your content flowing. No more worries about running out of ideas—just creative harmony.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    Running out of content
                </div>
            ),
        },
    ];




    return (
        <div className="">
            <StickyScroll content={musicAcademyContent} />
        </div>
    )
}

export default ChooseUs
