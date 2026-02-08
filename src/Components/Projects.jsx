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
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const tl = gsap.timeline({ paused: true });

    // initial state
    gsap.set(".circle", { scale: 0.3 });
    gsap.set(".arrow", { opacity: 0 });

    tl.to(".circle", {
      scale: 1,
      duration: .3,
      ease: "power3.out",
    }).to(".arrow", {
      opacity: 1,
      duration: .2,
      ease: "power2.out",
    },
      "-=0.15"
    );

    const enter = () => tl.play();
    const leave = () => tl.reverse();

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);
  }, []);

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
  return (
    <section className="project--section">
      <div className="project-container font-neue">
        <h1 className="project-heading text-3xl pt-7 pb-9 px-5 border-b lg:px-12 lg:text-5xl lg:pt-9 lg:pb-11">
          Featured projects
        </h1>

        <div className="project-infos grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-5 lg:px-12">
          {
            projectData.map((item) => {
              return (
                <div key={ item.id } className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                    <h5 className="uppercase text-md">{ item.heading }</h5>
                  </div>
                  <img className="rounded-xl hover:scale-[.97] transition-all duration-300 cursor-pointer" src={ item.img } alt="project-img" />
                  <div className="flex flex-wrap items-center gap-3">
                    {
                      item.title.map((item, index) => {
                        return (
                          <a href="#" key={ index } className="uppercase text-md border rounded-full px-3 py-1">
                            { item }
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="project-btn flex justify-center py-7">
          <a href="#" className="w-max flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full" ref={btnRef}>
            <h5 className="uppercase text-lg">
              view all case studies
            </h5>

            <span className="circle w-10 h-10 rounded-full bg-white relative">
              <MoveUpRight size={20} className="arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1A1A1A]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
