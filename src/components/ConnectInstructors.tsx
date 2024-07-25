"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WavyBackground } from "@/components/ui/wavy-background";
import avtr from "@/data/avtr.jpg"
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: avtr,
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:avtr,
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:avtr,
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:avtr,
    },
]


const ConnectInstructors = () => {
    return (
        <div className="relative overflow-hidden flex flex-col items-center jusce">
            hello
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                <h2 className="text-center text-4xl p-10 text-red-400">Connect your Instructors</h2>
                <div className="flex py-10 flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default ConnectInstructors
