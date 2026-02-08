import { MoveUpRight } from "lucide-react";
import img1 from "../assets/image04.png";
import img2 from "../assets/image05.png";
import img3 from "../assets/image06.png";
import img4 from "../assets/image07.png";
import img5 from "../assets/image08.jpg";
import img6 from "../assets/image09.png";
import img7 from "../assets/image10.png";
import img8 from "../assets/image11.jpg";
import img9 from "../assets/image12.png";
import img10 from "../assets/image13.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Projects = () => {
  const cardsRef = useRef([]);

  const projectData = [
    {
      id: 1,
      heading: "salience labs",
      img: img1,
      title: [
        "brand identity",
        "pitch deck"
      ]
    },
    {
      id: 2,
      heading: "medallia experience",
      img: img2,
      title: [
        "conference",
        "executive keynote",
        "product launch"
      ]
    },
    {
      id: 3,
      heading: "ah2 & matt horn",
      img: img3,
      title: [
        "pitch deck"
      ]
    },
    {
      id: 4,
      heading: "vise",
      img: img4,
      title: [
        "agency",
        "company presentation"
      ]
    },
    {
      id: 5,
      heading: "softstart",
      img: img5,
      title: [
        "branded template",
        "sales deck"
      ]
    },
    {
      id: 6,
      heading: "fyde",
      img: img6,
      title: [
        "audit",
        "copywriting",
        "sales deck",
        "slides design"
      ]
    },
    {
      id: 7,
      heading: "all things go",
      img: img7,
      title: [
        "brand identity",
        "pitch deck"
      ]
    },
    {
      id: 8,
      heading: "trawa",
      img: img8,
      title: [
        "brand identity",
        "design research",
        "investor deck"
      ]
    },
    {
      id: 9,
      heading: "cardboard spaceship",
      img: img9,
      title: [
        "branded template",
        "sales deck",
        "social media templates"
      ]
    },
    {
      id: 10,
      heading: "premium blend",
      img: img10,
      title: [
        "branded template"
      ]
    },
  ];

  const chunkProjects = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const projectRows = chunkProjects(projectData, 2);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const heading = card.querySelector(".hover-heading");
      const letters = heading.querySelectorAll("span");

      // initial state (hidden)
      gsap.set(heading, { opacity: 1 });
      gsap.set(letters, {
        y: 90,
        opacity: 0,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(heading, {
        opacity: 1,
        duration: 0.01,
      }).to(letters, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });

      const enter = () => tl.play();
      const leave = () => tl.reverse();

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });
  }, []);

  return (
    <section className="project--section">
      <div className="project-container font-neue">
        <h1 className="project-heading text-3xl pt-7 pb-9 px-5 border-b lg:px-12 lg:text-5xl lg:pt-9 lg:pb-11">
          Featured projects
        </h1>

        <div className="project-infos py-12 px-5 lg:px-12 space-y-12">
          {
            projectRows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl p-6 bg-white">
                {
                  row.map((item) => (
                    <div ref={(el) => (cardsRef.current[item.id] = el)} key={item.id} className="group flex flex-col gap-4 overflow-hidden">
                      {/* label */}
                      <div className="flex items-center gap-2 z-10">
                        <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                        <h5 className="uppercase text-xs tracking-widest">
                          {item.heading}
                        </h5>
                      </div>

                      {/* image wrapper */}
                      <div className="overflow-hidden rounded-2xl">
                        <img src={item.img} alt="project" className="rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[0.95] cursor-pointer" />
                      </div>

                      {/* tags */}
                      <div className="flex flex-wrap gap-3 z-10">
                        {item.title.map((tag, index) => (
                          <span key={index} className="uppercase text-xs border rounded-full px-4 py-1.5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* hover heading */}
                      <h1 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] lg:text-[4.5rem] uppercase whitespace-nowrap text-[#CdEA68] font-extrabold tracking-tight opacity-0 z-20 hover-heading">
                        {
                          item.heading.split("").map((char, index) => (
                            <span key={index} className="inline-block">
                              {char === " " ? "\u00A0" : char}
                            </span>
                          ))
                        }
                      </h1>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>

        <div className="project-btn flex justify-center py-7">
          <a href="#" className="w-max flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full group">
            <h5 className="uppercase text-lg">
              view all case studies
            </h5>

            <span className="circle w-10 h-10 rounded-full bg-white relative transition-transform duration-300 ease-out scale-[.3] group-hover:scale-100">
              <MoveUpRight size={20} className="arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1A1A1A] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
