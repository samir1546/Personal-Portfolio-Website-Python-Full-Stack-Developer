// import { ScrollTrigger } from "gsap/all";
// import { useForm } from "react-hook-form";
// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";
// import EarthCanvas from "../Components/ContactForm/EarthCanvas";

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const headRef = useRef(null);
//   // const formRef = useRef(null);
//   const animRef = useRef(null);
//   const formRef = useRef(null);
//   const btnRef = useRef(null);
//   const fieldsRef = useRef([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Heading animation
//     gsap.fromTo(
//       headRef.current,
//       { x: -90, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: headRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     // Form animation
//     gsap.fromTo(
//       formRef.current,
//       { x: -60, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     // Earth animation
//     gsap.fromTo(
//       animRef.current,
//       { scale: 0.6, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.4,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: animRef.current,
//           start: "top 80%",
//         },
//       }
//     );
//   }, []);


//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   // 🔹 Entry Animation
//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(formRef.current, {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       ease: "power4.out",
//     })
//       .from(
//         fieldsRef.current,
//         {
//           y: 40,
//           opacity: 0,
//           stagger: 0.2,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       )
//       .from(
//         btnRef.current,
//         {
//           scale: 0.8,
//           opacity: 0,
//           duration: 0.6,
//           ease: "back.out(1.7)",
//         },
//         "-=0.3"
//       );
//   }, []);

//   // 🔹 Submit Handler
//   const onSubmit = (data) => {
//     setLoading(true);

//     gsap.to(btnRef.current, {
//       scale: 0.9,
//       duration: 0.15,
//       yoyo: true,
//       repeat: 1,
//     });

//     setTimeout(() => {
//       console.log("Contact Data:", data);
//       setLoading(false);
//       reset();
//       alert("🚀 Message Sent Successfully!");
//     }, 1500);
//   };

//   return (
//     <section className="relative z-0 min-h-screen w-full h-screen overflow-hidden bg-gray-900">
//       {/* Heading */}
//       <div ref={headRef} className="relative z-10 flex items-start p-10 md:p-20 mt-6">
//         <h1 className="text-5xl md:text-6xl font-bold gradient-title font-[myfont] text-white">
//           Contact Us
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex justify-around items-center gap-10 w-full border">

//         <div className="w-full flex justify-center items-center ">
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit(onSubmit)}
//             className="w-full max-w-xl bg-[#3d71ec] border border-white/10 backdrop-blur-xl rounded-2xl p-10 flex flex-col gap-8 shadow-2xl"
//           >
//             <h2 className="text-3xl font-bold text-white text-center">
//               Let’s Connect ✨
//             </h2>

//             {/* Name */}
//             <div ref={(el) => (fieldsRef.current[0] = el)} className="flex flex-col">
//               <label className="text-white mb-2">Your Name</label>
//               <input
//                 {...register("name", { required: "Name is required" })}
//                 placeholder="Enter your name"
//                 className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-cyan-400 transition"
//               />
//               {errors.name && (
//                 <span className="text-red-400 text-sm mt-1">
//                   {errors.name.message}
//                 </span>
//               )}
//             </div>

//             {/* Email */}
//             <div ref={(el) => (fieldsRef.current[1] = el)} className="flex flex-col">
//               <label className="text-white mb-2">Email Address</label>
//               <input
//                 type="email"
//                 {...register("email", { required: "Email is required" })}
//                 placeholder="you@example.com"
//                 className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-purple-400 transition"
//               />
//               {errors.email && (
//                 <span className="text-red-400 text-sm mt-1">
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>

//             {/* Message */}
//             <div ref={(el) => (fieldsRef.current[2] = el)} className="flex flex-col">
//               <label className="text-white mb-2">Message</label>
//               <textarea
//                 rows={5}
//                 {...register("message", { required: "Message is required" })}
//                 placeholder="Write your message..."
//                 className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-pink-400 transition resize-none"
//               />
//               {errors.message && (
//                 <span className="text-red-400 text-sm mt-1">
//                   {errors.message.message}
//                 </span>
//               )}
//             </div>

//             {/* Button */}
//             <button
//               ref={btnRef}
//               type="submit"
//               disabled={loading}
//               className="relative overflow-hidden px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold tracking-wide shadow-lg hover:scale-105 transition"
//             >
//               {loading ? "Sending..." : "Send Message 🚀"}
//             </button>
//           </form>

//         </div>
//         <div
//           ref={animRef}
//           className="w-full lg:w-1/2 h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
//         >
//           <EarthCanvas />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { ScrollTrigger } from "gsap/all";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import EarthCanvas from "../Components/ContactForm/EarthCanvas";
// import Particles from "../Components/Particles";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headRef = useRef(null);
  const animRef = useRef(null);
  const formRef = useRef(null);
  const btnRef = useRef(null);
  const fieldsRef = useRef([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headRef.current,
      { x: -90, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
        },
      }
    );

    // Form animation
    gsap.fromTo(
      formRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );

    // Earth animation
    gsap.fromTo(
      animRef.current,
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: animRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Contact Data:", data);
      setLoading(false);
      reset();
      alert("🚀 Message Sent Successfully!");
    }, 1500);
  };

  return (
    <section className="relative z-0 w-full h-screen px-6 md:px-20 bg-transparent">

      <div className="mt-20">
        <div
          ref={headRef}
          className="relative z-10 w-full flex justify-start items-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-title font-[myfont] text-white text-center">
            Contact Us
          </h1>
        </div>

        <div className="flex flex-col justify-start items-center overflow-hidden w-full  mt-20">

          <div className="flex w-full h-full max-w-7xl justify-between items-center gap-16 ">
            <div ref={formRef} className="flex-1 flex justify-start">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md border border-dashed border-white/50 backdrop-blur-xl rounded-2xl p-8 flex flex-col gap-6 shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-center gradient-title">Let’s Connect ✨</h2>

                {/* Name */}
                <div ref={(el) => (fieldsRef.current[0] = el)} className="flex flex-col">
                  <label className="text-white mb-1">Your Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-cyan-400 transition"
                  />
                  {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div ref={(el) => (fieldsRef.current[1] = el)} className="flex flex-col">
                  <label className="text-white mb-1">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="you@example.com"
                    className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-purple-400 transition"
                  />
                  {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
                </div>

                {/* Message */}
                <div ref={(el) => (fieldsRef.current[2] = el)} className="flex flex-col">
                  <label className="text-white mb-1">Message</label>
                  <textarea
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    placeholder="Write your message..."
                    className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-pink-400 transition resize-none"
                  />
                  {errors.message && <span className="text-red-400 text-sm mt-1">{errors.message.message}</span>}
                </div>

                {/* Button */}
                <button
                  ref={btnRef}
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-xl border border-dashed gradient-title  font-bold tracking-wide shadow-lg hover:scale-105 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div ref={animRef} className="flex-1 h-[80%] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
