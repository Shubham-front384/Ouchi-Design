import { useEffect, useRef } from 'react';
import img1 from '../assets/image14.png';
import logo1 from '../assets/logo01.svg';
import logo2 from '../assets/logo02.svg';
import logo3 from '../assets/logo03.png';
import gsap from 'gsap';

const Client = () => {
  const info = [
    { id: 1, t1: 'medallia', t2: 'becky chastain', read: 'read' },
    { id: 2, t1: 'planetly', t2: 'nina walloch', read: 'read' },
    { id: 3, t1: 'workiz easy', t2: 'tomer levy', read: 'read' },
    { id: 4, t1: 'premium blend', t2: 'ellen kim', read: 'read' },
    { id: 5, t1: 'hypercare systems', t2: 'brendan goss', read: 'read' },
    { id: 6, t1: 'officevibe', t2: 'raff labrie', read: 'read' },
    { id: 7, t1: 'orderlion', t2: 'stefan strohmer', read: 'read' },
    { id: 8, t1: 'black book', t2: 'jaci smith', read: 'read' },
    { id: 9, t1: 'trawa energy', t2: 'david budde', read: 'read' },
  ];

  const cardInfo = [
    { id: 1, img: logo1, p: "© 2019-2025" },
    { id: 2, img: logo2, p: "rating 5.0 on clutch" },
    { id: 3, img: logo3, p: "business bootcamp alumni" },
  ];

  const underlineRefs = useRef([]);

  const setupUnderlineAnim = (el) => {
    if (!el) return;

    const black = el.querySelector('.underline-black');
    const red = el.querySelector('.underline-red');

    if (!black || !red) return;

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

    el.addEventListener('mouseenter', () => tl.play());
    el.addEventListener('mouseleave', () => tl.reverse());
  };

  useEffect(() => {
    underlineRefs.current.forEach(setupUnderlineAnim);
  }, []);

  return (
    <section className="client--section">
      <div className="client-container font-neue">
        <h2 className="border-b border-[#B2B2B2] text-3xl px-5 pt-5 pb-8 md:text-6xl lg:px-12">
          Client&apos;s reviews
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 py-4 px-5 lg:px-12 lg:justify-between">
          <div className="flex flex-col gap-10 lg:flex-row lg:w-2/5 lg:justify-between">
            <div className="flex items-center justify-between lg:items-start">
              <span className="capitalize border-b whitespace-nowrap">
                karman ventures
              </span>
              <span className="text-[#B2B2B2] uppercase lg:hidden">read</span>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="capitalize">services:</h5>
              <ul className="flex gap-3 lg:flex-col">
                {['investor deck', 'sales deck'].map((item, i) => (
                  <li
                    key={i}
                    className="uppercase border rounded-full px-4 py-1 text-sm w-max"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-1/2">
            <div className="flex justify-between items-center">
              <span className="capitalize">william barnes</span>
              <span className="uppercase text-[#B2B2B2] hidden lg:block">
                read
              </span>
            </div>

            <img src={img1} alt="client" className="w-24 rounded-2xl" />

            <p className="lg:max-w-[398px]">
              They were transparent about the time and the stages of the project.
              The end product is high quality, and I feel confident about how
              they were handholding the client through the process. 5/5
            </p>
          </div>
        </div>

        <ul className="flex flex-col pt-4 pb-10">
          {info.map((item, index) => (
            <li
              key={item.id}
              className={`grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr_auto] px-5 py-2 border-t border-[#B2B2B2] lg:px-12 ${
                index === info.length - 1 ? 'border-b' : ''
              }`}
            >
              <span
                ref={(el) => el && underlineRefs.current.push(el)}
                className="relative w-max overflow-hidden cursor-pointer capitalize"
              >
                {item.t1}
                <span className="underline-black absolute left-0 bottom-0 w-full h-[1px] bg-black" />
                <span className="underline-red absolute left-0 bottom-0 w-full h-[1px] bg-black -translate-x-full" />
              </span>

              <span className="capitalize hidden lg:block">{item.t2}</span>

              <span
                ref={(el) => el && underlineRefs.current.push(el)}
                className="relative w-max overflow-hidden cursor-pointer uppercase"
              >
                {item.read}
                <span className="underline-black absolute left-0 bottom-0 w-full h-[1px] bg-black" />
                <span className="underline-red absolute left-0 bottom-0 w-full h-[1px] bg-black -translate-x-full" />
              </span>
            </li>
          ))}
        </ul>

        <div className="client-cards px-5 pb-8 grid grid-rows-[300px_300px_300px] md:grid-cols-2 md:grid-rows-[300px_300px] lg:grid-cols-[535px_300px_300px] lg:grid-rows-1 gap-4 lg:px-12">
          {
            cardInfo.map((item) => (
              <div key={item.id} className={`overflow-hidden rounded-2xl flex items-center justify-center relative lg:h-[350px] ${item.id === 1 ? 'bg-[#004D43] md:col-span-2 lg:col-span-1' : 'bg-[#212121]'}`}>
                <img className='w-24 lg:w-32' src={item.img} alt="item-img" />
                <p className={`absolute bottom-5 left-5 uppercase border rounded-full px-4 py-1 ${item.id === 1 ? 'text-[#CdEA68] border-[#CdEA68]' : 'text-[#D6D6D6] border-[#D6D6D6]'}`}>
                  {item.p}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Client;
