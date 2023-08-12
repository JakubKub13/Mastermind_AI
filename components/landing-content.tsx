"use client";

import { Card, CardHeader, CardTitle, CardContent  } from "@/components/ui/card";

const testimonials = [
    {
        name: "John Doe",
        avatar: "J",
        title: "Software Engineer",
        description: "One of the best tools I've used in a while. "
    },
    {
        name: "Jakub Kubala",
        avatar: "J",
        title: "Software Engineer & Entrepreneur",
        description: "Proud of you guys! Keep up the good work. "
    },
    {
        name: "Boby Joe",
        avatar: "J",
        title: "Web Developer",
        description: "I've been using this tool for a while now and I'm really impressed. "
    },
    
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{testimonial.name}</p>
                                    <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {testimonial.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
};