import { FaReact } from "react-icons/fa";
import {
  IoBriefcaseOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { PiPaintBrushBroadThin } from "react-icons/pi";
import { RiMenuSearchLine } from "react-icons/ri";
import { TfiBarChart } from "react-icons/tfi";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.5, // trigger animation when 50% of the component is in view
  });

  const [styles, api] = useSpring(() => ({
    opacity: 0,
    x: -100,
    config: { duration: 1000 },
  }));

  useEffect(() => {
    if (inView) {
      api.start({ opacity: 1, x: 0 });
    } else {
      api.start({ opacity: 0, x: -100 });
    }
  }, [inView, api]);
  return (
    <>
      <animated.section ref={ref} style={styles} className="bg-[#ff9000]">
        <div className="container mx-auto px-4 py-28 text-center w-[1170px]">
          <div className="mb-32">
            <h1 className="text-4xl font-normal text-white font-mono">
              My Services
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-start">
            <div className="w-1/3 flex flex-col justify-center items-center mb-12 px-4">
              <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center mb-5 text-5xl">
                <PiPaintBrushBroadThin className="text-[#ff9000]" />
              </div>
              <h3 className="text-xl font-normal mb-5 text-white">
                Web Design
              </h3>
              <p className="text-base font-normal text-white/70">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center mb-12 px-4">
              <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center mb-5 text-5xl">
                <IoBriefcaseOutline className="text-[#ff9000]" />
              </div>
              <h3 className="text-xl font-normal mb-5 text-white">Branding</h3>
              <p className="text-base font-normal text-white/70">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center mb-12 px-4">
              <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center mb-5 text-5xl">
                <RiMenuSearchLine className="text-[#ff9000]" />
              </div>
              <h3 className="text-xl font-normal mb-5 text-white">Analytics</h3>
              <p className="text-base font-normal text-white/70">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center mb-12 px-4">
              <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center mb-5 text-5xl">
                <TfiBarChart className="text-[#ff9000]" />
              </div>
              <h3 className="text-xl font-normal mb-5 text-white">
                Web Development
              </h3>
              <p className="text-base font-normal text-white/70">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center mb-12 px-4">
              <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center mb-5 text-5xl">
                <FaReact className="text-[#ff9000]" />
              </div>
              <h3 className="text-xl font-normal mb-5 text-white">
                Web Marketing
              </h3>
              <p className="text-base font-normal text-white/70">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center mb-12 px-4">
              <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center mb-5 text-5xl">
                <IoChatbubbleEllipsesOutline className="text-[#ff9000]" />
              </div>
              <h3 className="text-xl font-normal mb-5 text-white">Support</h3>
              <p className="text-base font-normal text-white/70">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit
              </p>
            </div>
          </div>
        </div>
      </animated.section>
    </>
  );
}
