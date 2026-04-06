import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LightPillar from "../../src/Components/LightPillar/LightPillar";
import { Canvas } from "@react-three/fiber";
import { Final } from "../Components/hero/Final";
const Hero = () => {
  const textRef = useRef(null);
  const characterRef = useRef(null);
  const introRef = useRef(null)

  useEffect(() => {
    const letters = textRef.current.children;
    const tl = gsap.timeline();

    tl.fromTo(
      letters,
      { y: -180, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(2, 0.5)",
        stagger: 0.1,
      }
    );

    tl.fromTo(
      introRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    tl.fromTo(
      characterRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0">
          <LightPillar
            topColor="#B71C1C"
            bottomColor="#4DD0E1"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.005}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.1}
            pillarRotation={-30}
            interactive={false}
            mixBlendMode="normal"
          />
        </div>

        <div
          ref={introRef}
          className="absolute top-60 left-18 z-50"
        >
          <p className="text-2xl uppercase tracking-widest font-[myfont]">
            Hi, I’m Samir👋
          </p>
        </div>
        {/* Left line */}
        <div className="absolute left-6 flex items-center justify-start top-[30%]">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#4DD0E1]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
        </div>
        <div className="absolute inset-0  flex justify-center items-center pointer-events-none z-10 ">
          <h1
            ref={textRef}
            className="portfolio-text text-[20rem] font-extrabold -translate-y-24"
          >
            {"PORTFOLIO".split("").map((char, i) => (
              <span
                key={i}
                className="letter gradient-letter inline-block"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>


        {/* Character */}
        <div ref={characterRef} className="absolute inset-0 z-10">
          <Canvas camera={[3, 3, 18]}>
            <ambientLight />
            <directionalLight position={[-2, 0, 3]} intensity={2} />
            <directionalLight position={[2, 0, 3]} intensity={2} />
            <group>
              <Final scale={7} position={[0, -10, 0]} />
            </group>
          </Canvas>
        </div>


        <div 
        className="absolute bottom-20 left-44 z-20">
          <div className="w-[38px] h-[64px] rounded-full border-2 border-white/60 border-dotted flex items-start justify-center relative cursor-pointer">
            <span
              className="absolute top-5 text-white text-xl animate-bounce cursor-pointer">
              ↓
            </span> 

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
