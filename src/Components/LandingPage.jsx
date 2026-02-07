import { MoveUpRight } from 'lucide-react';
import img1 from '../assets/image01.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LandingPage = () => {
  const eyeRef = useRef(null);

  useEffect(() => {
    // 1️⃣ initial position (IMPORTANT)
    gsap.set(eyeRef.current, {
      xPercent: 0,
    });

    // 2️⃣ animate after mount
    gsap.to(eyeRef.current, {
      xPercent: 32,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section className="pt-[100px] pb-[90px] h-full md:h-1/2 lg:pt-[140px] md:pb-[120px] min-h-vh-static md:min-h-[700px]">
      <div className="flex flex-col h-full justify-between">
        <div className='px-5 flex flex-col gap-2.5 lg:px-12 lg:mb-[6.5rem]'>
          {['we create', 'eye-opening', 'presentations'].map((item, index) => {
            return (
              <div
                className={`masker w-max ${index === 1 && 'inline-flex items-end gap-2 relative'}`}
                key={index}
              >
                <img
                  className={`w-[65px] h-[40px] lg:w-[135px] lg:h-[85px] rounded-xl ${index === 1 ? 'flex' : 'hidden'}`}
                  src={img1}
                  alt="eye-opening-img"
                />
                <h1 ref={index === 1 ? eyeRef : null} className={`uppercase font-founder text-6xl leading-[45px] lg:-tracking-[2px] lg:text-9xl lg:leading-[95px] bg-[#FAFAFA] w-max ${ index === 1 && 'absolute' }`}>
                  {item}
                </h1>
              </div>
            );
          })}
        </div>

        <div className='flex flex-col py-4 gap-6 border-t border-gray-400 md:flex-row md:px-5 md:justify-between'>
          {
            ["Presentation and storytelling agency", "For innovation teams and global brands", "start the project"].map((item, index) => {
              return (
                <div className={`${index === 2 && 'flex items-center gap-2'}`} key={index}>
                  <p className={`mx-5 md:mx-0 font-neue ${index === 2 && 'uppercase border w-max rounded-2xl py-1 px-3 text-[.9rem] cursor-pointer duration-300 ease-out transition-all hover:bg-[#212121] hover:text-[#FAFAFA]'} text-[#212121]`} key={index}>
                    { item }
                  </p>
                  {
                    index === 2 && (
                      <div className="relative group cursor-pointer">
                        <span className=" absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-black -translate-x-1/2 -translate-y-1/2 scale-[0.3] opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />

                        <MoveUpRight size={32} className="relative z-10 border rounded-full p-2 transition-all duration-300 ease-out group-hover:text-white " />
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
