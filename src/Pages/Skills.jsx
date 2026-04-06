import React, { useEffect, useRef } from "react";
import TitleHeader from "../Components/about/TitleHeader";
import BallCanvas from "../Components/Canvas/Ball";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import img1 from "../assets/tech/html.png"
import img2 from "../assets/tech/css.png"
import img3 from "../assets/tech/javascript.png"
import img4 from "../assets/tech/typescript.png"
import img5 from "../assets/tech/reactjs.png"
import img6 from '../assets/tech/Nextjs.png'
import img7 from "../assets/tech/redux.png"
import img8 from "../assets/tech/tailwind.png"


import img9 from "../assets/tech/python.png"
import img10 from "../assets/tech/Django.png"
import img11 from "../assets/tech/Database.png"
import img12 from "../assets/tech/mysql.png"
import img13 from "../assets/tech/PostgresSQL.png"
import img14 from "../assets/tech/mongodb.png"


import img15 from "../assets/tech/postman.png"
import img16 from "../assets/tech/git.png"
import img17 from "../assets/tech/github.png"
import img18 from "../assets/tech/VsCode.png"

gsap.registerPlugin(ScrollTrigger);

const skillsFrontEnd = [
    { name: "HTML", icon: img1 },
    { name: "CSS", icon: img2 },
    { name: "JavaScript", icon: img3 },
    { name: "React", icon: img4 },
    { name: "Typescript", icon: img5 },
    { name: "NextJs", icon: img6 },
    { name: "Redux", icon: img7 },
    { name: "Tailwind", icon: img8 },

];

const SkillsBackEnd = [
    { name: "Python", icon: img9 },
    { name: "Django", icon: img10 },
    // { name: "Database", icon: img11 },
    { name: "MYSQL", icon: img12 },
    { name: "postgreesql", icon: img13 },
    { name: "MongoDB", icon: img14 },
]

// const Tools = [
//     { name: "Postman", icon: img15 },
//     { name: "Git", icon: img16 },
//     { name: "Github", icon: img17 },
//     { name: "VsCode", icon: img18 },
// ]




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


