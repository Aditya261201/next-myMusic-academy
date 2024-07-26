"use client";
import React from 'react'
import data from "@/data/musicCourses.json"
import { Button } from '@/components/ui/moving-border'
import Link from 'next/link'
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";



interface Course{
    id: Number,
    title: string,
    slug: string,
    description: string,
    price: Number,
    instructor: string,
    isFeatured: boolean,
}



const FeaturedCourses = () => {

    const featuredCourses = data.courses.filter((course:Course)=>course.isFeatured)

    return (
        <div className='bg-gray-900 p-10 pb-20'>
            <div className='h-fit'>
                <div className="text-center text-4xl font-bold text-red-700 text-opacity-80">FEATURED COURSES</div>
                <p className="text-center text-xl font-medium text-blue-400 text-opacity-80">Learn from the best teachers in the world</p>
            </div>





            <div className='cards mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featuredCourses.map((course:Course)=>{
                    return <div key={course.id.toString()} className='flex justify-center'>
                        <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm overflow-hidden h-full bg-white dark:bg-zinc-900">
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg sm:text-xl mt-4 mb-2 text-neutral-200'>{course.title}</p>
                                <p className='text-sm text-neutral-400 flex-grow'>{course.description}</p>
                                <Link href={`/courses/{$course.slug}`} className='border-white bg-white text-black py-1 px-2 rounded-xl m-2' >
                                checkout
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>;
})}
            </div>



            <div className='text-center mt-8'>
                <Link href={"/courses"}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Checkout our all courses
                </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
