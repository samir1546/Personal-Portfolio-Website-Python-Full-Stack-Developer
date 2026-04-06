import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";

const ContactForm = () => {
    const formRef = useRef(null);
    const btnRef = useRef(null);
    const fieldsRef = useRef([]);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // 🔹 Entry Animation
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(formRef.current, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        })
            .from(
                fieldsRef.current,
                {
                    y: 40,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            )
            .from(
                btnRef.current,
                {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
                "-=0.3"
            );
    }, []);

    // 🔹 Submit Handler
    const onSubmit = (data) => {
        setLoading(true);

        gsap.to(btnRef.current, {
            scale: 0.9,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
        });

        setTimeout(() => {
            console.log("Contact Data:", data);
            setLoading(false);
            reset();
            alert("🚀 Message Sent Successfully!");
        }, 1500);
    };

    return (
        <div className="w-full flex justify-center items-center py-20">
            <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-xl bg-[#3d71ec] border border-white/10 backdrop-blur-xl rounded-2xl p-10 flex flex-col gap-8 shadow-2xl"
            >
                <h2 className="text-3xl font-bold text-white text-center">
                    Let’s Connect ✨
                </h2>

                {/* Name */}
                <div ref={(el) => (fieldsRef.current[0] = el)} className="flex flex-col">
                    <label className="text-white mb-2">Your Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Enter your name"
                        className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-cyan-400 transition"
                    />
                    {errors.name && (
                        <span className="text-red-400 text-sm mt-1">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div ref={(el) => (fieldsRef.current[1] = el)} className="flex flex-col">
                    <label className="text-white mb-2">Email Address</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="you@example.com"
                        className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-purple-400 transition"
                    />
                    {errors.email && (
                        <span className="text-red-400 text-sm mt-1">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Message */}
                <div ref={(el) => (fieldsRef.current[2] = el)} className="flex flex-col">
                    <label className="text-white mb-2">Message</label>
                    <textarea
                        rows={5}
                        {...register("message", { required: "Message is required" })}
                        placeholder="Write your message..."
                        className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-pink-400 transition resize-none"
                    />
                    {errors.message && (
                        <span className="text-red-400 text-sm mt-1">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                {/* Button */}
                <button
                    ref={btnRef}
                    type="submit"
                    disabled={loading}
                    className="relative overflow-hidden px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold tracking-wide shadow-lg hover:scale-105 transition"
                >
                    {loading ? "Sending..." : "Send Message 🚀"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
