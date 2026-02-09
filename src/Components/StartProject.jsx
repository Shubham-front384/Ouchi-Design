import { MoveUpRight } from "lucide-react"
import { useEffect, useState } from "react";

const StartProject = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setAngle(angle - 180);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, []);

  return (
    <section className="start-project">
      <div className="start-container px-5 pt-5 pb-10 bg-[#CDEA68] rounded-t-2xl flex flex-col gap-8 lg:px-12">
        <div className="start-heading relative">
          <h2 className="uppercase text-7xl text-center pt-16 font-founder leading-14 md:text-[9rem] md:leading-[100px]">
            ready<br />
            to start<br />
            the project ?
          </h2>

          <div className="play-eye w-[55%] h-[35%] md:h-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-around items-center">
            <div className="left-eye w-[40%] h-full rounded-full bg-white relative">
              <div className="w-[70%] h-[70%] rounded-full bg-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${angle}deg)` }}>
                <div className='w-[15%] h-[15%] bg-white rounded-full absolute top-0 left-1/2'></div>
              </div>
              <h5 className='uppercase text-white whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[.65rem] md:text-sm'>play now</h5>
            </div>
            <div className="right-eye w-[40%] h-full rounded-full bg-white relative">
              <div className="w-[70%] h-[70%] rounded-full bg-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${angle}deg)` }}>
                <div className='w-[15%] h-[15%] bg-white rounded-full absolute top-0 left-1/2'></div>
              </div>
              <h5 className='uppercase text-white whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[.65rem] md:text-sm'>play now</h5>
            </div>
          </div>
        </div>

        <ul className="start-link flex flex-col items-center justify-center gap-4">
          {
            ["start the project", "or", "hello@ochi.design"].map((item, index) => (
              <li key={index} className={`w-max uppercase flex items-center group ${index === 2 ? "text-black px-7 py-3 rounded-full border cursor-pointer" : ""} ${index === 0 ? "bg-black text-white px-7 py-3 rounded-full cursor-pointer" : ""}`}>
                <a href="#" className="text-md">
                  {item}
                </a>
                {
                  (index === 1) ? "" : (
                    <span className="ml-4 relative w-10 h-10 flex items-center justify-center">
                      <span className={`absolute inset-0 rounded-full bg-white scale-[.3] transition-all duration-300 ease-out group-hover:scale-100`}></span>
      
                      <MoveUpRight
                        size={20}
                        className="relative text-[#1A1A1A] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                      />
                    </span>
                  )
                }
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default StartProject
