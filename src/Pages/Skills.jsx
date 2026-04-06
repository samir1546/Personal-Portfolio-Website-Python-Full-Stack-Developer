import React, { useEffect, useRef } from "react";
import BallCanvas from "../Components/Canvas/Ball";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import img1 from "../assets/tech/H.png"

import img2 from "../assets/tech/C.png"

import img3 from "../assets/tech/J.png"

import img4 from "../assets/tech/TY.png"
import img5 from "../assets/tech/R.png"
import img6 from '../assets/tech/N.png'
import img7 from "../assets/tech/RE.png"
import img8 from "../assets/tech/T.png"
import img9 from "../assets/tech/PY.png"
import img10 from "../assets/tech/D.png"
import img11 from "../assets/tech/MY.png"
import img12 from "../assets/tech/P.png"
import img13 from "../assets/tech/M.png"

gsap.registerPlugin(ScrollTrigger);

const skillsFrontEnd = [
    { name: "HTML", icon: img1 },
    { name: "CSS", icon: img2 },
    { name: "JavaScript", icon: img3 },
    { name: "Typescript", icon: img4 },
    { name: "React", icon: img5 },
    { name: "NextJs", icon: img6 },
    { name: "Redux", icon: img7 },
    { name: "Tailwind", icon: img8 },

];

const SkillsBackEnd = [
    { name: "Python", icon: img9 },
    { name: "Django", icon: img10 },
    { name: "MYSQL", icon: img11 },
    { name: "postgreesql", icon: img12 },
    { name: "MongoDB", icon: img13 },
]




const Skills = () => {
    const Sectionref = useRef(null)

    useEffect(() => {

        gsap.fromTo(Sectionref.current, {
            x: -90,
            opacity: 0,
        },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                delay: 0.2,
                scrollTrigger: {
                    trigger: Sectionref.current,
                    start: "top 70%",
                    toggleActions: "play reverse play reverse",
                    invalidateOnRefresh: true
                }

            }
        )

    }, [])

    return (
        <section
            ref={Sectionref}
            className="relative w-full px-6 py-16 bg-transparent">

            <div className=" flex items-center justify-start p-20 mt-20">
                <h1 className="text-6xl font-bold gradient-title font-[myfont] ">MY SKILLS</h1>
            </div>

            <div className="p-10">
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {skillsFrontEnd.map((skill) => (
                        <div key={skill.name} className="w-32 h-32">
                            <BallCanvas icon={skill.icon} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
                    {SkillsBackEnd.map((skill1) => (
                        <div key={skill1.name} className="w-32 h-32">
                            <BallCanvas icon={skill1.icon} />
                        </div>
                    ))}
                </div>
            </div>



        </section>
    );
};

export default Skills;


