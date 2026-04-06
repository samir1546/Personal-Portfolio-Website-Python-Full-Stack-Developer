import TitleHeader from '../Components/about/TitleHeader'
import image from "../assets/Front.png"
import image1 from "../assets/backend.png"
import image2 from "../assets/fullstack.png"
import image3 from "../assets/Last.png"
import ElectricBorder from '../Components/about/ElectricBorder '
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import ScrollFloat from '../Components/about/ScrollFloat'

const aboutCards = [
  { img: image, title: "FrontEnd Developer" },
  { img: image1, title: "Backend Developer" },
  { img: image2, title: "Database & ORM" },
  { img: image3, title: "Full-Stack Integration" },
];
gsap.registerPlugin(SplitText, ScrollTrigger)


const About = () => {
  const sectionRef = useRef(null);
  const cardref = useRef([]);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, {
      x: -90,
      opacity: 0,
    },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.25,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        }
      }
    )

  }, []);

  useEffect(() => {
    cardref.current.forEach((card) => {
      if (!card) return;

      gsap.set(card.querySelectorAll("img, h3"), {
        transformPerspective: 1000,
        transformOrigin: "center",
      });
    });
  }, []);


  const handleMouseMove = (e, index) => {
    const card = cardref.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 15;
    const rotateY = (x / (rect.width / 2)) * 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power3.out",
      transformPerspective: 800,
    });
  };


  const handleMouseLeave = (index) => {
    const card = cardref.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    })
  }


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-transparent">

      <div className='p-5'>
        <div className="mt-24 px-12">
          <h1 className="text-6xl font-bold gradient-title font-[myfont] "></h1>

        </div>
        <div className="p-14">
          <h1
            className="gradient-title  text-6xl font-bold gradient-title font-[myfont]">
            Overview.
          </h1>
        </div>
        <div className="flex items-center justify-center px-30">
          <ScrollFloat
            className="text-[40px] "
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top 80%'
            scrollEnd='top 20%'
            stagger={0.03}
            trigger={sectionRef}
          >
            I’m Samir Ansari, a passionate full-stack developer specializing in Python, Django, React, and modern web technologies. I build dynamic, scalable, and user-friendly applications, combining clean code with elegant UI. I enjoy learning new tools like AI and integrating them into practical projects. I thrive in collaborative environments and focus on delivering efficient solutions that solve real-world problems. Let’s create something amazing together!
          </ScrollFloat>
        </div>
        <div className="mt-36 flex flex-wrap items-center justify-center gap-16 perspective-[1000px] mb-5">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardref.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <ElectricBorder
                className="rounded-[24px]"
                color="#7df9ff"
                speed={1}
                chaos={0.6}
                thickness={2}
                style={{ borderRadius: 24 }}
              >
                <div className="p-[2px] rounded-[24px] shadow-card">
                  <div
                    style={{ transformStyle: "preserve-3d" }}
                    className="h-[270px] w-[270px] rounded-[22px] flex flex-col items-center justify-center gap-6"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-15 h-15 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center leading-tight">
                      {card.title.split(" ").map((word, i) => (
                        <span key={i}>
                          {word} <br />
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
