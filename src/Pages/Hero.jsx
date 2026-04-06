// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import LightPillar from "../../src/Components/LightPillar/LightPillar";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// // import { Laptop } from "../../public/models/Laptop";
// import { PC } from "../../public/models/PC";
// // import ComputersCanvas from "../../src/Components/Computer/Computer";


// const Hero = () => {
//   const dotRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     gsap.to(dotRef.current, {
//       y: 24,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });
//   }, []);

//   return (
//     <section className="relative h-screen w-full mx-auto">

//       {/* Light Pillar */}
//       <div className="h-screen w-full relative p-10">
//         <LightPillar
//           topColor="#B71C1C"
//           bottomColor="#4DD0E1"
//           intensity={1}
//           rotationSpeed={0.3}
//           glowAmount={0.005}
//           pillarWidth={3}
//           pillarHeight={0.4}
//           noiseIntensity={0.1}
//           pillarRotation={20}
//           interactive={false}
//           mixBlendMode="normal"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="absolute inset-0 top-32 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#4DD0E1]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div className="font-black text-white text-6xl mt-2">
//           Hi, I'm <span className="text-[#4DD0E1]">Samir</span>
//           <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <div
//               ref={dotRef}
//               className="w-3 h-3 rounded-full bg-[#4DD0E1] mb-1"
//             />
//           </div>
//         </a>
//       </div>

//       {/* 3D Canvas */}
//       {/* 3D Canvas */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="h-screen w-full">
//           <Canvas
//             className="w-full h-full"
//             camera={{ position: [2, 3, 22], fov: 30 }}
//           >
//             <ambientLight intensity={1.3} />
//             <directionalLight position={[5, 5, 3]} intensity={2} />

//             <OrbitControls
//               enablePan={false}
//               enableRotate={true}
//               enableZoom={false}
//               target={[0, -1.5, -2]} />

//             <PC
//               scale={isMobile ? 0.75 : 0.95}
//               position={[0.9, -4, -2]}
//             />
//           </Canvas>
//         </div>
//       </div>



//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LightPillar from "../../src/Components/LightPillar/LightPillar";
import { Canvas } from "@react-three/fiber";
import { Final } from "../../public/models/Final";
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
          <Canvas camera={[2, 3, 18]}>
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
