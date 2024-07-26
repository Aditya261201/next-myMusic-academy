"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WavyBackground } from "@/components/ui/wavy-background";
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
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
