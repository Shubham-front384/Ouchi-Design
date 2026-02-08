import { useEffect, useState } from 'react';
import img1 from '../assets/image03.jpg';

const EyePlay = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mouse Position
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Difference Between Mouse Position And Eye Position 
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Radian To Degree Convert
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setAngle(angle - 180);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, []);

  return (
    <section className="eye--section">
      <div className="eye-container w-full h-full">
        <div className="eye-bg-img w-full h-full relative">
          <img src={img1} alt="eye-img" className="w-full h-full" />
          <div className="play-eye w-[55%] h-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-around items-center">
            <div className="left-eye w-[40%] h-full rounded-full bg-white relative">
              <div className="w-[70%] h-[70%] rounded-full bg-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${angle}deg)` }}>
                <div className='w-[15%] h-[15%] bg-white rounded-full absolute top-1/2 left-0'></div>
              </div>
              <h5 className='uppercase text-white whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>play now</h5>
            </div>
            <div className="right-eye w-[40%] h-full rounded-full bg-white relative">
              <div className="w-[70%] h-[70%] rounded-full bg-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${angle}deg)` }}>
                <div className='w-[15%] h-[15%] bg-white rounded-full absolute top-1/2 left-0'></div>
              </div>
              <h5 className='uppercase text-white whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>play now</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyePlay;
