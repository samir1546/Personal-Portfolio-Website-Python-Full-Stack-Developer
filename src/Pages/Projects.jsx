import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import ProjectModal from "../Components/Project/ProjectModal";
import ProjectTech from "../Components/Project/index.js";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentImg, setCurrentImg] = useState(ProjectTech[0].img);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (img) => {
    setCurrentImg(img);
    gsap.to(imgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (e) => {
    gsap.to(imgRef.current, {
      x: e.clientX + 20,
      y: e.clientY - 20,
      duration: 1.5,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { x: -90, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full px-6 bg-transparent">
      {/* Hover Preview Image */}
      <img
        ref={imgRef}
        src={currentImg}
        alt=""
        className="fixed top-0 left-0 w-96 h-56 object-cover rounded-xl pointer-events-none opacity-0 scale-75 z-50"
      />

      {/* Section Header */}
      <div className="flex flex-col items-start p-20 mt-20">
        <p className="pb-5 text-[20px]">MY WORK</p>
        <h1 className="text-6xl font-bold gradient-title font-[myfont]">
          MY PROJECTS
        </h1>
      </div>

      {/* Project List */}
      <div className="h-full w-full mt-5 p-14 flex flex-col gap-8">
        {ProjectTech.map((project, idx) => (
          <div
            key={idx}
            className="gradient-top-border w-full h-[180px] flex items-center px-10"
            onMouseEnter={() => handleMouseEnter(project.img)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-2xl font-[myfont]">{project.title}</h1>
                <div className="flex gap-3 mt-2 text-sm text-sand opacity-80">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="relative z-10 text-white font-medium cursor-pointer overflow-hidden"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      x: 5,
                      duration: 0.3,
                      ease: "power3.out",
                    });
                    gsap.to(e.currentTarget.querySelector("span"), {
                      width: "100%",
                      duration: 0.3,
                      ease: "power3.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { x: 0, duration: 0.3, ease: "power3.out" });
                    gsap.to(e.currentTarget.querySelector("span"), {
                      width: 0,
                      duration: 0.3,
                      ease: "power3.out",
                    });
                  }}
                >
                  Read More
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white block"></span>
                </button>
                <FaLongArrowAltRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
