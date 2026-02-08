import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import profileImg from '../assets/image02.jpg';
import { MoveUpRight } from 'lucide-react';

const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      const black = item.querySelector('.underline-black');
      const red = item.querySelector('.underline-red');

      const tl = gsap.timeline({ paused: true });

      tl.to(black, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.out',
      }).to(
        red,
        {
          x: '0%',
          duration: 0.3,
          ease: 'power2.out',
        },
        '+=0.05'
      );

      item.addEventListener('mouseenter', () => tl.play());
      item.addEventListener('mouseleave', () => tl.reverse());
    });
  }, []);

  return (
    <section className="about--section bg-[#cdea68] rounded-t-xl pt-10 pb-8">
      <div className="about-container font-neue">
        <h1 className="about-heading text-3xl md:text-[2.5rem] lg:text-5xl leading-tight pb-16 px-5 lg:px-12">
          We craft category-defining presentations, brand identities, and
          digital experience that{' '}
          <span className="inline-flex gap-2.5 flex-wrap">
            <span
              ref={(el) => (itemsRef.current[0] = el)}
              className="relative pb-1.5 inline-block cursor-pointer w-max overflow-hidden"
            >
              dive funding, sales
              <span className="underline-black absolute left-0 bottom-0 w-full h-0.5 bg-black"></span>
              <span className="underline-red absolute left-0 bottom-0 w-full h-0.5 bg-black -translate-x-full"></span>
            </span>{' '}
            and{' '}
            <span
              ref={(el) => (itemsRef.current[1] = el)}
              className="relative pb-1.5 inline-block cursor-pointer w-max overflow-hidden"
            >
              market leadership
              <span className="underline-black absolute left-0 bottom-0 w-full h-0.5 bg-black"></span>
              <span className="underline-red absolute left-0 bottom-0 w-full h-0.5 bg-black -translate-x-full"></span>
            </span>
            .
          </span>
        </h1>

        <div className="about-data py-6 border-y px-5 lg:px-12 flex flex-col gap-5 md:flex-row md:justify-between pb-[80px]">
          <div className="data-left">
            <h5>What you can expect.</h5>
          </div>
          <div className="data-right flex flex-col gap-5 md:flex-row md:items-end">
            <div className="data-info max-w-[275px] flex flex-col gap-8">
              {[
                `We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"`,
                'Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.',
                "Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.",
              ].map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
            <div className="data-links flex flex-col gap-4 md:w-[200px] md:items-end">
              <h5 className="uppercase">s:</h5>
              <ul className="data-link flex flex-col">
                {['instagram', 'behance', 'facebook', 'linkedin'].map(
                  (item, index) => (
                    <li
                      key={index}
                      ref={(el) => (itemsRef.current[index] = el)}
                      className="relative w-max cursor-pointer overflow-hidden"
                    >
                      <span className="capitalize">{item}</span>

                      <span className="underline-black absolute left-0 bottom-0 h-[1px] w-full bg-black"></span>

                      <span className="underline-red absolute left-0 bottom-0 h-[1px] w-full bg-black -translate-x-full"></span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="about-help px-5 lg:px-12 pt-5 flex flex-col gap-10 md:flex-row">
          <div className="help-left flex flex-col gap-3 whitespace-nowrap">
            <h5 className="text-[31px]">How we can help:</h5>
            <a
              href="#"
              className="group flex items-center uppercase bg-black text-white py-3 px-5 rounded-full w-max"
            >
              read more
              <span className="ml-6 relative w-10 h-10 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-white scale-[.3] transition-all duration-300 ease-out group-hover:scale-100"></span>

                <MoveUpRight
                  size={20}
                  className="relative text-[#1A1A1A] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </span>
            </a>
          </div>
          <div className="help-right flex justify-end">
            <img
              src={profileImg}
              alt="profile-img"
              className="rounded-xl w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
