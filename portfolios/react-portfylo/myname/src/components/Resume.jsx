import { FaHatCowboy, FaSuitcase } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef } from "react";

export default function Resume() {
  const resumeTitleRef = useRef(null);
  const workTimelineRef = useRef(null);
  const educationTimelineRef = useRef(null);

  const [resumeTitleStyle, resumeTitleApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
    config: {
      tension: 120,
      friction: 14,
      duration: 1000,
    },
  }));

  const [workTimelineStyle, workTimelineApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
    config: {
      tension: 120,
      friction: 14,
      duration: 1000,
    },
  }));

  const [educationTimelineStyle, educationTimelineApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
    config: {
      tension: 120,
      friction: 14,
      duration: 1000,
    },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === resumeTitleRef.current && entry.isIntersecting) {
            resumeTitleApi.start({ opacity: 1, transform: "translateY(0px)" });
          }
          if (
            entry.target === workTimelineRef.current &&
            entry.isIntersecting
          ) {
            workTimelineApi.start({ opacity: 1, transform: "translateY(0px)" });
          }
          if (
            entry.target === educationTimelineRef.current &&
            entry.isIntersecting
          ) {
            educationTimelineApi.start({
              opacity: 1,
              transform: "translateY(0px)",
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (resumeTitleRef.current) observer.observe(resumeTitleRef.current);
    if (workTimelineRef.current) observer.observe(workTimelineRef.current);
    if (educationTimelineRef.current)
      observer.observe(educationTimelineRef.current);

    return () => {
      if (resumeTitleRef.current) observer.unobserve(resumeTitleRef.current);
      if (workTimelineRef.current) observer.unobserve(workTimelineRef.current);
      if (educationTimelineRef.current)
        observer.unobserve(educationTimelineRef.current);
    };
  }, [resumeTitleApi, workTimelineApi, educationTimelineApi]);

  return (
    <div className="py-28 mx-auto font-mono relative overflow-hidden">
      <div className=" line  w-[100%] h-[1px] border-r-[1px] bg-[#4d4d4d75] absolute top-[70%] rotate-90"></div>

      <animated.div
        className="text-center leading-loose font-normal text-4xl text-black mb-32"
        style={resumeTitleStyle}
        ref={resumeTitleRef}
      >
        <h1>My Resume</h1>
      </animated.div>

      <div className="relative py-5 mb-2 text-center">
        <h3 className="inline-block px-4 py-2 text-sm uppercase tracking-widest font-bold bg-gray-200 rounded">
          Work Experience
        </h3>
      </div>

      <animated.ul
        className="relative py-5 list-none m-0  "
        style={workTimelineStyle}
        ref={workTimelineRef}
      >
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaSuitcase />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">Senior Developer</h3>
            <span className="block mb-2 text-base text-gray-400">
              Company Name - 2016 - Current
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pr-16 box-border text-left ml-[calc(50%)]">
          <div className="absolute top-1/2 right-full w-11 h-11 bg-orange-500 rounded-full z-20 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaSuitcase />
          </div>
          <div className="bg-white p-5 rounded shadow-md ml-10">
            <h3 className="font-normal mb-2 text-2xl">Junior Developer</h3>
            <span className="block mb-2 text-base text-gray-400">
              Company Name - 2013 - 2015
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaSuitcase />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">UI/UX Designer</h3>
            <span className="block mb-2 text-base text-gray-400">
              Company Name - 2010 - 2012
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
      </animated.ul>

      <div className="relative py-5 mb-2 text-center">
        <h3 className="inline-block px-4 py-2 text-sm uppercase tracking-widest font-bold bg-gray-200 rounded">
          Education
        </h3>
      </div>

      <animated.ul
        className="relative py-5 list-none m-0"
        style={educationTimelineStyle}
        ref={educationTimelineRef}
      >
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaHatCowboy />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">Masters Degree</h3>
            <span className="block mb-2 text-base text-gray-400">
              University Name - 2007 - 2009
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pr-16 box-border text-left ml-[calc(50%)]">
          <div className="absolute top-1/2 right-full w-11 h-11 bg-orange-500 rounded-full z-20 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaHatCowboy />
          </div>
          <div className="bg-white p-5 rounded shadow-md ml-10">
            <h3 className="font-normal mb-2 text-2xl">Bachelors Degree</h3>
            <span className="block mb-2 text-base text-gray-400">
              University Name - 2002 - 2006
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </li>
        <li className="relative w-1/2 py-5 pl-16 box-border text-right">
          <div className="absolute top-1/2 left-full w-11 h-11 bg-orange-500 rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
            <FaHatCowboy />
          </div>
          <div className="bg-white p-5 rounded shadow-md mr-10">
            <h3 className="font-normal mb-2 text-2xl">Associate Degree</h3>
            <span className="block mb-2 text-base text-gray-400">
              College Name - 1998 - 2001
            </span>
            <div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </li>
      </animated.ul>
    </div>
  );
}
