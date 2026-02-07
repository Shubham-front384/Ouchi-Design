import gsap from "gsap";
import { useEffect, useRef } from "react";

const Marque = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="marque--section bg-[#004d43] text-[#FAFAFA] rounded-t-xl overflow-hidden">
      <div className="marque-container py-20">
        <div ref={trackRef} className="marquee-track flex w-max border-y-2 border-[#FAFAFA]">
          <h1 className="marquee-text uppercase font-founder text-[20rem] pb-7 leading-[245px] whitespace-nowrap">
            we are ochi we are ochi&nbsp;
          </h1>
          <h1 className="marquee-text uppercase font-founder text-[20rem] pb-7 leading-[245px] whitespace-nowrap">
            we are ochi we are ochi&nbsp;
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Marque;
