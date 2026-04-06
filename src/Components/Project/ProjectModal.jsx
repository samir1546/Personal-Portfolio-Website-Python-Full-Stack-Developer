import { FaTimes, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ProjectTech from "../Project/index.js";
import ElectricBorder from "../about/ElectricBorder .jsx";

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);
    const cardref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.9, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "power3.out" }
        );

        gsap.fromTo(
            cardref.current,
            { y: -120, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.2,
                ease: "bounce.out",
            }
        );
    }, []);

    if (!project) return null;

    return (
        <div
            ref={cardref}
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/60"
        >
            <div className="p-7 rounded-3xl">
                <div
                    ref={modalRef}
                    className="relative w-[580px] max-h-[50vh] rounded-2xl border border-white/10 bg-[#0b0b0b] overflow-hidden flex flex-col"
                >
                    <div className="relative flex items-center justify-center bg-black">
                        <img
                            src={project.img}
                            alt=""
                            className="w-full max-h-[320px] object-contain"
                        />
                        <a
                            href="#"
                            target="_blank"
                            className="absolute top-4 left-4 bg-black/70 p-3 rounded-full border hover:scale-110 transition"
                        >
                            <FaGithub size={18} />
                        </a>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-black/70 p-3 rounded-full hover:rotate-90 transition"
                        >
                            <FaTimes size={16} />
                        </button>
                    </div>

                    <div className="p-6 max-h-[350px] overflow-y-auto hide-scrollbar">
                        <h2 className="text-3xl font-[myfont] mb-3 leading-tight">
                            {project.title}
                        </h2>

                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-6">
                            {project.description}
                        </p>


                    </div>

                    <div className="p-5 border-t border-white/10 flex items-start justify-between gap-4">
                        <div className="flex flex-wrap gap-2 text-xs text-sand max-w-[75%]">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 border border-white/20 rounded-full cursor-pointer hover:bg-white/10 transition"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <button
                            className="relative overflow-hidden px-5 py-2 text-sm border border-white rounded-full flex items-center gap-2 text-white group whitespace-nowrap shrink-0 self-center"
                        >
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                                View Project
                                <FaArrowUpRightFromSquare className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
